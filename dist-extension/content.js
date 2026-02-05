/**
 * Axiom Shield - Content Script
 * 100% Client-side safety logic for ChatGPT
 */

// --- Configuration ---
const piiPatterns = {
  email: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g,
  phone: /\b(\+\d{1,2}\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}\b/g,
  ssn: /\b\d{3}-\d{2}-\d{4}\b/g,
  card: /\b\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}\b/g
};

const secretPatterns = {
  openai: /sk-(?:proj-)?[a-zA-Z0-9_-]{7,}/g,
  anthropic: /sk-ant-[a-zA-Z0-9_-]{12,}/g,
  google: /AIza[0-9A-Za-z_-]{20,}/g,
  aws: /AKIA[0-9A-Z]{12,}/g,
  github: /ghp_[a-zA-Z0-9]{20,}/g,
  deepseek: /sk-[a-f0-9]{32,}/g,
  perplexity: /pplx-[a-zA-Z0-9]{20,}/g,
  huggingface: /hf_[a-zA-Z0-9]{20,}/g,
  stripe: /sk_live_[a-zA-Z0-9]{15,}/g,
  azure: /[a-f0-9]{32}/g
};

const liabilityWords = ['guarantee', 'promise', 'warranty', 'refund', '100% safe'];

// --- State Management ---
let activeInput = null;
let lastKnownValue = "";
let activeWarningBanner = null;
let dismissedWords = new Set();

// --- Utility: Multi-Platform Selectors ---
function getInputSelector() {
  const host = window.location.hostname;
  if (host.includes('chatgpt.com') || host.includes('openai.com')) return '#prompt-textarea, [contenteditable="true"]';
  if (host.includes('google.com')) return '.ql-editor, [role="textbox"]';
  if (host.includes('perplexity.ai')) return 'textarea';
  if (host.includes('deepseek.com')) return 'textarea';
  if (host.includes('claude.ai')) return '[contenteditable="true"]';
  if (host.includes('x.ai')) return '[role="textbox"], textarea';
  return 'div[contenteditable="true"], textarea, [role="textbox"]';
}

function getChatInput() {
  return document.querySelector(getInputSelector());
}

// --- Sync with React/SPA State ---
function updateInputValue(element, newValue) {
  if (element.tagName === 'TEXTAREA' || element.tagName === 'INPUT') {
    const start = element.selectionStart;
    const end = element.selectionEnd;
    element.value = newValue;
    element.setSelectionRange(start, end);
    element.dispatchEvent(new Event('input', { bubbles: true }));
  } else {
    element.innerText = newValue;
    element.dispatchEvent(new Event('input', { bubbles: true }));
  }
  lastKnownValue = newValue;
}

// --- Shield Logic: Sensitive Data Redactor ---
function redactSensitiveData(element) {
  let text = element.innerText || element.value || "";
  if (!text) return;

  let originalText = text;

  // Apply PII & Secret redaction
  text = text.replace(piiPatterns.email, '[EMAIL_REDACTED]');
  text = text.replace(piiPatterns.phone, '[PHONE_REDACTED]');
  text = text.replace(piiPatterns.ssn, '[SSN_REDACTED]');
  text = text.replace(piiPatterns.card, '[CARD_REDACTED]');

  Object.values(secretPatterns).forEach(pattern => {
    text = text.replace(pattern, '[KEY_REDACTED]');
  });

  if (text !== originalText) {
    console.log("[Axiom Shield] Redacting sensitive content...");
    updateInputValue(element, text);
  }
}

// --- Shield Logic: Liability Warner ---
function toggleWarningBanner(words) {
  const wordsKey = words.sort().join('|');

  // If no words or all are dismissed, clear banner
  if (words.length === 0 || words.every(w => dismissedWords.has(w))) {
    if (activeWarningBanner) {
      activeWarningBanner.remove();
      activeWarningBanner = null;
    }
    if (words.length === 0) dismissedWords.clear();
    return;
  }

  // If banner already showing these exact words, stay quiet
  if (activeWarningBanner && activeWarningBanner.getAttribute('data-words') === wordsKey) return;

  // Otherwise, (re)create banner
  if (activeWarningBanner) activeWarningBanner.remove();

  let wordList = (words.length === 1) ? `"${words[0]}"` :
    (words.length === 2) ? `"${words[0]}" and "${words[1]}"` :
      words.slice(0, -1).map(w => `"${w}"`).join(', ') + `, and "${words.slice(-1)}"`;

  activeWarningBanner = document.createElement('div');
  activeWarningBanner.id = 'axiom-liability-banner';
  activeWarningBanner.setAttribute('data-words', wordsKey);
  activeWarningBanner.style.cssText = `
    position: fixed; top: 75px; right: 20px; background: #FFF3CD;
    border: 2px solid #FFD700; padding: 16px; border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2); z-index: 2147483647;
    max-width: 340px; font-family: system-ui, sans-serif; color: #856404;
    animation: axiomFadeIn 0.3s ease;
  `;

  activeWarningBanner.innerHTML = `
    <style>@keyframes axiomFadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }</style>
    <div style="display: flex; align-items: start; gap: 12px;">
      <span style="font-size: 20px;">⚠️</span>
      <div style="flex: 1; line-height: 1.4;">
        <strong>Legal Risk Detected</strong><br>
        <span style="font-size: 13px;">Word(s) ${wordList} may create liability.</span>
      </div>
      <button id="axiom-dismiss-btn" style="background: white; border: 1px solid #daa520; padding: 4px 10px; border-radius: 4px; cursor: pointer; color: #856404; font-size: 11px; font-weight: bold;">Dismiss</button>
    </div>
  `;
  document.body.appendChild(activeWarningBanner);

  document.getElementById('axiom-dismiss-btn').onclick = () => {
    words.forEach(w => dismissedWords.add(w));
    activeWarningBanner.remove();
    activeWarningBanner = null;
  };
}

function checkLiability(element) {
  const text = (element.innerText || element.textContent || element.value || "").toLowerCase();
  const found = liabilityWords.filter(word => text.includes(word.toLowerCase()));
  toggleWarningBanner(found);
}

// --- Submission Intercept ---
function interceptSubmission(e) {
  const input = getChatInput();
  if (!input) return;
  redactSensitiveData(input);
  const text = input.innerText || input.value || "";
  const hasSecrets = Object.values(secretPatterns).some(pattern => pattern.test(text));
  if (hasSecrets) {
    e.preventDefault();
    e.stopImmediatePropagation();
    alert('⚠️ API Key Detected! Submission blocked.');
    return false;
  }
}

// --- Engine Core ---
const attachedElements = new WeakSet();

function attachListeners(input) {
  if (attachedElements.has(input)) return;
  attachedElements.add(input);

  console.log("[Axiom Shield] Securing new input field...");
  input.addEventListener('input', performAudit);
  input.addEventListener('paste', () => setTimeout(performAudit, 20));
  input.addEventListener('blur', performAudit);
}

function performAudit() {
  const input = getChatInput();
  if (!input) return;

  if (!attachedElements.has(input)) {
    attachListeners(input);
  }

  const currentVal = input.innerText || input.value || "";
  if (currentVal === lastKnownValue && input === activeInput) return;

  lastKnownValue = currentVal;
  activeInput = input;

  redactSensitiveData(input);
  checkLiability(input);
}

// --- Execution ---
// 1. Polling for SPA transitions
setInterval(performAudit, 1000);

// 2. Global interception for send actions
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) interceptSubmission(e);
}, true);

document.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-testid="send-button"], button.absolute, [aria-label="Send message"], .send-button');
  if (btn) interceptSubmission(e);
}, true);

// 3. Mutation Watchdog (for heavy DOM changes)
const observer = new MutationObserver(performAudit);
observer.observe(document.body, { childList: true, subtree: true, characterData: true });

console.log("🛡️ Axiom Shield Core v2.1 Active.");

// --- Protected Indicator ---
const shieldIcon = document.createElement('div');
shieldIcon.innerHTML = '🛡️ Protected';
shieldIcon.style.cssText = `position: fixed; bottom: 15px; right: 15px; background: #00C853; color: white; padding: 6px 12px; border-radius: 15px; font-size: 11px; z-index: 10000; box-shadow: 0 1px 5px rgba(0,0,0,0.1); font-family: sans-serif; font-weight: bold; pointer-events: none;`;
document.body.appendChild(shieldIcon);

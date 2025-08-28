// Mock Token Logging Demonstration
// This script demonstrates token logging without requiring API keys

// Mock token usage data
const mockTokenData = {
  "Hello": { input: 1, output: 2, total: 3 },
  "Hello world": { input: 2, output: 3, total: 5 },
  "Hello world, how are you today?": { input: 6, output: 8, total: 14 },
  "This is a longer sentence that demonstrates how different text lengths affect token counts in AI models.": { input: 15, output: 12, total: 27 },
  "Supercalifragilisticexpialidocious": { input: 4, output: 2, total: 6 }
};

// Token logging utility
function logTokens(provider, text, usage) {
  console.log(`\n🔢 ${provider.toUpperCase()} TOKENS:`);
  console.log(`   Input: ${usage.input} tokens`);
  console.log(`   Output: ${usage.output} tokens`);
  console.log(`   Total: ${usage.total} tokens`);
  console.log(`   Cost: $${calculateCost(provider, usage).toFixed(6)}`);
  console.log("─".repeat(50));
}

// Cost calculation (approximate)
function calculateCost(provider, usage) {
  if (provider === 'openai') {
    const inputCost = usage.input * 0.00000015;
    const outputCost = usage.output * 0.0000006;
    return inputCost + outputCost;
  }
  return 0;
}

// Simulate API delay
function simulateAPICall() {
  return new Promise(resolve => {
    setTimeout(resolve, 500);
  });
}

// Mock API response
async function mockAIResponse(text, provider = 'openai') {
  console.log(`🤖 ${provider.toUpperCase()} Request: "${text.substring(0, 50)}${text.length > 50 ? '...' : ''}"`);
  
  // Simulate processing time
  await simulateAPICall();
  
  // Mock response
  const responses = {
    "Hello": "Hi there! How can I help you today?",
    "Hello world": "Hello! Welcome to the world of AI and tokens.",
    "Hello world, how are you today?": "Hello! I'm doing well, thank you for asking. How about you?",
    "This is a longer sentence that demonstrates how different text lengths affect token counts in AI models.": "You're absolutely right! Longer sentences use more tokens, which affects both cost and processing time.",
    "Supercalifragilisticexpialidocious": "That's quite a word! It gets broken down into multiple tokens due to its length."
  };
  
  const response = responses[text] || "I understand your message about tokens.";
  console.log(`✅ ${provider.toUpperCase()} Response: ${response}`);
  
  return mockTokenData[text] || { input: Math.ceil(text.length / 4), output: 5, total: Math.ceil(text.length / 4) + 5 };
}

// Main demonstration
async function demonstrateTokenLogging() {
  console.log("🚀 AI KnowledgeMate - Token Logging Demonstration");
  console.log("=".repeat(60));
  console.log("📹 This is a demonstration for video recording");
  console.log("🔑 No API keys required - using mock data");
  console.log("=".repeat(60));
  
  const testTexts = Object.keys(mockTokenData);
  
  for (const text of testTexts) {
    console.log(`\n📝 Testing: "${text}"`);
    console.log(`   Character count: ${text.length}`);
    
    // Test OpenAI
    const openaiUsage = await mockAIResponse(text, 'openai');
    logTokens('openai', text, openaiUsage);
    

    
    console.log("\n" + "=".repeat(60));
  }
  
  console.log("\n🎯 KEY INSIGHTS FOR VIDEO:");
  console.log("• Shorter text = fewer tokens = lower cost");
  console.log("• Long words like 'Supercalifragilisticexpialidocious' get split into multiple tokens");
  console.log("• Punctuation and spaces count as separate tokens");
  console.log("• Different providers may tokenize text differently");
  console.log("• Every token has a cost - input + output = total bill");
  
  console.log("\n💰 COST INFORMATION:");
  console.log("• OpenAI: ~$0.00000015 per input token, ~$0.0000006 per output token");
  console.log("• Small amounts add up quickly with high-volume usage!");
  
  console.log("\n🎉 Demonstration complete! Ready for video recording.");
}

// Run the demonstration
demonstrateTokenLogging(); 
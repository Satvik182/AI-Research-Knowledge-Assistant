import OpenAI from "openai";
// import Cohere from "cohere-ai"; // Commented out for this test
import dotenv from "dotenv";

dotenv.config();

// Initialize clients
const openaiClient = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Note: Cohere initialization is handled differently in the main app

// Simple token logging function
function logTokens(provider, usage) {
  console.log(`\n🔢 ${provider.toUpperCase()} TOKENS:`);
  console.log(`   Input: ${usage.prompt_tokens || usage.input_tokens || 'N/A'}`);
  console.log(`   Output: ${usage.completion_tokens || usage.output_tokens || 'N/A'}`);
  console.log(`   Total: ${usage.total_tokens || 'N/A'}`);
  console.log("─".repeat(40));
}

// Test different text lengths
const testTexts = [
  "Hello",
  "Hello world",
  "Hello world, how are you today?",
  "This is a longer sentence that demonstrates how different text lengths affect token counts in AI models.",
  "Supercalifragilisticexpialidocious"
];

async function testTokenization() {
  console.log("🎬 TOKEN DEMONSTRATION FOR VIDEO");
  console.log("=".repeat(50));
  
  console.log("\n📝 Testing different text lengths:");
  
  for (const text of testTexts) {
    console.log(`\nText: "${text}"`);
    console.log(`Length: ${text.length} characters`);
    
    try {
      // OpenAI test
      const openaiResponse = await openaiClient.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: text }],
        max_tokens: 10
      });
      
      logTokens('openai', openaiResponse.usage);
      
    } catch (error) {
      console.log("❌ OpenAI Error:", error.message);
    }
  }
  
  console.log("\n🎯 KEY TAKEAWAYS FOR VIDEO:");
  console.log("• Shorter text = fewer tokens = lower cost");
  console.log("• Long words get split into multiple tokens");
  console.log("• Punctuation counts as tokens");
  console.log("• Every token has a cost!");
}

// Run the demonstration
testTokenization(); 
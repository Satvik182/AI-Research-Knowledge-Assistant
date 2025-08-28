import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

// Initialize OpenAI client
const openaiClient = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});



// Token logging utility
function logTokens(provider, usage) {
  console.log(`\n🔢 ${provider.toUpperCase()} TOKENS USED:`);
  console.log(`   Prompt tokens: ${usage.prompt_tokens || usage.input_tokens || 'N/A'}`);
  console.log(`   Completion tokens: ${usage.completion_tokens || usage.output_tokens || 'N/A'}`);
  console.log(`   Total tokens: ${usage.total_tokens || (usage.input_tokens + usage.output_tokens) || 'N/A'}`);
  console.log(`   Cost estimate: $${calculateCost(provider, usage).toFixed(6)}`);
  console.log("─".repeat(50));
}

// Cost calculation (approximate)
function calculateCost(provider, usage) {
  const totalTokens = usage.total_tokens || (usage.input_tokens + usage.output_tokens);
  
  if (provider === 'openai') {
    // GPT-4o-mini pricing (approximate)
    const inputCost = (usage.prompt_tokens || usage.input_tokens) * 0.00000015;
    const outputCost = (usage.completion_tokens || usage.output_tokens) * 0.0000006;
    return inputCost + outputCost;
  }
  return 0;
}

// OpenAI API call with token logging and temperature control
async function getOpenAIResponse(prompt, temperature = 0.7) {
  try {
    console.log(`🤖 OpenAI Request: "${prompt.substring(0, 50)}${prompt.length > 50 ? '...' : ''}"`);
    console.log(`🌡️ Temperature: ${temperature}`);
    
    const response = await openaiClient.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: temperature,
    });

    console.log("✅ OpenAI Response:", response.choices[0].message.content);
    logTokens('openai', response.usage);
    
    return response.choices[0].message.content;
  } catch (error) {
    console.error("❌ OpenAI Error:", error.message);
    throw error;
  }
}



// Embeddings with token logging
async function getOpenAIEmbeddings(text) {
  try {
    console.log(`🔍 OpenAI Embeddings Request: "${text.substring(0, 50)}${text.length > 50 ? '...' : ''}"`);
    
    const response = await openaiClient.embeddings.create({
      model: "text-embedding-3-small",
      input: text,
    });

    console.log("✅ Embeddings generated successfully");
    console.log(`   Vector dimensions: ${response.data[0].embedding.length}`);
    
    // Embeddings usage
    const usage = {
      prompt_tokens: response.usage.prompt_tokens,
      completion_tokens: 0,
      total_tokens: response.usage.total_tokens,
    };
    
    logTokens('openai', usage);
    
    return response.data[0].embedding;
  } catch (error) {
    console.error("❌ Embeddings Error:", error.message);
    throw error;
  }
}

// Main demonstration function
async function demonstrateTokenLogging() {
  console.log("🚀 AI KnowledgeMate - Token Logging & Temperature Demonstration");
  console.log("=".repeat(60));
  
  try {
    // Test OpenAI with different temperatures
    console.log("\n📝 Testing OpenAI GPT-4o-mini with different temperatures...");
    
    const testPrompt = "Write a creative story about a robot learning to paint.";
    
    console.log("\n🌡️ Low Temperature (0.1) - More Focused/Deterministic:");
    await getOpenAIResponse(testPrompt, 0.1);
    
    console.log("\n🌡️ Medium Temperature (0.7) - Balanced Creativity:");
    await getOpenAIResponse(testPrompt, 0.7);
    
    console.log("\n🌡️ High Temperature (1.0) - More Creative/Random:");
    await getOpenAIResponse(testPrompt, 1.0);
    
    // Test Embeddings
    console.log("\n📝 Testing OpenAI Embeddings...");
    await getOpenAIEmbeddings("This is a test sentence for embedding generation.");
    
    console.log("\n🎉 All API calls completed with token logging and temperature control!");
    
  } catch (error) {
    console.error("❌ Demonstration failed:", error.message);
  }
}

// Run the demonstration
demonstrateTokenLogging();

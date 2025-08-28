import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

// Initialize OpenAI client
const openaiClient = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Temperature demonstration function
async function demonstrateTemperature(prompt, temperature, description) {
  try {
    console.log(`\n🌡️ ${description} (Temperature: ${temperature})`);
    console.log("─".repeat(60));
    
    const response = await openaiClient.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: temperature,
      max_tokens: 150,
    });

    console.log(`🤖 Response: ${response.choices[0].message.content}`);
    console.log(`📊 Tokens used: ${response.usage.total_tokens}`);
    console.log("─".repeat(60));
    
    return response.choices[0].message.content;
  } catch (error) {
    console.error(`❌ Error with temperature ${temperature}:`, error.message);
    return null;
  }
}

// Main temperature demonstration
async function temperatureDemonstration() {
  console.log("🌡️ TEMPERATURE IN LLMs - DEMONSTRATION");
  console.log("=".repeat(60));
  console.log("Temperature controls randomness in AI responses:");
  console.log("• 0.0 = Most deterministic/focused");
  console.log("• 0.7 = Balanced creativity (default)");
  console.log("• 1.0 = Most creative/random");
  console.log("=".repeat(60));

  const testPrompts = [
    {
      prompt: "Write a haiku about coding",
      description: "Creative Writing Task"
    },
    {
      prompt: "Explain what temperature means in AI models",
      description: "Educational Task"
    },
    {
      prompt: "Generate 3 business ideas for a tech startup",
      description: "Idea Generation Task"
    }
  ];

  for (const testCase of testPrompts) {
    console.log(`\n📝 ${testCase.description}: "${testCase.prompt}"`);
    console.log("=".repeat(60));
    
    // Test with different temperatures
    await demonstrateTemperature(testCase.prompt, 0.1, "Low Temperature - Focused/Deterministic");
    await demonstrateTemperature(testCase.prompt, 0.7, "Medium Temperature - Balanced");
    await demonstrateTemperature(testCase.prompt, 1.0, "High Temperature - Creative/Random");
    
    console.log("\n" + "=".repeat(60));
  }

  console.log("\n🎯 KEY INSIGHTS:");
  console.log("• Lower temperature = More consistent, focused responses");
  console.log("• Higher temperature = More creative, varied responses");
  console.log("• Temperature affects both creativity and consistency");
  console.log("• Choose temperature based on your use case");
  
  console.log("\n✅ Temperature demonstration complete!");
}

// Run the demonstration
temperatureDemonstration(); 
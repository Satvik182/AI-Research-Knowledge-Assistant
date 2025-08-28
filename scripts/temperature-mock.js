// Mock Temperature Demonstration
// This script demonstrates temperature functionality without requiring API keys

// Mock responses for different temperatures
const mockResponses = {
  "Write a haiku about coding": {
    0.1: "Code flows like water,\nLogic builds the future bright,\nBugs fade away now.",
    0.7: "Screens glow in darkness,\nFingers dance on keys with grace,\nCode dreams come alive.",
    1.0: "Digital whispers,\nAlgorithms paint the stars,\nSilicon dreams bloom."
  },
  "Explain what temperature means in AI models": {
    0.1: "Temperature in AI models controls randomness. Lower values (0.0-0.3) make responses more deterministic and focused. Higher values (0.7-1.0) increase creativity and variety.",
    0.7: "Temperature is like a creativity dial for AI. At low settings, the AI gives consistent, predictable answers. At high settings, it becomes more imaginative and varied in its responses.",
    1.0: "Think of temperature as the AI's mood! Low temp = serious professor mode, high temp = creative artist mode. It's the spice that makes AI responses either precise or playful!"
  },
  "Generate 3 business ideas for a tech startup": {
    0.1: "1. AI-powered customer service chatbot\n2. Cloud-based project management platform\n3. Mobile app for remote team collaboration",
    0.7: "1. Smart home energy optimization system\n2. AI-driven personal fitness coach app\n3. Blockchain-based supply chain tracker",
    1.0: "1. Robot pet sitter with mood detection\n2. Holographic cooking assistant\n3. Time-travel themed productivity app (just kidding, but maybe?)"
  }
};

// Simulate API delay
function simulateAPICall() {
  return new Promise(resolve => {
    setTimeout(resolve, 300);
  });
}

// Mock temperature demonstration function
async function demonstrateTemperature(prompt, temperature, description) {
  console.log(`\n🌡️ ${description} (Temperature: ${temperature})`);
  console.log("─".repeat(60));
  
  // Simulate processing time
  await simulateAPICall();
  
  const response = mockResponses[prompt]?.[temperature] || 
    `Mock response for temperature ${temperature}: This is a simulated response showing how temperature affects AI output.`;
  
  console.log(`🤖 Response: ${response}`);
  console.log(`📊 Tokens used: ${Math.ceil(response.length / 4)}`);
  console.log("─".repeat(60));
  
  return response;
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
  
  console.log("\n📊 TEMPERATURE COMPARISON:");
  console.log("• 0.1: Factual, consistent, predictable");
  console.log("• 0.7: Balanced creativity and reliability");
  console.log("• 1.0: Creative, varied, sometimes unexpected");
  
  console.log("\n✅ Temperature demonstration complete!");
  console.log("📹 Ready for video recording!");
}

// Run the demonstration
temperatureDemonstration(); 
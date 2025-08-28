import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function runWithTopP(prompt, top_p) {
  console.log(`\n🧮 Top-P = ${top_p}`);
  console.log("─".repeat(60));
  try {
    const res = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      top_p,
      max_tokens: 180,
    });
    console.log("🤖 Response:", res.choices[0].message.content);
    console.log(`📊 Tokens used: ${res.usage.total_tokens}`);
  } catch (err) {
    console.log("❌ Error:", err.message);
  }
}

async function main() {
  console.log("TOP-P DEMONSTRATION");
  console.log("=".repeat(60));
  const prompt = "Write 5 catchy taglines for a travel app.";

  await runWithTopP(prompt, 0.2);
  await runWithTopP(prompt, 0.7);
  await runWithTopP(prompt, 1.0);
}

main(); 
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function kToTopP(topK) {
  // Approximate mapping: ensure within [0.05, 1]
  return Math.max(0.05, Math.min(1, 0.04 * topK));
}

async function runForK(prompt, topK) {
  const top_p = kToTopP(topK);
  console.log(`\n🔢 Top-K ≈ ${topK} (using top_p=${top_p.toFixed(2)})`);
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
    console.log("─".repeat(60));
  } catch (err) {
    console.log("❌ Error:", err.message);
  }
}

async function main() {
  console.log("TOP-K DEMONSTRATION (approximated via top_p)");
  console.log("=".repeat(60));
  const prompt = "List 7 creative slogans for a sustainable energy startup.";

  await runForK(prompt, 5);   // very restrictive
  await runForK(prompt, 20);  // moderate
  await runForK(prompt, 50);  // more diverse
}

main(); 
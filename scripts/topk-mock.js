// TOP-K MOCK DEMONSTRATION (no API keys required)

function pickWithTopK(options, topK) {
  const k = Math.max(1, Math.min(topK, options.length));
  const candidates = options.slice(0, k);
  // random pick among top-k
  const idx = Math.floor(Math.random() * candidates.length);
  return candidates[idx];
}

function runForK(prompt, topK) {
  console.log(`\n🔢 Top-K = ${topK}`);
  console.log("─".repeat(60));

  const options = [
    "Powering tomorrow, sustainably.",
    "Bright energy, brighter future.",
    "Green today, stronger tomorrow.",
    "Charge the world, save the planet.",
    "Clean power. Clear skies.",
    "Energy that cares.",
    "Future-fueled by nature.",
    "Smart energy. Real change.",
    "Less carbon, more power.",
    "Turn sunlight into impact."
  ];

  console.log(`Prompt: ${prompt}`);
  const outputs = Array.from({ length: 5 }, () => pickWithTopK(options, topK));
  outputs.forEach((o, i) => console.log(`${i + 1}. ${o}`));
  console.log("─".repeat(60));
}

function main() {
  console.log("TOP-K MOCK DEMO (varying candidate pool size)");
  console.log("=".repeat(60));
  const prompt = "Give a slogan for a sustainable energy startup.";

  runForK(prompt, 3);  // restrictive
  runForK(prompt, 5);  // moderate
  runForK(prompt, 10); // full pool

  console.log("\n🎯 Insight: Smaller K = safer, more repetitive outputs. Larger K = more variety.");
}

main(); 
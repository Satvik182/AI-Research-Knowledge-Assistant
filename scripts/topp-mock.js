// TOP-P MOCK DEMONSTRATION (no API keys required)

// Each candidate has a probability; we sample from the smallest set whose cumulative prob >= p
const candidates = [
  { text: "Explore more. Worry less.", prob: 0.25 },
  { text: "Your journey, simplified.", prob: 0.2 },
  { text: "Travel smart. Live bold.", prob: 0.15 },
  { text: "Trips that fit your life.", prob: 0.12 },
  { text: "Tap. Go. Discover.", prob: 0.1 },
  { text: "Plan fast. Roam free.", prob: 0.08 },
  { text: "Book easy. Travel happy.", prob: 0.05 },
  { text: "Adventure starts here.", prob: 0.05 },
];

function sampleTopP(p) {
  const cap = Math.max(0.01, Math.min(1, p));
  let cum = 0;
  const pool = [];
  for (const c of candidates) {
    cum += c.prob;
    pool.push(c);
    if (cum >= cap) break;
  }
  const idx = Math.floor(Math.random() * pool.length);
  return { choice: pool[idx].text, poolSize: pool.length, cap };
}

function run(p) {
  console.log(`\n🧮 Top-P = ${p}`);
  console.log("─".repeat(60));
  for (let i = 1; i <= 5; i++) {
    const { choice, poolSize, cap } = sampleTopP(p);
    console.log(`${i}. ${choice} (pool size: ${poolSize}, cap: ${cap})`);
  }
}

(function main() {
  console.log("TOP-P MOCK DEMO (nucleus sampling)");
  console.log("=".repeat(60));
  run(0.2);
  run(0.7);
  run(1.0);
  console.log("\n🎯 Insight: Smaller p uses fewer high-probability options; larger p includes more diverse candidates.");
})(); 
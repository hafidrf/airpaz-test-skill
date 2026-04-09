const animals = [
  { name: "dolphin", group: "mammal" },
  { name: "snake", group: "reptile" },
  { name: "baracuda", group: "fish" },
  { name: "cat", group: "mammal" },
  { name: "elephant", group: "mammal" },
  { name: "kakatua", group: "bird" },
  { name: "komodo", group: "reptile" },
];

function getMammals(group) {
  return animals.filter((animal) => animal.group === group);
}

function getSortedAnimals(priority) {
  const rank = new Map(priority.map((group, index) => [group, index]));
  return [...animals].sort((a, b) => (rank.get(a.group) ?? 999) - (rank.get(b.group) ?? 999));
}

function getGroupedAnimals() {
  return animals.reduce((acc, animal) => {
    if (!acc[animal.group]) acc[animal.group] = [];
    acc[animal.group].push(animal.name);
    return acc;
  }, {});
}

function getMergedAndGroupedAnimals(newAnimals) {
  return [...animals, ...newAnimals].reduce((acc, animal) => {
    if (!acc[animal.group]) acc[animal.group] = [];
    if (!acc[animal.group].includes(animal.name)) acc[animal.group].push(animal.name);
    return acc;
  }, {});
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function closeTheDoor(onTick) {
  for (let i = 5; i >= 1; i -= 1) {
    onTick(String(i));
    if (i > 1) await delay(1000);
  }
  await delay(1000);
  onTick("close the door");
}

function print(outputId, data) {
  const outputEl = document.getElementById(outputId);
  outputEl.textContent = typeof data === "string" ? data : JSON.stringify(data, null, 2);
}

document.querySelector('[data-action="run-1"]').addEventListener("click", () => {
  const group = document.getElementById("groupInput").value.trim();
  print("output-1", getMammals(group));
});

document.querySelector('[data-action="run-2"]').addEventListener("click", () => {
  const raw = document.getElementById("priorityInput").value;
  const priority = raw
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean);
  print("output-2", getSortedAnimals(priority));
});

document.querySelector('[data-action="run-3"]').addEventListener("click", () => {
  print("output-3", getGroupedAnimals());
});

document.querySelector('[data-action="run-4"]').addEventListener("click", () => {
  const newAnimals = [
    { name: "crocodile", group: "reptile" },
    { name: "eagle", group: "bird" },
    { name: "cat", group: "mammal" },
  ];
  print("output-4", getMergedAndGroupedAnimals(newAnimals));
});

document.querySelector('[data-action="run-5"]').addEventListener("click", async () => {
  const out = document.getElementById("output-5");
  out.textContent = "";
  const lines = [];
  await closeTheDoor((text) => {
    lines.push(text);
    out.textContent = lines.join("\n");
  });
});

const parallaxTargets = [
  { selector: ".layer-1", speed: 8 },
  { selector: ".layer-2", speed: 16 },
  { selector: ".planet-a", speed: 24 },
  { selector: ".planet-b", speed: 32 },
  { selector: ".planet-c", speed: 20 },
];

const motion = { x: 0, y: 0, scrollY: 0 };

function renderParallax() {
  parallaxTargets.forEach(({ selector, speed }, index) => {
    const el = document.querySelector(selector);
    if (!el) return;
    const moveX = motion.x * speed;
    const moveY = motion.y * speed;
    const scrollOffset = selector.includes("planet") ? motion.scrollY * (index + 1) * 0.06 : 0;
    el.style.transform = `translate(${moveX}px, ${moveY + scrollOffset}px)`;
  });
}

window.addEventListener("mousemove", (event) => {
  motion.x = event.clientX / window.innerWidth - 0.5;
  motion.y = event.clientY / window.innerHeight - 0.5;
  renderParallax();
});

window.addEventListener("scroll", () => {
  motion.scrollY = window.scrollY;
  renderParallax();
});

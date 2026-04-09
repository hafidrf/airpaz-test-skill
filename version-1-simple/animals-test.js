const animals = [
  { name: "dolphin", group: "mammal" },
  { name: "snake", group: "reptile" },
  { name: "baracuda", group: "fish" },
  { name: "cat", group: "mammal" },
  { name: "elephant", group: "mammal" },
  { name: "kakatua", group: "bird" },
  { name: "komodo", group: "reptile" },
];

// Soal 1: filter animals berdasarkan group.
function getMammals(group) {
  return animals.filter((animal) => animal.group === group);
}

// Soal 2: urutkan animals berdasarkan prioritas group.
function getSortedAnimals(priority) {
  const rank = new Map(priority.map((group, index) => [group, index]));
  return [...animals].sort((a, b) => (rank.get(a.group) ?? 999) - (rank.get(b.group) ?? 999));
}

// Soal 3: kelompokkan animals menjadi object { group: [nama] }.
function getGroupedAnimals() {
  return animals.reduce((acc, animal) => {
    if (!acc[animal.group]) acc[animal.group] = [];
    acc[animal.group].push(animal.name);
    return acc;
  }, {});
}

// Soal 4: gabungkan data lama + baru, lalu grupkan tanpa duplikat nama pada group yang sama.
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

// Soal 5: hitung mundur 5 -> 1 dengan jeda 1 detik, lalu cetak "close the door".
async function closeTheDoor() {
  for (let i = 5; i >= 1; i -= 1) {
    console.log(i);
    if (i > 1) await delay(1000);
  }
  await delay(1000);
  console.log("close the door");
}

async function runAll() {
  console.log("===== NOMOR 1 =====");
  console.log(getMammals("mammal"));

  console.log("\n===== NOMOR 2 =====");
  console.log(getSortedAnimals(["reptile", "fish", "mammal", "bird"]));

  console.log("\n===== NOMOR 3 =====");
  console.log(getGroupedAnimals());

  console.log("\n===== NOMOR 4 =====");
  const newAnimals = [
    { name: "crocodile", group: "reptile" },
    { name: "eagle", group: "bird" },
    { name: "cat", group: "mammal" },
  ];
  console.log(getMergedAndGroupedAnimals(newAnimals));

  console.log("\n===== NOMOR 5 =====");
  await closeTheDoor();
}

runAll();

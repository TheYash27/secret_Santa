const generateButton = document.getElementById("generateButton");
const resultsDiv = document.getElementById("results");

function generateSecretSantaPairs(people) {
  // Shuffle the names array to randomize assignments
  const shuffledNames = shuffleArray(people);

  // Create an object to store the Secret Santa assignments in the desired format
  const secretSantas = {};
  for (let i = 0; i < people.length; i++) {
    secretSantas[shuffledNames[i]] = shuffledNames[(i + 1) % people.length];
  }
  
  return secretSantas;
}

// Helper function to shuffle an array

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/**
Example output:
{
    Alice: "Dan",
    Bob: "Ferdinand",
    Carly: "Ed",
    Dan: "Alice",
    Ed: "Ginny",
    Ferdinand: "Bob",
    Ginny: "Carly"
}**/

generateButton.addEventListener("click", () => {
  const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"]
  const secretSantaAssignments = generateSecretSantaPairs(people);

  // Display the results in a user-friendly format
  let resultsText = "";
  for (const name in secretSantaAssignments) {
    resultsText += 
    `
    ${name}'s Secret Santa is: ${secretSantaAssignments[name]}, 
    `;
  }
  resultsDiv.textContent = resultsText;
});
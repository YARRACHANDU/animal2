// script.js

function generateFacts(animal) {
  const facts = {
    Tiger: [
      "Tigers have striped skin, not just striped fur.",
      "A tiger's roar can be heard as far as 2 miles away.",
      "Tigers are solitary and territorial animals."
    ],
    Elephant: [
      "Elephants are the largest land animals on Earth.",
      "Their tusks are actually enlarged incisors.",
      "Elephants can recognize themselves in a mirror."
    ],
    Penguin: [
      "Penguins can't fly but are excellent swimmers.",
      "Male Emperor penguins incubate eggs for 2 months.",
      "Some penguins can dive over 500 meters deep."
    ],
    Dolphin: [
      "Dolphins sleep with one eye open.",
      "They communicate using a variety of clicks and whistles.",
      "Dolphins are known to help injured animals."
    ]
  };

  // Update the page with selected animal's facts
  const animalName = document.getElementById("animal-name");
  const factsContainer = document.getElementById("facts-container");
  animalName.textContent = animal;

  // Clear old facts
  factsContainer.innerHTML = "";

  // Add new facts as cards
  facts[animal].forEach(fact => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${animal} Fact</h3><p>${fact}</p>`;  // Use template literal (backticks)
    factsContainer.appendChild(card);
  });
}

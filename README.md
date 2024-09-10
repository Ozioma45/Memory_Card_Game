# Memory Card Game

Welcome to the Memory Card Game! This project is part of The Odin Project’s React curriculum, focusing on mastering **state** and **useEffect**. In this game, you’ll test your memory by matching cards and keeping track of your score.

## Project Overview

The Memory Card Game involves clicking on cards to reveal their images. The goal is to click as many different cards as possible without clicking the same card twice. Each click shuffles the cards to keep the game interesting. The game features a scoreboard that tracks your current score and your highest score.

## Live Preview

Check out the live preview of the project [here](https://memory-card-game-virid.vercel.app/)

## Features

- **Card Display**: Cards are fetched from an external API and displayed with images.
- **Score Tracking**: Keeps track of your current score and the highest score.
- **Card Shuffling**: Cards are shuffled randomly after each click.
- **Click Handling**: Increases the score for new cards and resets the score if a card is clicked twice.

## Technologies Used

- **React**: For building the user interface and managing state.
- **useState**: To manage the state of cards, scores, and clicked cards.
- **useEffect**: To fetch data from the API and initialize the game.

## Getting Started

To get started with this project, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Ozioma45/Memory_Card_Gamr
   cd memory-card-game
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Development Server**

   ```bash
   npm start
   ```

## How It Works

1. **Fetching Cards**

   - The game fetches card data from an external API (e.g., Pokémon API) using `fetch` and `useEffect`.
   - The cards are stored in the component’s state and displayed on the screen.

2. **Shuffling Cards**

   - The cards are shuffled using the `sort()` method with a random function to ensure a new order each time a card is clicked.

3. **Handling Card Clicks**

   - Clicking a card checks if it has been clicked before.
   - If it’s a new card, the score increases and the card is added to the list of clicked cards.
   - If it’s a previously clicked card, the score resets to zero, and the list of clicked cards is cleared.

4. **Displaying Scores**

   - The current score and best score are updated and displayed on the screen.

## Components

- **App.js**: Main component that manages game logic, state, and renders the `Card` and `Scoreboard` components.
- **Card.js**: Represents an individual card with an image and name.
- **Scoreboard.js**: Displays the current score and best score.

## Contributing

Feel free to fork the repository, make improvements, and create a pull request. Contributions are always welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

This project is part of The Odin Project’s React curriculum. Special thanks to the community and mentors for their support and guidance.

---

**Enjoy playing the Memory Card Game and happy coding!**

---

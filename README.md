# Rock-Paper-Scissors Game

This is a simple Rock-Paper-Scissors game developed using **HTML**, **CSS**, and **Angular**.

## Features
- User can select Rock, Paper, or Scissors by clicking on the respective images.
- The computer randomly selects its move.
- The game declares the winner for each round.
- Scoreboard to track the user's and computer's scores.
- "Reset" button to restart the game.

## Project Structure
```
/rock-paper-scissors-game
├── src
│   ├── app
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   ├── app.component.css
│   │   └── app.module.ts
│   ├── assets
│   │   ├── rock.jpeg
│   │   ├── paper.png
│   │   └── scissor.jpg
│   └── index.html
├── README.md
└── package.json
```

## How to Run
1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd rock-paper-scissors-game
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Angular Application**
   ```bash
   ng serve
   ```

4. **Open the Game**
   Go to [http://localhost:4200](http://localhost:4200) in your browser.

## Gameplay Instructions
- Click on one of the following images to make your move:
  - **Rock**
  - **Paper**
  - **Scissors**
- The computer will randomly select its move.
- The result will display who won the round.
- The scoreboard will keep track of the scores.
- Click the **Reset** button to reset the game and scores.

## Code Overview
### HTML Structure (`app.component.html`)
- Displays game choices (Rock, Paper, Scissors)
- Shows the computer's choice and result
- Displays the scoreboard and Reset button

### Logic (`app.component.ts`)
- `Myfunc()` function handles user moves and compares them with the computer's choice.
- `ResetGame()` function resets scores and clears results.

### Styling (`app.component.css`)
- The `.container` and `.card` classes are used to ensure proper layout and styling.

## Technologies Used
- **Angular** for application logic and data binding
- **HTML** for structure
- **CSS** for styling

## Future Enhancements
- Add animations for better user experience
- Implement additional game modes or score history
- Improve UI design for better aesthetics

## Author
**Prajwal Bhutkar**
- [GitHub](https://github.com/bhutkarprajwal)
- [LinkedIn](https://www.linkedin.com/in/prajwal-bhutkar22/)

Enjoy the game! 🚀


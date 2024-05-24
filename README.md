# Skyfire Legends

Skyfire Legends is a simple web-based game where the player controls a character (micheal) to avoid obstacles and score points. This game demonstrates basic game mechanics using HTML, CSS, and JavaScript.

## Features

- Move the player character using arrow keys.
- Avoid obstacles to keep the game going.
- Score points as you progress.
- Background music and game over sound effects.

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/Myst-Coder/skyfire-legends.git
    ```

2. Navigate to the project directory:

    ```sh
    cd skyfire-legends
    ```

3. Open `index.html` in your web browser to start the game.

## File Structure

- `index.html`: The main HTML file that sets up the game layout.
- `style.css`: The CSS file that styles the game elements.
- `script.js`: The JavaScript file that handles game mechanics.
- `music.mp3`: The background music file.
- `gameover.mp3`: The game over sound effect file.

## Controls

- **Arrow Up (↑)**: Makes the player character jump.
- **Arrow Right (→)**: Moves the player character to the right.
- **Arrow Left (←)**: Moves the player character to the left.

## How to Play

1. Open `index.html` in your web browser.
2. Use the arrow keys to control the player character.
3. Avoid the moving obstacles to keep playing.
4. Your score increases over time. Try to achieve the highest score possible.
5. If the player character collides with an obstacle, the game is over, and you can restart by refreshing the page.

## Code Explanation

### HTML

The HTML file sets up the structure of the game, including the game container, player character, score display, and obstacle.

### CSS

The CSS file styles the game elements and includes animations for the obstacle movement and player character jumping.

### JavaScript

The JavaScript file handles the game logic:
- Controls the player character movement based on arrow key inputs.
- Plays background music and game over sound effects.
- Detects collisions between the player character and obstacles.
- Updates the score and adjusts the difficulty over time.

### Collision Detection

The game continuously checks for collisions between the player character and obstacles using `setInterval`. If a collision is detected, the game over sequence is triggered.

### Score Update

The player's score increases over time, and the game updates the displayed score every second.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Background music and sound effects: [Provide credit or source if necessary].

---

Feel free to customize this `README.md` file to better suit your project's needs. Happy coding!

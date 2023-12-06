![Logo](https://github.com/samjamalcode/xs---os/blob/main/assets/images/Logo.jpg?raw=true)

# Tic Tac Toe

Tic Tac Toe is a simple classic game, two-players game on a 3x3 grid. Players take turns marking an X or Os on an empty square, aiming for three in a row horizontally, vertically, or diagonally. The game ends when a player wins or when the grid is full, resulting in a draw. It’s a quick, easy game and people of all ages enjoy it.

![App Screenshot](https://github.com/samjamalcode/xs---os/blob/main/assets/images/README-images/Mock-up.jpg?raw=true)

## Features

# Xs & Os

Xs & Os is a simple and classic implementation of the Tic Tac Toe game. Enjoy a quick and strategic two-player game on a 3x3 grid, aiming to achieve three in a row.

## Features

## Home page

- **Game Explanation:** Learn the basics of Tic Tac Toe and its objective through a clear and concise explanation.

- **Game Rules:** Understand the rules of the game, where players take turns placing Xs and Os to create a row of three of their marks.

- **Play Game:** Dive into the fun! Click the "Play Game" button to start your Tic Tac Toe adventure.

## Footer

- The footer includes links to our social media, making it easy to stay updated on our activities.

![footer](https://github.com/samjamalcode/xs---os/blob/main/assets/images/README-images/footer-socialMedia.png?raw=true)

## Full responsive

- Whether on a laptop, tablet, or mobile phone, you can experience Tic Tac Toe with full responsive designs    that fits different devices.

![full_responsive](https://github.com/samjamalcode/xs---os/blob/main/assets/images/README-images/full-responsive.jpg?raw=true)

## Screenshots

- Here are some screenshots of what the game looks like before and after you start playing the game.

![game-started](https://github.com/samjamalcode/xs---os/blob/main/assets/images/README-images/game-started.jpg?raw=true)

## Acknowledgments

- Font Awesome Icons: Utilized Font Awesome for social media icons.

### Remaining Features to Add

- Additional Feature Suggestion.

## Testing

### Validator Testing

### HTML

Document checking completed. No errors or warnings to show. The Document was passing the Html checker though the official website <https://validator.w3.org/#validate_by_upload/> W3C validator

### CSS

Two errors were found when passing the CSS checker through the official website <https://jigsaw.w3.org/css-validator/#validate_by_upload> (Jigsaw) validator.

- Error 1 on landing page: Imported style sheets are not checked in direct input and file upload modes.

- Error 2 on game page: Imported style sheets are not checked in direct input and file upload modes.  

- Procedure taken: this warnings themselves are not a critical issue.

### JavaScript

Two errors were found when passing the CSS checker through the official website <https://codebeautify.org/> (Code beautify) validator.
I did googled it and I found that there might be an issue with the tool I'm using for validation.

![Js-validator](https://github.com/samjamalcode/xs-and-os/blob/main/assets/images/README_Images/error.jpg?raw=true)

## Manual testing

- The site was tested on different browsers: Safari, Firefox and Chrome.
- The DevTools confirmed that the page looks good and is functional on different screen sizes.
- I ensured that all buttons, the timer and the click actions work.
- I ensured that the page is readable.

| **Feature** | **Expect** | **Action** | **Result** |
|---------------------|--------------------|--------------------------|------------------------------|
| **Player makes a move** | The clicked cell should be updated with either X or O | Click on an empty cell | The clicked cell is updated, and the turn switches to the other player |
| **Player wins** | WDisplay a winning message indicating the winning player | Make moves to form a winning pattern (e.g., three X's or O's in a row) | Display winning message, and the game resets for a new round |
| **Game is a draw** | Display a draw message indicating that the game ended without a winner | Play until the board is full with no winner | Display draw message, and the game resets for a new round |
| **Enabling Computer's Turn** | After enabling the computer's turn, the game should proceed with the computer making a move | Click the "Computer" button during the game | The game status updates to "Playing against Computer," and the computer makes a move after the player's second move |
| **Disabling Computer's Turn** | After disabling the computer's turn, the game should continue with only player moves | Click the "Computer" button again to disable computer turns | The game continues with the player making moves, and the computer no longer participates |
| **Event Listener Handling** | Event listeners for player moves should be removed and re-added appropriately | Click the "Computer" button to toggle computer turns during the game | Event listeners are adjusted correctly, ensuring smooth gameplay without interruption |

- Procedure taken: Errors not solved.

## Deployment

The site was deployed to GitHub. Here's how I did it:

- From the "Settings" tab in Github repository and from the "Code and automation"  on left side navigation you choose “pages”.

- From "Build and deployment" section and "Source" drop-down menu, select the Main branch.  

- After selecting the Main branch the page will be self-refreshed and then you will see a ribbon confirming the successful deployment.

## Framework, Libraries and Programs

- no frameworks and libraries were used.

- Google fonts: Was used for integrating fonts.

- GitHub: Was used to store and deploy the project site.

- Codeanywhere 'Gitpod': Was used to write the code and commit it to GitHub.

- Fontawesome: Was used for the social media icons.

- W3C HTML Validator: Was used to validate the CSS code.

- W3C CSS Validator 'Jigsaw': Was used to validate the CSS code.

- codebeautify : Was used to validate the JS code.

- W3C CSS Validator 'Jigsaw': Was used to validate the CSS code.

- DevTools: Were used to inspect the code during the development process and to check the accessibility.

## Credits

### Content

- The text for Home page was taken from:

- <https://gametable.org/games/tic-tac-toe/>

- <https://en.wikipedia.org/wiki/Tic-tac-toe>

### Media

- The images used on all pages were taken from:
   <https://pixabay.com/>

### Extra help

- Youtube channel:
  
The Queen's Pawn
  <https://www.youtube.com/watch?v=n6gzxTsbHLc&t=227s>

Web Dev Simplified
<https://www.youtube.com/watch?v=Y-GkMjUZsmM>

- Website:
  W3 Schools
  <https://www.w3schools.com/Css/>
  <https://readme.so/>

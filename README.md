# Haiku Checker

#### By: _**Christopher Neal, Anna Pittman, Jeff Lai, and Katie Pundt**_

## Technologies Used

- HTML
- CSS
- Bootstrap
- JavaScript
- jQuery
- npm
- webpack
- eslint
- popperjs/core
- git
- GitHub

## Description

An application to check if a poem is a haiku, using functional programming

#### Haiku Rules:

- The poem has 3 lines
- Line 1 has 5 syllables
- Line 2 has 7 syllables
- Line 3 has 5 syllables

#### Syllable Rules:

- The "Written Method" Rules
- Count the number of vowels (A, E, I, O, U) in the word.
- Add 1 every time the letter 'y' makes the sound of a vowel (A, E, I, O, U).
- Subtract 1 for each silent vowel (like the silent 'e' at the end of a word).
- Subtract 1 for each diphthong or triphthong in the word.
  - Diphthong: when 2 vowels make only 1 sound (au, oy, oo)
  - Triphthong: when 3 vowels make only 1 sound (iou)
- Does the word end with "le" or "les?" Add 1 only if the letter before the "le" is a consonant.
- The number you get is the number of syllables in your word.

## Setup/Installation Requirements

- Open the terminal on your desktop
- Once in the terminal, use it to navigate to your desktop folder
- Once inside your desktop folder, use the command `git clone https://github.com/kpundt93/haiku-checker.git`
- After cloning the project, navigate into it using the command `cd haiku-checker`
- Use the command `git remote` to confirm the creation of the new local repository
- Install project dependencies by running the command `npm install`
- If you receive errors in the terminal, try running `npm install` again, sometimes npm can be finicky
- Then run the command `npm run start` to start the project server and view the application (use cmd + c to exit the server in the terminal)
- Open the project with the code editor of your choice
- If you would like to test the code, return to the project in the terminal and run the command `npm test`
- If you have the Jest extension installed for VS Code, you can also test the code there.

## Known Bugs

- _Extra spaces between letters reads as extra syllables._
- _syllableChecker('any') returns 1 syllable but should be 2._

## License

_MIT License: https://opensource.org/licenses/MIT_

Copyright (c) _2022_ _Christopher Neal, Anna Pittman, Jeff Lai, and Katie Pundt_

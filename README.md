# Lesson 5.1: Debugging JavaScript in the Browser

This assignment will teach you the following:

- What is Debugging?
- Breaking on Events and Basic Stepping
- Basic and Conditional Line Breakpoints
- Debugging Functions
- Debugging Exception Errors
- Breaking on DOM Changes and Watch Expressions

---

## Instructions

### Getting Started:

Fork this GitHub repository to create your own working version:

![Fork Assignment: Step 1](instructions/fork-assignment/step-1.png)

Select your GitHub account from the list:

![Fork Assignment: Step 2](instructions/fork-assignment/step-2.png)

You should be directed to your forked GitHub repository:

![Fork Assignment: Step 3](instructions/fork-assignment/step-3.png)

Click the "Code" button and copy the URL for your repository:

![Fork Assignment: Step 4](instructions/fork-assignment/step-4.png)

Clone this repository so that the code is available on your local machine:

> Hint: Run this command from the directory where you want to store your code

> Note: Replace `<url>` with the URL you copied in the previous step

    git clone <url>

Navigate to the directory you just cloned in your terminal:

    cd intro-to-programming-section-5

Create a new local branch to work on separate from the `main` branch:

    git checkout -b lesson-5-1

Now, open the project directory in your code editor and continue to the next section.

### Task List:

The goal of this assignment is not to create a working application, but to practice debugging JavaScript using the browser developer tools. You should focus less on getting all the "right" answers and more on the process of troubleshooting each issue.

There are **at least 8 bugs** in this assignment, do your best to track down and fix as many as you can.

Below is a list of requirements explaining what the application should do:

- [ ] No errors in the browser console

> _**Note:** keep the console open as you play the game so that you can see the randomly generated "target number"_

<img src="instructions/game-play/step-1.png" alt="Game Play: Step 1" width="600" />

- [ ] At the start, the "reset" button and all of the "messages" should be hidden

<img src="instructions/game-play/step-2.png" alt="Game Play: Step 2" width="600" />

- [ ] You should be able to type a number into the input field and click "Submit Guess" to submit the form

<img src="instructions/game-play/step-3.png" alt="Game Play: Step 3" width="600" />

- [ ] When the form is submitted, you should see the following:

  - [ ] A message displaying the number that was entered
  - [ ] A message displaying how many tries you have left (starts at 5 and decrements by 1)
  - [ ] A message describing the guess (low, high, etc.)
  - [ ] A "reset" button that restarts the game

- [ ] If the guessed number is BELOW the target, the message should say "too low"

<img src="instructions/game-play/step-4.png" alt="Game Play: Step 4" width="600" />

- [ ] If the guessed number is ABOVE the target, the message should say "too high"

<img src="instructions/game-play/step-5.png" alt="Game Play: Step 5" width="600" />

- [ ] If the guessed number is the SAME as the target, then:
  - [ ] The input field and "Submit Guess" button should be disabled
  - [ ] The message should say "guessed correctly"

<img src="instructions/game-play/step-6a.png" alt="Game Play: Step 6a" width="600" />

- [ ] If the guessed number is not the same AND all 5 tries have been used, then:
  - [ ] The input field and "Submit Guess" button should be disabled
  - [ ] The message should say "0 guesses remaining"

<img src="instructions/game-play/step-6b.png" alt="Game Play: Step 6b" width="600" />

- [ ] When you click the "reset" button, the form should return to its initial state (not disabled)

<img src="instructions/game-play/step-reset.png" alt="Game Play: Step Reset" width="600" />

### Stretch Goals:

These items are not necessarily bugs in the code, but rather, missing features that should exist to prevent unexpected behavior.

(Optional) Complete the following:

- [ ] You should not be able to submit a guessed number lower than 1

<img src="instructions/game-play/step-7.png" alt="Game Play: Step 7" width="600" />

- [ ] You should not be able to submit a guessed number higher than 99

<img src="instructions/game-play/step-8.png" alt="Game Play: Step 8" width="600" />

- [ ] If there is only one guess left, it should say "guess" (singular) instead of "guesses" (plural)

<img src="instructions/game-play/step-9.png" alt="Game Play: Step 9" width="600" />

### Final Step:

Check the status of your local repository to double-check the changes you made:

    git status

Stage the file(s) that you edited:

    git add .

Check the status again and notice that the changes from before are now staged:

    git status

Create a commit for the changes you made and add a message describing the changes you made:

> Note: Replace `<message>` with your message

    git commit -m "<message>"

Push your commit to the remote repository (visible in GitHub):

    git push

Check the log to make sure your commit has been published:

    git log --oneline

Create a pull request and submit:

[View instructions](https://github.com/Code-the-Dream-School/intro-to-programming/blob/main/instructions/common/how-to-pull-request.md)

---

Created by [Code the Dream](https://www.codethedream.org)

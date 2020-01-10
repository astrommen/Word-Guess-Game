# Word-Guess-Game Pseudocode
a 90's iconic video game hangman style game

1. User presses any key to start.

2. Computer chooses a random value in a list of 15 games names.

3. We determine if the user wins or not.
    * Compare user guess to each char in game name.

   * If user guesses the correct letter then it will replace appropriate "_".
   * If user guesses an incorrect letter then it decreases guess by one.

   * Each user guess displays in all caps (L Y Z H).

   * If user makes 12 incorrect guesses then user loses.

4. We then add to their score.

   * If user wins then we add one to their wins.

5. The user wins/loses to play again.


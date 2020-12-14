# Simon Says! The Pattern Matching Game

### App Demo: https://aba250-1004.github.io/GAProj1-Amal-and-Mateen/

---
## Concepts
My project is a pattern matching game where the user has to click in the correct order what was "flashed" and then they can check if they're correct.  If they're correct they would go to the next round, but if they lose the round display will change to say you lose.  There is a reset button that allows a user to reset a game while they are still in a game,  the reset button will also only work when it is the users turn.  If they have lost this will not work they will have to refresh the page for a new game.  Everytime the user clicks a panel after the computer has displayed the panels and order that they must click the panel will flash if the computer is still going then nothing will happen. 

## Technologies Used
* HTML 
* CSS 
* JavaScript

#### Approach 

So what I did for my html and CSS was format it using flex which I thought was the appropriate way to have my game work for multiple screen sizes without media queries, which might not be the best long term solution.  Where my code gets interesting is in my JavaScript, I have three main functions that are compareTo, Around, and CountDown.  Around is supposed to simulate aRound of the game that is played.  I do this but using DOM manipulation displaying what the pattern is to the user.  Then aRound calls CountDown which is supposed to give the user a countdown until their answer is locked in and check.  There is a submit Current Round Button that allows the user to check if their answer is right before the end of a round and proceed to the next round if they’re correct.  If they’re not correct then where the current round is displayed it will tell the user that they lost because they guessed wrong.  I check if the user is correct in my compareTo() and if they are compareTo call’s aRound(), which almost acts like a loop, since they progressed to the next round.  The approach I took was almost an Object Oriented Programming approach but I don’t use any classes I have 4 global variables that act almost as instance variables and they are colors, which is a array of all my colors, currentRound, which is the current round, userClicks, which is the current rounds user clicks on each panel once the user is allowed to click on a panel, and isReset, which tells you if the user reset the game in the current round.  I don’t believe that there are installation instructions other than just follow this current round’s CPU instructions.  I don’t have any unsolved problems but I could add to the reset functionality by making that button able to start a new game if the user has lost.  

#### User stories

As a user you will click the pattern that is displayed to you once the the count down has started/ when the CPU turn changes to user turn.  If the user guesses correctly they go to the next round which they will see on the top right hand corner.  But if they lose the round in the top right hand corner will change to a you lose message.

#### Development Plan

* Have Layout Complete for Game such as: Panels, Info Bar on left, Menu Bar on top.
* Make computer get random divs for each round and flash them to the user in the correct order for one round.
* Get user clicks on panels and see if they match the computer clicks for one round.
* Add countdown and make it so they user can only click panels after the panels have flashed and before countDown reaches 0. 
* Add game logic and have loop that calls another round in my game logic if game logic deems the user as correct
* Add submit current round and reset button.

#### MVP
* Working Game Logic
* Countdown for user to click on panels.
* Round Display

#### Stretch goals
* Submit current round button.
* Reset button.

### Challenges:
* Made countdown timer only start counting down when it's the user turn.



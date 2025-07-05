#  🎁 Anniversary Gift

**A personalized, interactive web space built with HTML, CSS, and JavaScript.**

This project is an aniversary gift for my partner, made public to inspire others who want to code their own personal projects for loved ones.

## What is it?

A pixel-art themed website with multiple interactive pages, some parts are hidden as surprises.

## 🚀 How to Launch

To run this project correctly, you need to **use a local server**, such as the [Live Server extension for VS Code](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

**Why?** Some parts of the project (like reading the `CompatibleNames.txt` file in JavaScript) won't work if you just open the HTML file directly in your browser. Running through a local server ensures everything loads properly.

### Steps:
1. Clone or download this repository.
2. Open the folder in Visual Studio Code.
3. Install the **Live Server** extension.
4. Right-click on any `.html` file (e.g. `home.html`) and click **"Open with Live Server"**.
5. You're ready!

## Pages Overview

### Home

- Includes a **FAQ section**.
- Some buttons **aren’t clickable** . Instead, move the character on the left with WASD and the character on the right with arrow keys. Both characters must go to the same button to activate it.

### Compatibility Test

- Enter two names and check if they're a match.
- To define which name pairs are matches, edit:  `Personalize/CompatibleNames.txt`:

Below is an example folder. The amounts of names/nicknames written for each person should be written first.
```txt
////Add-Names-And-Their-Amount-Below-Do-Not-Delete-This-Line////
////Names-For-First-Person-Do-Not-Delete-This-Line////
2
name1
name2
////Names-For-Second-Person-Do-Not-Delete-This-Line////
3
name3
name4
name5
```

### Restaurant Picker
An interactive map of our city with pinned restaurant we have visited.

- Characters can walk to each location to reveal:
  - A review written for that restaurant
  - The food category provided by that restaurant
- Includes filter options to show only specific types of restaurants
- A dice roll feature to pick a random spot.

### Cook Book
A page dedicated to all the meals we’ve cooked together.

- Add new dishes and comments using the input boxes.
- Click on the edit icon at the bottom right of each dish to edit or delete.
- Hover characters over each dish to view its comments.
- Data is stored locally in the browser.

Since my partner is a fan of RuneScape, the cook book page also has a RuneScape inspired skill zone. The maximum skill level in the game is 99, so when one character runs to the area their skill level shows 99 while the other character is level 1.
The sound effects of the buttons are also from the game.

## Current Folder Structure

```
anniversary_gift/
├── assets/                # Images, icons, fonts, and sound effects
├── cookbook.html          # Cookbook page
├── matcher.html           # Compatibility test page
├── matcher.css
├── restaurant.html        # Restaurant picker page
├── restaurant.css
├── home.html              # Home and FAQ
├── cookbook.js / css      # Logic and styling for recipe notes
├── movement.js            # Character movement system
├── nameReader.js
├──CompatibilityCalculator.js
├── Personalize/
│   └── CompatibleNames.txt # Custom name matcher data
```

## Work in Progress 🚧
Still in the progress of upgrading!

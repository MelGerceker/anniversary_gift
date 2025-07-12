# Anniversary Gift 🎁

**A personalized, interactive web space built with HTML, CSS, and JavaScript.**

This project is an aniversary gift for my partner, made public to inspire others who want to code their own personal projects for loved ones. It is a  pixel-art themed website with multiple interactive pages, some parts are hidden as surprises.

## How to Launch

To launch, a local server such as the [Live Server extension for VS Code](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) is needed. Some parts of the project (like reading the `CompatibleNames.txt` file in JavaScript) won't work if you just open the HTML file directly in your browser. Running through a local server ensures everything loads properly.

### Steps:
1. Clone or download this repository.
2. Open the folder in Visual Studio Code.
3. Install the **Live Server** extension.
4. Right-click on any `.html` file (preferably `home.html`) and click **"Open with Live Server"**.
5. You're ready!

## Pages Overview

### Home

- Includes a FAQ accordion menu.
  <br />
    <br />
In this page, the user will figure out things like some buttons not *"working"* . Instead, the user has to move the character on the left with WASD and the character on the right with arrow keys. Both characters must go to the same button to activate it.

### Compatibility Test

The match made screen is displayed on the right:

<img src="https://github.com/user-attachments/assets/5e107826-53f8-4a6c-8d6a-90b2d4b092ac"  align="right" width="380" style="margin-left: 20px; margin-bottom: 0:"/>

- Enter two names and check if they're a match.
- When two names that are not a match you won't even get to the loading screen, a "typo?" text will be displayed.
- When a match is made, the loading screen with "Calculating" text pulses on screen for 2 seconds.
- Then, the user is shown the inner HTML with their names on it and heart animations.
- To define which name pairs are matches, edit:  `Personalize/CompatibleNames.txt`:

Below is an example folder. The amounts of names/nicknames written for each person should be written first. Do not delete/edit the lines that separate the names for each person.
```txt
--Names-For-First-Person--
2
name1
name2
--Names-For-Second-Person--
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
  - Star rating data (stored locally)
- Includes filter options to show only specific types of restaurants
- A dice roll feature to pick a random spot.

There are also some features to make the creation of this page easier:
- The uplaod map and reset map buttons allow user to select an image for the map from their device or go back to the default image in the assets folder.
- There is also an edit mode for the restaurant pins. When user double clicks on a pin, edit mode is opened and the pin can be relocated within the map image. The new locations are not saved locally, instead they are formatted and copied when "Copy Updated Data" button is clicked.

A screenshot of the general overview:
<img width="1917" height="892" alt="image" src="https://github.com/user-attachments/assets/88c75b51-4076-4840-bffa-69446a0e4cfd" />

### Cook Book

<img src="https://github.com/user-attachments/assets/71d7ca1c-5229-492e-8ccf-90e210048fa5" align="right" width="380" style="margin-left: 20px; margin-bottom: 0:"/>

A page dedicated to all the meals we’ve cooked together.

- Add new dishes and comments using the input boxes.  
- Click on the edit icon at the bottom right of each dish to edit or delete.  
- Hover characters over each dish to view its comments.  
- Data is stored locally in the browser.
The screenshot on the right shows the pop-up for editing each note.

Since my partner is a fan of RuneScape, the cook book page also has a RuneScape inspired skill zone. The maximum skill level in the game is 99, so when one character runs to the area their skill level shows 99 while the other character is level 1.
<br />
<br />
The sound effects of the buttons are also from the game.

<br />
<br />
<br />

A screenshot to show the general overview of the page and how the characters interact with each note on the grid: <br />

![A screenshot of cookbook.html page](https://github.com/user-attachments/assets/85a23166-9fca-4abe-a425-4c4399a411f3)



## Current Folder Structure

```
anniversary_gift/
├── assets/                  # Images, icons, fonts, and sound effects
├── Personalize/
│   └── CompatibleNames.txt  # Custom name matcher data
│   └── restaurant.js        # Restaurant data
├── scripts/                 # All js files
├── styles/                  # All css files including a base.css
├── cookbook.html            # Cookbook page
├── matcher.html             # Compatibility test page
├── restaurant.html          # Restaurant picker page
├── home.html                # Home and FAQ
```

## Credits

The heart background visual effects in this project are adapted from [Ha Hyun Yong’s CodePen](https://codepen.io/lovefield/pen/vEvqZV), used under the MIT license.

# Anniversary Gift 🎁

**A personalized, interactive pixel-art themed website built with HTML, CSS, and JavaScript.**

This project was created as an anniversary gift for my partner and is now public to inspire others to build meaningful, personal web experiences for their loved ones.

## How to Launch

To launch, a local server such as the [Live Server extension for VS Code](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) is needed. Some features (like reading from `CompatibleNames.txt` ) require a local server, hence opening the HTML files directly in a browser may not work as expected.

### Steps:
1. Clone or download this repository.
2. Open the folder in Visual Studio Code.
3. Install the **Live Server** extension.
4. Right-click on `home.html` ( or any `.html` file) and select **"Open with Live Server"**.
5. You're ready!

## Pages Overview

### Home

- Features a FAQ accordion menu.
- Characters are controlled with:
  - WASD for the left character (char1)
  - Arrow keys for the right character (char2)
  <br />
In this page, the user will figure out things like some buttons not *"working"* . Instead, the buttons require both characters to activate them by standing on the same button.

### Compatibility Test

The match made screen is displayed on the right:

<img src="https://github.com/user-attachments/assets/5e107826-53f8-4a6c-8d6a-90b2d4b092ac"  align="right" width="380" style="margin-left: 20px; margin-bottom: 0:"/>

- Enter two names and check if they're a match.
- If the names don’t match, a "typo?" message appears.
- If they do match:
  - A "Calculating..." loading screen appears for 2 seconds.
  - Then, a match screen with heart animations and names is displayed.

**Personalization**

To define which name pairs are matches, edit:  `Personalize/CompatibleNames.txt`:

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
An interactive map of your city with pinned restaurants you’ve visited.

**Features:**
- Characters can walk to each location to reveal:
  - A review written for that restaurant
  - The food category provided
  - Star rating (stored locally)
- Filters to show only restaurants with desired food categories
- Dice roll to pick a random spot

**Map Tools:**
There are also some features to make the creation of this page easier.
- Upload Map: Select a custom map image from user's device.
- Reset Map: Revert to default map in assets folder.
- Edit Mode: Double-click a pin to move it. Use "Copy Updated Data" to export new positions (not saved locally). The exported data can be pasted into `Personalize/restaurant.js`.

A screenshot of the general overview:
<img width="1917" height="892" alt="image" src="https://github.com/user-attachments/assets/88c75b51-4076-4840-bffa-69446a0e4cfd" />

### Cook Book

<img src="https://github.com/user-attachments/assets/71d7ca1c-5229-492e-8ccf-90e210048fa5" align="right" width="380" style="margin-left: 20px; margin-bottom: 0:"/>

A page dedicated to all the meals you’ve cooked together.

- Add new dishes and comments using the input boxes.  
- Click on the edit icon at the bottom right of each dish to edit or delete.  
- Hover characters over each dish to view its comments.  
- Data is stored locally.
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
├── scripts/                 # JavaScript files
├── styles/                  # CSS files (including base.css)
├── cookbook.html            # Cookbook page
├── matcher.html             # Compatibility test page
├── restaurant.html          # Restaurant picker page
├── home.html                # Home and FAQ
```

## Credits

The heart background visual effects in this project are adapted from [Ha Hyun Yong’s CodePen](https://codepen.io/lovefield/pen/vEvqZV), used under the MIT license.

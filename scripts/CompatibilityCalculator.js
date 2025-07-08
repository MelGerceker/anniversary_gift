import { firstNamesArray, secondNamesArray, loadNames } from './nameReader.js';

let namesLoaded = false;

loadNames().then(() => {
    namesLoaded = true;
}).catch(err => {
    console.error("Failed to load names", err);
});

function calculateCompatibility() {

    if (!namesLoaded) {
        alert("Names are not loaded yet. Please wait.");
        return;
    }

    const name1 = document.getElementById('name1').value.trim().toLowerCase();
    const name2 = document.getElementById('name2').value.trim().toLowerCase();
    const resultDiv = document.getElementById('result');

    let matchMade = false;

    // Check for match
    for (let i = 0; i < firstNamesArray.length; i++) {
        if (name1 == firstNamesArray[i]) {
            for (let j = 0; j < secondNamesArray.length; j++) {
                if (name2 == secondNamesArray[j]) {
                    matchMade = true;
                    break;
                }
            }
        } else if (name2 == firstNamesArray[i]) {
            for (let j = 0; j < secondNamesArray.length; j++) {
                if (name1 == secondNamesArray[j]) {
                    matchMade = true;
                    break;
                }
            }
        }
    }

    // In case match was not made
    if (!matchMade) {
        resultDiv.innerHTML = 'TYPO?';
        return;
    }

    // Show loading screen
    document.getElementById('loading-screen').classList.remove('hidden');

    // After 2 seconds, show match screen
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
        document.getElementById('match-screen').classList.remove('hidden');
        document.getElementById('match-result').innerHTML = `${name1} ❤️ ${name2}`;
    }, 2000);

}

window.calculateCompatibility = calculateCompatibility;

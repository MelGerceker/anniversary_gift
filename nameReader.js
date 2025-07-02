//Function for reading the compatible names from CompatibleNames.txt

export let firstNamesArray = [];
export let secondNamesArray = [];

export async function loadNames() {
    const response = await fetch('Personalize/CompatibleNames.txt');
    const text = await response.text();

    const lines = text.split("\n").map(l => l.trim());
    const firstNameIndex = lines.findIndex(line => line.includes("Names-For-First-Person"));
    const secondNameIndex = lines.findIndex(line => line.includes("Names-For-Second-Person"));

    //Amount of Names Written for Each Person
    const amountFirstName = parseInt(lines[firstNameIndex + 1]);
    const amountSecondName = parseInt(lines[secondNameIndex + 1]);

    firstNamesArray = [];
    secondNamesArray = [];

    for (let i = 0; i < amountFirstName; i++) {
        firstNamesArray.push(lines[firstNameIndex + 2 + i].toLowerCase());
    }

    for (let i = 0; i < amountSecondName; i++) {
        secondNamesArray.push(lines[secondNameIndex + 2 + i].toLowerCase());
    }

    // For testing
    //document.getElementById("nameslist1").textContent = firstNamesArray.join(', ');
    //document.getElementById("nameslist2").textContent = secondNamesArray.join(', ');

}

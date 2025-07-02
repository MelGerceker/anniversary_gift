//Function for reading the compatible names from file

fetch('Personalize/CompatibleNames.txt')
    .then(response => response.text())
    .then(text => {
        document.getElementById('file-content').textContent = text;
   

const lines = text.split("\n").map(l => l.trim());
const firstNameIndex = lines.findIndex(line => line.includes("Names-For-First-Person"));
const secondNameIndex = lines.findIndex(line => line.includes("Names-For-Second-Person"));

//Amount of Names Written for Each Person
const amountFirstName = lines[firstNameIndex+1];
const amountSecondName = lines[secondNameIndex+1];

const firstNamesArray = [];
const secondNamesArray = [];

for(let i = 0; i < amountFirstName; i++) {
    firstNamesArray[i] = lines[firstNameIndex+2+i];
}

for(let i = 0; i < amountSecondName; i++) {
    secondNamesArray[i] = lines[secondNameIndex+2+i];
}

document.getElementById("nameslist1").textContent = firstNamesArray;
document.getElementById("nameslist2").textContent = secondNamesArray;


//can you create const inside for loops for multiple names for each person?
//const name1 = lines[firstNameIndex + 2];
//const name2 = lines[secondNameIndex + 1];

})
  .catch (err => {
    document.getElementById('message').textContent = 'Error loading names.';
    console.error(err);
});
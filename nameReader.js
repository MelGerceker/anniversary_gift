//Function for reading the compatible names from file

fetch('Personalize/CompatibleNames.txt')
    .then(response => response.text())
    .then(text => {
        document.getElementById('file-content').textContent = text;
   

const lines = text.split("\n").map(l => l.trim());
const firstNameIndex = lines.findIndex(line => line.includes("Names-For-First-Person"));
const secondNameIndex = lines.findIndex(line => line.includes("Names-For-Second-Person"));

//can you create const inside for loops for multiple names for each person?
const name1 = lines[firstNameIndex + 1];
const name2 = lines[secondNameIndex + 1];

})
  .catch (err => {
    document.getElementById('message').textContent = 'Error loading names.';
    console.error(err);
});
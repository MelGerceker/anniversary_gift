//Function for reading the compatible names from file

//export { firstNamesArray }
//export { secondNamesArray }
//export let amountFirstName
//export let amountSecondName

//const firstNamesArray = [];
//const secondNamesArray = [];
//let amountFirstName = 0;
//let amountSecondName = 0;

export let firstNamesArray = [];
export let secondNamesArray = [];

export async function loadNames() {
    /*
    return fetch('Personalize/CompatibleNames.txt')
        .then(response => response.text())
        .then(text => {
            document.getElementById('file-content').textContent = text;
*/
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
        //firstNamesArray[i] = lines[firstNameIndex + 2 + i].toLowerCase();
        firstNamesArray.push(lines[firstNameIndex + 2 + i].toLowerCase());

    }

    for (let i = 0; i < amountSecondName; i++) {
        //secondNamesArray[i] = lines[secondNameIndex + 2 + i].toLowerCase();
        secondNamesArray.push(lines[secondNameIndex + 2 + i].toLowerCase());

    }

    //document.getElementById("nameslist1").textContent = firstNamesArray;
    //document.getElementById("nameslist2").textContent = secondNamesArray;

    document.getElementById("nameslist1").textContent = firstNamesArray.join(', ');
    document.getElementById("nameslist2").textContent = secondNamesArray.join(', ');

    //can you create const inside for loops for multiple names for each person?
    //const name1 = lines[firstNameIndex + 2];
    //const name2 = lines[secondNameIndex + 1];

    /*
    })
      .catch (err => {
        document.getElementById('message').textContent = 'Error loading names.';
        console.error(err);
    });
    
    **/


}

//export { firstNamesArray, secondNamesArray, loadNames };

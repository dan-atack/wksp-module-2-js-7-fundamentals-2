// Exercise 6
// -------------------

var favoriteDessert = {
    scott: 'brownies',
    fred: 'tiramisu',
    lisa: 'chocolate cake',
    riley: 'ice-cream',
    sunny: 'cheese cake',
    john: 'ice-cream',
    beth: 'cheese cake',
    summer: 'ice-cream',
    morty: 'apple pie',
    rick: 'brownies',
    andrew: 'cheese cake',
    jerry: 'rhubard pie',
    'jean-luc': 'cheese cake',  
    tiffany: 'waffles',
    melissa: 'profiteroles',
};

// Above is an object with the results of a poll.
// Write a script that outputs the following:

// A)
// the desserts ranked from most popular to least popular.
// e.g. 1. <DESSERT_NAME>
//      2. <DESSERT_NAME>
//      ...


// votes argument just refers to our list with the poll results:
function dessertStorm() {
    // First, get a list of everyone who voted in the poll:
    let people = Object.keys(favoriteDessert);
    // Next, create an empty list which will contain all of the desserts, more than once if they're chosen by multiple people
    let desserts = [];
    // Then, for each person, see what their choice was and add it:
    people.forEach(person => {
        desserts.push(favoriteDessert[person]);
    })
    // Create list to hold desserts' names to check for duplicates:
    let bestDesserts = [];
    // Create second list for dessert objects, which will have a name and a count
    let dessertObjects = [];
    // Next, check if a dessert is already in the list: if it's not, then create a new object and put that in the objects list,
    // and add the name of the dessert to the bestDesserts list.
    desserts.forEach(dessert => {
        if (!(bestDesserts.includes(dessert))) {
            bestDesserts.push(dessert);
            let obj = {name: dessert, count: 1};
            dessertObjects.push(obj);
            // If an object is in the desserts list already, add one to its object's count value:
        } else {
            dessertObjects.forEach(desobj => {
                if (desobj.name === dessert) desobj.count += 1;
            });
        }
    })
    // Finally, sort the dessert objects by comparing their count values:
    let sorted = dessertObjects.sort(function(a,b) {
        return b.count-a.count;
        })
        // Then LASTLY print out that list:
    for (let i = 1; i <= sorted.length; i++) {
        console.log(`${i}. ${sorted[i-1].name}`);
    }
    return sorted; // Keep this as an output; might just come in handy...
};

let sortedDesserts = dessertStorm(favoriteDessert);


// B)
// The names of those that said the same desserts. Output the list in
// order by dessert.
// e.g. - brownies: <NAME>, <NAME>, ...
//      - ice-cream: <NAME>, <NAME>, <NAME>, ...
//      ...

// I want each dessert's object to include a list of the people who voted for it:
let namesOfPeople = Object.keys(favoriteDessert);
sortedDesserts.forEach(dessert => {
    dessert.supporters = [];
})

// For each name, we'll check each dessert and add that name to the dessert that matches their vote:
namesOfPeople.forEach(name=> {
    sortedDesserts.forEach(dessert => {
        if (favoriteDessert[name] === dessert.name) dessert.supporters.push(name);
    })
})

// BOOYEAH!!!!
console.log(sortedDesserts);

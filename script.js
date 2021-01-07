// fetch().then().then().catch()
// .then is attached to something, and whatever the previous thing is returning is what its callback function's parameter is.


//// Code for requesting information from Reddit. ////
// const redditEndpoint = 'https://www.reddit.com/search.json?q=kittens'
// console.log("Hello from Fetch Practice!")

// fetch(redditEndpoint) // Can also put in the URL link directly.
// .then((fetchObj) => {
//     console.log(fetchObj)
//     return fetchObj.json()
// })
// .then((jsonData) => {
//     console.log('Here is the json data:', jsonData) // This gets printed after 'Just fired the AJAX request because the request takes a while.
// })
// .catch((error) => {
// console.log("Oh no, you did NOT make fetch happen")
// console.log(error)
// })

// console.log("Just fired the AJAX request")


//// Sample code to understand callback functions. ////
// const taylorsFunction = (bands) => {
//     bands.foEach((band) => {
//         console.log(band)
//     })
// }

// taylorsFunction(['Hot Mulligan', 'Local Natives'])

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// We want to be able to enter a number and have that number of people show up in our list. 
// That means we have to add people to a list, and every time we hit submit, clear our list and then readd the correct number of randos.

//// DOM Manipulation: Add a new person to the unordered list. ////
const addPerson = (person) => {
    let peopleList = document.getElementById('people_list')
    let newPerson = document.createElement('li')
    newPerson.textContent = `${person.name.first} ${person.name.last}` // String interpolation.
    // newPerson.textContent = person.name.first + ' ' + person.name.last // String concatenation.
    peopleList.appendChild(newPerson)
}

const randomUserEndpoint = 'https://randomuser.me/api/?results=' // Add ?results=10 to URL get 10 results. 

document.addEventListener('DOMContentLoaded', () =>
    form.addEventListener('submit', (event) => {
        event.preventDefault() // Prevent the page from refreshing.

        // Clear the list each time. 
        // How to remove all child nodes: https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
        while(peopleList.firstChild) { // Checks if there's a first child. Basically removes all children.
            peopleList.removeChild(peopleList.firstChild)
        }

        fetch(randomUserEndpoint + input.value)
        .then((fetchedUsers) => {
            return fetchedUsers.json()
        })
        .then((jsonUsers) => {
            jsonUsers.results.forEach(addPerson) // For each jsonUsers, we'll run addPerson on it.
            console.log(jsonUsers.results)
        })
        .catch((error) => {
            console.log('Failed to fetch users!', error)
        })
    })
)
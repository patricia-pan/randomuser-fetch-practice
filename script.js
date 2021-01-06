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



const randomUserEndpoint = 'https://randomuser.me/api/?results=10' // Add ?results=10 to URL get 10 results. 

fetch(randomUserEndpoint)
.then((fetchedUsers) => {
    return fetchedUsers.json()
})
.then((jsonUsers) => {
    console.log(jsonUsers)
})
.catch((error) => {
    console.log('Failed to fetch users', error)
})
// fetch().then().then().catch()
// .then is attached to something, and whatever the previous thing is returning is what its callback function's parameter is.

const redditEndpoint = 'https://www.reddit.com/search.json?q=kittens'



console.log("Hello from Fetch Practice!")

fetch(redditEndpoint)
.then((fetchObj) => {
    console.log(fetchObj)
    return fetchObj.json()
})
.then((jsonData) => {
    console.log('Here is the json data:', jsonData) // This gets printed after 'Just fired the AJAX request because the request takes a while.
})
.catch((error) => {
console.log("Oh no, you did NOT make fetch happen")
console.log(error)
})

console.log("Just fired the AJAX request")


// const taylorsFunction = (bands) => {
//     bands.foEach((band) => {
//         console.log(band)
//     })
// }

// taylorsFunction(['Hot Mulligan', 'Local Natives'])
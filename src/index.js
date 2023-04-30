/*
Goals for Ramen Rater:

[X] - See all ramen images in the div with the id of ramen-menu. When the page loads, request the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an img tag inside the #ramen-menu div

[] - Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.

[X] - Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.

[X] - persist new ramens that I create (POST request)
*/

// Event Listeners
//===============================================
document.querySelector("#new-ramen").addEventListener("submit", handleSubmit)

//Event Handlers
//===============================================
function handleSubmit (e) {
    e.preventDefault()

    let ramenObj = Object.fromEntries(new FormData(e.target))
    console.log(ramenObj)
    
    renderRamenImageDisplay(ramenObj)
    addRamenRating(ramenObj)
}
// DOM Render Functions
//===============================================
function renderRamenImageDisplay(ramens) {
    let image = document.createElement("img")
    image.src = ramens.image
     
    document.addEventListener("click", function (ramenObj) {
        
        
    })

    document.getElementById("ramen-menu").appendChild(image)
}

function displayRamenInfo (ramens) {
    const image = document.querySelector(".detail-image")
    image.alt = ramens.image
}

// Fetches
//===============================================
function getAllRamen () {
    fetch("http://localhost:3000/ramens")
        .then(response => response.json())
        .then(ramens => ramens.forEach(ramen => renderRamenImageDisplay(ramen)))
}

function addRamenRating (ramenObj) {
    fetch("http://localhost:3000/ramens", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(ramenObj)
    })
    .then(response => response.json())
    .then(ramen => console.log(ramen))
}

// Inital Render
//===============================================
function intialize () {
    getAllRamen()
}
intialize()
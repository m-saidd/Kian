// First Method

// document.addEventListener("DOMContentLoaded", function() {

//     document.querySelector("#red").onclick = function() {
//         document.querySelector("#result").style.color = "red"
//     }

//     document.querySelector("#green").onclick = function() {
//         document.querySelector("#result").style.color = "green"
//     }

//     document.querySelector("#blue").onclick = function() {
//         document.querySelector("#result").style.color = "blue"
//     }
// })

// Second Method

document.addEventListener("DOMContentLoaded", function() {

    document.querySelectorAll("button").forEach(function(e) {
        e.onclick = function() {
            document.querySelector("#result").style.color = e.dataset.color;
        }
    })
})
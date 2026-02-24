let dropdown = document.querySelectorAll(".fa-angle-down");
let carauosal = document.querySelector(".caraousal");

dropdown.forEach(dropup => {
    dropup.addEventListener("click", (e) => {
        dropup.classList.toggle("fa-angle-down")
        dropup.classList.toggle("fa-angle-up")
        e.target.parentElement.parentElement.parentElement.classList.toggle("dec")
    })
})

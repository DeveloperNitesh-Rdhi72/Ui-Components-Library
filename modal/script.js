const failedmsg = document.querySelector(".failed-modal")
const completedmsg = document.querySelector(".completed-modal")
const wrongdmsg = document.querySelector(".wrong-modal")

function showProcess(process) {
    process.classList.add("animate")
    setTimeout(() => {
        process.classList.remove("animate")
    }, 3000)
}
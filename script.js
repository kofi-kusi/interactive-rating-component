const submitBtn = document.querySelector("#submit")
const ratingBtns = document.querySelectorAll(".rating-button-item")
const thankYouContainer = document.querySelector("#thankYou")
const ratingContainer = document.querySelector(".rating")
const rate = document.querySelector("span") 

let selectedNumber = 0

ratingBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault()
        ratingBtns.forEach(b => b.classList.remove("active"))
        btn.classList.add('active')
        selectedNumber = btn.innerHTML

        rate.innerHTML = selectedNumber
    })
})

submitBtn.addEventListener("click", (e)=> {
    e.preventDefault()
    ratingContainer.style.display = "none"
    thankYouContainer.style = "display: flex; flex-direction: column; justify-content: space-between; align-items: center;"

})
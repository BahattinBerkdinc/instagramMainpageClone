const storyBox = document.querySelectorAll(".storyBox");
const storySecondBox = document.querySelector(".storiesSecondpage")
const closeStory = document.querySelector(".bi-x-lg")



storyBox.forEach((stBox) => {
    stBox.addEventListener("click", () => {
        storySecondBox.classList.replace("d-none", "d-flex")

    })
})

closeStory.addEventListener("click", () => {
    storySecondBox.classList.replace("d-flex", "d-none")
})
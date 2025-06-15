// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.querySelector(".yes-btn");
    const noBtn = document.querySelector(".no-btn");
    const question = document.querySelector(".question");
    const gif = document.querySelector(".gif");

    // Make sure elements exist
    if (!yesBtn || !noBtn || !question || !gif) {
        console.error('Some elements are missing!');
        return;
    }

    // Change text and gif when the Yes button is clicked
    yesBtn.addEventListener("click", () => {
        question.innerHTML = "Being with you is my biggest blessing. I love you.";
        gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGNhdXh1b252b2F2b2U4cHRlNGkwMDZsajllaGF1cDJyb2p4NXl2YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/G6N0pDDgDpLjUvNoyQ/giphy.gif";
        noBtn.style.display = "none";
    });

    // Make the No button move randomly on hover
    noBtn.addEventListener("mouseover", () => {
        const wrapper = document.querySelector(".wrapper");
        const wrapperRect = wrapper.getBoundingClientRect();
        const noBtnRect = noBtn.getBoundingClientRect();

        const maxX = wrapperRect.width - noBtnRect.width;
        const maxY = wrapperRect.height - noBtnRect.height;

        const randomX = Math.min(Math.floor(Math.random() * (maxX * 0.3)), maxX * 0.3);
        const randomY = Math.min(Math.floor(Math.random() * (maxY * 0.3)), maxY * 0.3);

        noBtn.style.position = "relative";
        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    });
});
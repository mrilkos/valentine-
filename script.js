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
        question.innerHTML = "knt chak fik .";
        gif.src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDVzZzUzeXM3Z2Y0bjJhODBoZHZiZ2dhbWp5azF1Z3NldGNvY3F0byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTiTnEP4HdpsVOQMdW/giphy.gif";
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
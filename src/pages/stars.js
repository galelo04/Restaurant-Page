//code from chatGPT


const createStars = (rating) => {
    const stars = document.createElement("div");
    stars.classList.add("stars");

    const fullStar = "★";
    const emptyStar = "☆";
    const maxStars = 5;

    // Calculate the number of full and empty stars
    const fullStarsCount = Math.floor(rating); // Integer part
    const halfStarCount = rating % 1 !== 0 ? 1 : 0; // Check for a half star
    const emptyStarsCount = maxStars - fullStarsCount - halfStarCount;

    // Append full stars
    for (let i = 0; i < fullStarsCount; i++) {
        stars.innerHTML += fullStar;
    }

    // Append half star (if needed)
    // if (halfStarCount) {
    //     stars.innerHTML += halfStar; // Unicode for a half-star (if you use an image, use an image element instead)
    // }

    // Append empty stars
    for (let i = 0; i < emptyStarsCount; i++) {
        stars.innerHTML += emptyStar;
    }

    return stars;
};

export {createStars}
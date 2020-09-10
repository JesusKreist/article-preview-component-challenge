let shareButton = document.querySelector(".user__icon");
let share = document.querySelector(".share");
let userIcon = document.querySelector(".user__icon i");


// before
// backgroundColor-- > hsl(210, 46 %, 95 %)
// user icon color-- > hsl(214, 17 %, 51 %);

// after



let state = 0;

const toggleShare = (event) => {
    switch (true) {
        case (state === 0):
            share.style.display = "flex";
            userIcon.style.color = "hsl(210, 46%, 95%)";
            shareButton.style.backgroundColor = "hsl(214, 17%, 51%)";
            state++;
            break;
        case (state === 1):
            share.style.display = "none";
            userIcon.style.color = "hsl(214, 17%, 51%)";
            shareButton.style.backgroundColor = "hsl(210, 46%, 95%)";
            state--;
            break;
        default:
            console.log("Error occured!")
            throw new Error("Something went wrong with the desktop one!")
        }
}

shareButton.addEventListener("click", toggleShare);
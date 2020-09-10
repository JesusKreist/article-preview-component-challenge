let shareButton = document.querySelector(".user__icon");
let clickedShareButton = document.querySelector(".shared_icon");
let unclickedScreen = document.querySelector(".user");
let clickedScreen = document.querySelector(".share");
let desktopShare = document.querySelector(".share__desktop");
let userIcon = document.querySelector(".user__icon i");
let userIconWrapper = document.querySelector(".user__icon");

let screenSize = window.screen.width * window.devicePixelRatio;



const share = (event) => {
    unclickedScreen.style.display = "none";
    clickedScreen.style.display = "flex";
};

const unshare = (event) => {
    unclickedScreen.style.display = "flex";
    clickedScreen.style.display = "none";
};

let state = 0;

// case (state === 0):
// desktopShare.style.display = "flex";
// userIcon.style.color = "hsl(210, 46%, 95%)";
// userIconWrapper.style.backgroundColor = "hsl(210, 46%, 95%)";
// state++;
// break;
//         case (state === 1):
// desktopShare.style.display = "none";
// userIcon.style.color = "hsl(214, 17%, 51%)";
// userIconWrapper.style.backgroundColor = "hsl(214, 17%, 51%);";

const desktopClick = (event) => {
    switch (true) {
        case (state === 0):
            desktopShare.style.display = "flex";
            userIcon.style.color = "hsl(210, 46%, 95%)";
            userIconWrapper.style.backgroundColor = "hsl(214, 17%, 51%)";
            state++;
            break;
        case (state === 1):
            desktopShare.style.display = "none";
            userIcon.style.color = "hsl(214, 17%, 51%)";
            userIconWrapper.style.backgroundColor = "hsl(210, 46%, 95%)";
            state--;
            break;
        default:
            console.log("Error occured!")
            throw new Error("Something went wrong with the desktop one!")
        }
}


switch (true) {
    case (screenSize < 1000):
        shareButton.addEventListener("click", share);
        clickedScreen.addEventListener("click", unshare);
        break;
    case (screenSize >= 1000):
        shareButton.addEventListener("click", desktopClick);
        break;
    default:
        console.log("Error occured on line 56.")
    
        
}

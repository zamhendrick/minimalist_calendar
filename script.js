console.log(navigator.userAgent)

const dateObj = new Date();
const fontSizeLandscape = "30cqh";
const fontSizePortrait = "30cqw";

// MONTH
const month = dateObj.toLocaleDateString("us-en", { month: "short" });
document.getElementsByClassName("grid__card--month")[0].getElementsByClassName("grid__card__content")[0].append(month)

// DAYS
const day = dateObj.toLocaleDateString("us-en", { day:"2-digit"})
document.getElementsByClassName("grid__card--day")[0].getElementsByClassName("grid__card__content")[0].append(day[0]);
document.getElementsByClassName("grid__card--day")[1].getElementsByClassName("grid__card__content")[0].append(day[1]);
// console.log(monthString);

function getScreenOrientation() {
    if (window.innerWidth > window.innerHeight) {
        document.getElementsByClassName("grid")[0].style.height = "100%";
        document.getElementsByClassName("grid")[0].style.width = "unset";
        document.getElementsByClassName("grid__card__content")[0].style.fontSize = fontSizeLandscape;
        document.getElementsByClassName("grid__card__content")[1].style.fontSize = fontSizeLandscape;
        document.getElementsByClassName("grid__card__content")[2].style.fontSize = fontSizeLandscape;
    } else if (window.innerWidth < window.innerHeight) {
        document.getElementsByClassName("grid")[0].style.height = "unset";
        document.getElementsByClassName("grid")[0].style.width = "100%";
        document.getElementsByClassName("grid__card__content")[0].style.fontSize = fontSizePortrait;
        document.getElementsByClassName("grid__card__content")[1].style.fontSize = fontSizePortrait;
        document.getElementsByClassName("grid__card__content")[2].style.fontSize = fontSizePortrait;
    }

    console.log(window.innerWidth, window.innerHeight)
}

window.onresize = getScreenOrientation;
window.onload = getScreenOrientation;
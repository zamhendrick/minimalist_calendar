const dateObj = new Date();

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
        // console.log("landscape")
        document.getElementsByClassName("grid__card__content")[0].style.fontSize = "30cqh";
        document.getElementsByClassName("grid__card__content")[1].style.fontSize = "30cqh";
        document.getElementsByClassName("grid__card__content")[2].style.fontSize = "30cqh";
    } else if (window.innerWidth < window.innerHeight) {
        // console.log("portrait")
        document.getElementsByClassName("grid__card__content")[0].style.fontSize = "30cqw";
        document.getElementsByClassName("grid__card__content")[1].style.fontSize = "30cqw";
        document.getElementsByClassName("grid__card__content")[2].style.fontSize = "30cqw";
    }

    // console.log(window.innerWidth, window.innerHeight)
}

window.onload = getScreenOrientation;
window.onresize = getScreenOrientation;
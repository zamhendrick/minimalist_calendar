const dateObj = new Date();

// MONTH
const month = dateObj.toLocaleDateString("us-en", { month: "short" });
document.getElementsByClassName("grid__card--month")[0].getElementsByClassName("grid__card__content")[0].append(month)

// DAYS
const day = dateObj.toLocaleDateString("us-en", { day:"2-digit"})
document.getElementsByClassName("grid__card--day")[0].getElementsByClassName("grid__card__content")[0].append(day[0]);
document.getElementsByClassName("grid__card--day")[1].getElementsByClassName("grid__card__content")[0].append(day[1]);
// console.log(monthString);
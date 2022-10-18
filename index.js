const now = dayjs();
const ny = dayjs("01.01.2023");
const msg = document.querySelector(".msg");

if (now.isAfter(ny)) {
    msg.textContent = "IT'S 2023";
} else {
    msg.textContent = "IT'S STILL 2022";
}
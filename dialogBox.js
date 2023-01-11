const btn_alert = document.getElementById("btn_alert");
const btn_confirm = document.getElementById("btn_confirm");
const btn_prompt = document.getElementById("btn_prompt");

btn_alert.addEventListener("click", () => {
    alert("This is an alert!");
});
btn_confirm.addEventListener("click", () => {
    confirm("Yes or no?");
});
btn_prompt.addEventListener("click", () => {
    prompt("What is your name?");
})
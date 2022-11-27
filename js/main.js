var title = document.querySelector('.title')
var userName = prompt("Assalomu alaykum ismingizni kiriting: ")
var userMoney = Number(prompt("Sayohat uchun pulingizni kiriting: "))

var ticket = 500
var hotel = 250
var mousem = 120

var totalUsd = (500 + 250) * 11225
var totalEuro = (120) * 11686

var allTotal = totalUsd + totalEuro



if (userMoney >= allTotal) {
    title.textContent = `Oq yo'l hurmatli ${userName} sayohatingiz maroqli o'tsin!!!`
}else {
    title.textContent = `Hurmatli ${userName} sayohatingiz uchun mablag' yetarli emas ):`
}
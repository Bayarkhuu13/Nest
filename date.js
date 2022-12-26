console.log("Date and Functions")

let now = new Date()
console.log(now)

let startPcTime = new Date (0)
console.log(startPcTime)

let tuesday = new Date();
console.log(tuesday)
let lastDayOf2022 = new Date("2022-12-31");
console.log(lastDayOf2022)
console.log(tuesday.getDate())
console.log(lastDayOf2022.getDate())

let date = lastDayOf2022.getDate() - tuesday.getDate()
let hour = tuesday.getHours() - lastDayOf2022.getHours()
let sec = tuesday.getSeconds() - lastDayOf2022.getSeconds()

console.log(`Onoodros shine on gartal ${date} ${hour} tsag ${sec} second dutu bn`)
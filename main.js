console.log("day 15 - array")
// France
let f = "Llo", 
f2= "Kou" 
f3= "Var"
f4= "Upa"
f5= "Her"
f6= "Tch"
f7= "Rab"
f8= "Dem"
f9= "Gri"
f10= "Mba"
f11= "Gir"

// Poland
let p = "Lew", 
p2= "Fra" 
p3= "Szy"
p4= "Zie"
p5= "Kam"
p6= "Kry"
p7= "Ber"
p8= "Kiw"
p9= "Gli"
p10= "Cas"
p11= "Szc"

let playersF = ["LLo", "Kou", "Var", "Upa", "Her", "Tch", "Rab", "Dem", "Gri", "Mba", "Gir",]
console.log(playersF);
console.log(playersF[2]);
playersF[2] = "Par" 
console.log(playersF)

for (let f =0; f<playersF.length; f++) {
    console.log(playersF[f])
}


let playersP = ["Lew", "Fra", "Szy", "Zie", "Kam", "Kry", "Ber", "Kiw", "Gli", "Cas", "Scz",]
console.log(playersP)

for (let i = 0; i <playersP.length; i++) {
    console.log(playersP[i])
}


let number = [1, 2, 3, 4, 5, 10, 11, 3, 5, 8]
for(let i = 0; i < number.length; i++) {
    if(number[i] %2 == 0)
    {
    console.log(number[i]);
    }
}

// let num = [5, 6, 7, 9, 15, 7, 9, 12]
// for(let i =0; i < number.length; i++) {
//     num[i] = num[i] + 4;
//     console.log(num[i]);
// }


let numberPlus = [1, 2, 3, 4, 5, 10, 11, 3, 5, 8]
let plus = 0 
for(let i = 0; i<numberPlus.length; i++) { 
    plus += numberPlus[i]
}
console.log(plus)


// let primeNumber = [1, 4, 3, 5]
// let prime = ""
// for(let i = 0; i < prime.length; i++) 
// {
//     let divide = 0
//     for(let p = 0; primeNumber)
// } 

let tictoc = [["*","*","*"], ["*","*","*"], ["*","*","*"]]
let count = "" 
// console.log(tictoc)


for(let i = 0; i<tictoc.length; i++) {
    for(let j =0; j<tictoc[0].length; j++){
        count = count + tictoc[i][j] + " "
        if(j == 2){
            count = count + "\n"
        }
    }
}
console.log(count);


const n = Number(prompt("Number"))

let result = ''

for(let i = 0; i < n; i++) {
    for(let j = 0; j < n - i - 1;j++ ){
        result = result + ' '
    }

    if (i === 0 || i === n - 1){
        for(let j = 0; j < i + 1; j++){
            result = result + '* '
        }
    } else {
        for(let j = 0; j < i + 1; j++) {
            if(j === 0 || j ===i){
                result = result + '* '
            }
            else {
                result = result + '  '
            }
        }
    }
    result = result + "\n"
}

console.log(result)

const digit = Number(prompt("Give number"))

let rst = ' '
for (let i = 0; let)
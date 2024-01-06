// a = 10;
// b = 5
// console.log("A kesmaning ichida b kesmadan" + (a/b) + "ta joylashtirsa bo'ladi" );

// let number = prompt("ikki xonali son kiriting")
// let birlik = number%10
// let onlik = (number -number % 10) / 10;
// console.log( "O'nliklar xonasida"+ onlik + "Birliklar xonasida:" + birlik)



// let number = prompt("ikki xonali son kiriting"); 
// let birlik = number % 10;
// let onlik = (number - (number % 10)) / 10;
// console.log("Ikkala son yig'indisi" + (birlik + onlik));

// let number = prompt("ikki xonali son kiriting");
// let birlik = number%10;
// let onlik = (number - (number % 10)) / 10
// console.log("Ikkala son ko'paytmasi" + (birlik * onlik))

let ball = prompt("Ballarni kiriting")
if(+ ball <= 40){
    let hw = prompt("Uy ishi natijalar, max:5");
    let dv = prompt("Davomat, max:5");
    let maxBall = +ball + +hw + +dv;
    if (maxBall ====50 ){
        alert("Maqtov yorligi sizga !Sizning balingiz:" + maxBall)
    } else {
        if (maxBall <10){
        alert("Imihondan yiqildingiz")
        }
    }
}


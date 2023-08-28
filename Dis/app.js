console.log(1)

document.querySelector("#solution").onclick = dis;

function dis(){
    var a = document.querySelector("#a_dis").value;
    var b = document.querySelector("#b_dis").value;
    var c = document.querySelector("#c_dis").value;
    if (a == false) {
        let answer = document.getElementById("answer");
        answer.innerHTML = "Введите переменную a!"
        let answer1 = document.getElementById("answer1");
        answer1.innerHTML = ""
        let answer2 = document.getElementById("answer2");
        answer2.innerHTML = ""
        let answer3 = document.getElementById("answer3");
        answer3.innerHTML = ""
        return
    } else if (b == false) {
        let answer = document.getElementById("answer");
        answer.innerHTML = "Введите переменную b!"
        let answer1 = document.getElementById("answer1");
        answer1.innerHTML = ""
        let answer2 = document.getElementById("answer2");
        answer2.innerHTML = ""
        let answer3 = document.getElementById("answer3");
        answer3.innerHTML = ""
        return
    } else if (c == false) {
        let answer = document.getElementById("answer");
        answer.innerHTML = "Введите переменную c!"
        let answer1 = document.getElementById("answer1");
        answer1.innerHTML = ""
        let answer2 = document.getElementById("answer2");
        answer2.innerHTML = ""
        let answer3 = document.getElementById("answer3");
        answer3.innerHTML = ""
        return
    }
    var answer = document.getElementById("answer");
    answer.innerHTML = "Уравнение: " + a + "x²" + "+" + b + "x" + "+" + c + " = 0"
    var D = b ** 2 - 4 * a * c
    var answer1 = document.getElementById("answer1");
    answer1.innerHTML = "Дикриминант = " + D 
    if (D > 0) {
        var Ddis = D ** 0.5
        var answer2 = document.getElementById("answer2");
        answer2.innerHTML = "Корень дискриминанта = " + Ddis.toFixed(3)
        var xone = ((b * -1) + Ddis) / (2 * a)
        var xtwo = ((b * -1) - Ddis) / (2 * a)
        var answer3 = document.getElementById("answer3");
        answer3.innerHTML = "Ответ: x1 = " + xone.toFixed(3) + " x2 = " + xtwo.toFixed(3)
    } else {
        var answer2 = document.getElementById("answer2");
        answer2.innerHTML = "Ответ: корней нету"}
    }
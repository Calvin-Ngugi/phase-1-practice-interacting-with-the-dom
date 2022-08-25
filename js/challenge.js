let play = !0;
let timer =() => {
    return setInterval(() =>{
        let a = document.getElementById("counter"),
        b = parseInt(a.innerText);
        a.innerText = b + 1
    }, 1000)
},

interval = timer(),
minus = document.getElementById("minus"),
plus = document.getElementById("plus"),
heart = document.getElementById("heart"),
pause = document.getElementById("pause"),
commentForm = document.getElementsByTagName("form")[0];


minus.addEventListener("click", () =>{
    let a = document.getElementById("counter"),
    b = parseInt(a.innerText);
    a.innerText = b - 1
})

plus.addEventListener("click", () =>{
    let a = document.getElementById("counter"),
    b = parseInt(a.innerText);
    a.innerText = b + 1
})
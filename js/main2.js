document.getElementById('container2')
let interval

function randomNumber() {
    return Math.floor(Math.random() * (20 - 1) + 1).toString();
}

function cr_new_div() {
    let element = document.createElement("div");
    element.className = "element";
    element.innerText = randomNumber()
    document.getElementById("container2").appendChild(element);
}

let allBtn = document.querySelectorAll('.btn')

allBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'Start1':
                interval = setInterval(() => {
                    cr_new_div()
                }, 1000)
                break;
            case 'Stop1':
                clearInterval(interval)
                break;
            default:
                console.log('err')
                break;
        }
    })
})




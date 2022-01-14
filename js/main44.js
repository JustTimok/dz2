let form = document.forms[0]
let isLogin, isPass = false
form.username.addEventListener('keyup', (e) => {
    if (e.target.value.length >= 6) {
        isLogin = true
    }
})

form.password.addEventListener('change', (e) => {
    if (e.target.value.length >= 6) {
        isPass = true
        if (isLogin && isPass) {
            form.childNodes[5].disabled = false
        }
    }
})





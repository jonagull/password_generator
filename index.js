const pw1 = document.getElementById("password1")
const pw2 = document.getElementById("password2")
const pw3 = document.getElementById("password3")
const pw4 = document.getElementById("password4")


function makePw() {
    const pwdChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const pwdLen = 15;
    return randPassword = Array(pwdLen)
                            .fill(pwdChars)
                            .map(function(x) { 
                                return x[Math.floor(Math.random() * x.length)] })
                                .join('');
}


function generate() {
    pw1.innerText = makePw()
    pw2.innerText = makePw()
    pw3.innerText = makePw()
    pw4.innerText = makePw()
}







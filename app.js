let xhr = new XMLHttpRequest(), json

const container = document.querySelector('#container')

var login_button = document.querySelector('#login-button')
var register_button = document.querySelector('#register-button')

var login_html = `
    <h3>login</h3>
    <form action="">
        <input type="text" id="nick" required placeholder="nickname">
        <input type="password" id="password" required placeholder="password">
        <button type="submit" id="login-button">login</button>
    </form>`
var register_html = `
    <h3>register</h3>
    <form action="">
        <input type="text" id="nick" required placeholder="nickname">
        <input type="password" id="password" required placeholder="password">
        <button type="submit" id="register-button">register</button>
    </form>`

document.querySelector('#login').addEventListener('click', () => {
    container.innerHTML = login_html
})

document.querySelector('#register').addEventListener('click', () => {
    container.innerHTML = register_html
})

register_button.addEventListener('click', () =>{
    event.preventDefault()

    let nick = document.querySelector('#nick').value
    let password = document.querySelector('#password').value

    var data = {}

    data.name = nick
    data.password = password

    json = JSON.stringify(data)

    xhr.open('POST', 'users.json', true)
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8')

    xhr.onload = () => {
        if (xhr.readyState === 4 && xhr.status === "201") {
            alert('You\'ve succesfully registered.')
            //show login page
        } else {
            alert('There is a problem.')
            //problem stuff
        }
    }

    xhr.send(data)
})
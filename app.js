let xhr = new XMLHttpRequest(), json

const container = document.querySelector('#container')

var login_button = document.querySelector('#login-button')
var register_button = document.querySelector('#register-button')

register_button.addEventListener('click', () =>{
    event.preventDefault()

    let nick = document.querySelector('#nick2').value
    let password = document.querySelector('#password2').value

    var data = {}

    data.name = nick
    data.password = password

    json = JSON.stringify(data)

    xhr.open('POST', 'users.json', true)
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8')

    xhr.onload = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert('You\'ve succesfully registered.')
            console.log(xhr.responseText)
        } else {
            alert('There is a problem.')
            console.log(xhr.readyState)
        }
    }

    xhr.send(data)
})

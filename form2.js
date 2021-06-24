/*
onRegisterClick = () => {
    const _baseApiUrl = "https://my-json-server.typicode.com/AraiSeisenbek/form";

    let {onStart, onSuccessful, onError} = this.props;
    onStart();

    let isExists = false;

    fetch(`${_baseApiUrl}/user`).then(r => r.json()).then(j => {
        let user = j.find(obj => obj.login === this.state.login);
        let user2 = j.find(obj => obj.email === this.state.email);

        if (user !== undefined) {
            onError("user with this login already exists");
            isExists = true;
        } else if (user2 !== undefined) {
            onError("user with this email already exists");
            isExists = true;
        }
    }).then(j => {
        if (!isExists) {
            fetch(`${_baseApiUrl}/user`, {
                method: 'POST',
                body: JSON.stringify({
                    email: this.state.email,
                    login: this.state.login,
                    password: this.state.password,
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            }).then(r => r.json()).then(json => {
                onSuccessful(json);
            })
        }
    });

}
*/





function sendJSON(){

    let result = document.querySelector('.result');
    let name = document.querySelector('#username');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');

    const apiBaseUrl = "https://my-json-server.typicode.com/AraiSeisenbek/form";
    var url = "url";

    // open a connection
    apiBaseUrl.open("POST", url, true);

    // Set the request header i.e. which type of content you are sending
    apiBaseUrl.setRequestHeader("Content-Type", "application/json");

    // Create a state change callback
    apiBaseUrl.onreadystatechange = function () {
        if (apiBaseUrl.readyState === 4 && apiBaseUrl.status === 200) {

            // Print received data from server
            result.innerHTML = this.responseText;

        }
    };

    // Converting JSON data to string
    var data = JSON.stringify({ "user": username.value, "name": name.value, "email": email.value });

    // Sending data with the request
    apiBaseUrl.send(data);
}

/*

var xhr = new XMLHttpRequest();
var url = "url";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        console.log(json.email + ", " + json.password);
    }
};
var data = JSON.stringify({"email": "hey@mail.com", "password": "101010"});
xhr.send(data);
*/
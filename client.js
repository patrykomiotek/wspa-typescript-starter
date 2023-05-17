fetch('http://localhost:8000/users')
.then((resp) => {
    console.log(resp);
    return resp.json();
})
.then((data) => {
    console.log('data: ', data);
    document.getElementById('firstName').textContent = data.firstName;
    document.getElementById('lastName').textContent = data.lastName;
    document.getElementById('age').textContent = data.age;
})
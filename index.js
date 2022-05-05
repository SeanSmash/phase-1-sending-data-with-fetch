// Add your code here
function submitData(userName, userEmail){
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        }),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data.id)
        const newP = document.createElement('p')
        newP.innerHTML = data.id
        document.querySelector('body').appendChild(newP)
    })
    .catch(error => document.body.innerHTML = error.message)
}
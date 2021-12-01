// Add your code here
function submitData(name, email) {
    const formData = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email
            }),
    };

    fetch('http://localhost:3000/users', formData)
        .then(res => res.json())
        .then(function(data) {
            document.body.append(data.id)
        })
        .catch(function(error) {
            document.querySelector('body').innerText = (error.message)
        })   
}

// document.addEventListener('DOMContentLoaded', submitData());
var loginForm = document.querySelector(".loginForm");


loginForm.addEventListener("submit", function(e){
    e.preventDefault()
    

fetch('http://localhost:8080/users/login', {
    method: "POST",
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type' : 'application/json',
        
    },
    body: JSON.stringify({
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value
    })                                                                                                                                                                                  

}).then(res => res.json())
    .then(user => {
        // console.log(data)
        if (user.token) {
            console.log(user)
            fetch("http://localhost:8080/users/me", {
                headers: {
                    'Authorization': user.token,
                }
            })
            .then(res=> res.json())
            .then(data =>{
                console.log(data)
                localStorage.setItem("token", user.token);
                localStorage.setItem("userId", data._id);
                localStorage.setItem("name", data.name);
                localStorage.setItem("email", data.email);
                
                window.location.href = "./userProfile.html"

                
            })
                    .catch(err=>{
                        res.send(err)
                    })
        }
        
    })
})

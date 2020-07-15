var registerForm = document.querySelector(".register")

registerForm.addEventListener("submit", function(e){
    e.preventDefault()
    fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#email").value
    })
    })
      .then(res => res.json())
      .then(data => {
          console.log(data)
          localStorage.setItem("token", data.token);
          localStorage.setItem("userId", data.user._id);
          localStorage.setItem("name", data.user.name);
          localStorage.setItem("email", data.user.email);
          if(data.token){
            window.location.href = "./userProfile.html"
          }
          

      })
})

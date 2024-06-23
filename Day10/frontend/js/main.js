document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const logoutButton = document.getElementById("logout");
  const backToHomeButton = document.getElementById("back-to-home");

  if (loginForm) {
    console.log("Inside login form");
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      console.log("email is: ",email);
      console.log("password is: ",password);

      try {
        const response = await fetch("http://localhost:5000/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
       // console.log(response.json());
        const data = await response.json();
        console.log("response received");
        if (response.ok) {
          console.log("Inside token response ok");
          localStorage.setItem("token", data.data.token);
          window.location.href = "home.html";
        } else {
          document.getElementById("error-message").innerText = data.message;
        }
      } catch (error) {
        console.error("Error:", error);
      }
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      //e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      try {
        const response = await fetch("http://localhost:5000/user/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        });
        const data = await response.json();
        console.log(data);
        if (response.ok) {

          window.location.href = "login.html";
        } else {
          document.getElementById("error-message").innerText = data.error;
        }
      } catch (error) {
        console.error("Error:", error);
      }
    });
  }

  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      localStorage.removeItem("token");
      window.location.href = "login.html";
    });
  }

  // Function to check token and redirect if needed
  function checkToken() {
    const token = localStorage.getItem("token");

    if (window.location.pathname.endsWith("/home.html")) {
      if (!token) {
        console.log("No token found on home page, redirecting to login.html");
        window.location.href = "login.html";
      } else {
        document.getElementById("welcome-message").innerText =
          "Welcome to the Home Page!";
      }
    }
  }

  // Call checkToken on page load
  checkToken();

  // Back to home page functionality
  if (backToHomeButton) {
    backToHomeButton.addEventListener("click", function () {
      window.location.href = "home.html";
    });
  }
});

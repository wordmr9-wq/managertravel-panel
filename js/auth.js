function login(){
    let user=document.getElementById("username").value.trim();
    let pass=document.getElementById("password").value.trim();

    if(user==="managertravel" && pass==="MT@2025"){
        sessionStorage.setItem("logged_in","true");
        window.location.href="dashboard.html";
    }else{
        document.getElementById("error").classList.remove("hidden");
    }
}

if(window.location.pathname.includes("dashboard.html")){
    if(sessionStorage.getItem("logged_in")!=="true"){
        window.location.href="index.html";
    }
}

function logout(){
    sessionStorage.removeItem("logged_in");
    window.location.href="index.html";
}

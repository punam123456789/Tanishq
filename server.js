function register(event){
    event.preventDefault();
    // console.log("register");

    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var confirmpassword=document.getElementById("confirmpassword").value;

    // var users={uname:name,uemail:email,upassword:password,uconfirmpassword:confirmpassword};
    // console.log(users);
    if(name && email && password && confirmpassword){
        if(password.length>=8 && confirmpassword.length>=8){
            if(password==confirmpassword){
                var LS=JSON.parse(localStorage.getItem("users")) || [];
               
                var flag=false;
                for(var i=0;i<LS.length;i++){
                    if(LS[i].uemail == email){
                        flag=true;
                    }
                }
                if(flag=false){
                    alert("email already exist");
                }
                else{
                    var users={uname:name,uemail:email,upassword:password,uconfirmpassword:confirmpassword};
                    LS.push(users);
                    // console.log(LS)
                    localStorage.setItem("users",JSON.stringify(LS))
                    alert("Registered Successfully")
                    document.getElementById("name").value=''
                    document.getElementById("email").value=''
                    document.getElementById("password").value=''
                    document.getElementById("confirmpassword").value=''
                    window.location.href="./login.html"
                }
            }
            else{
                console.log("Password not matched.")
            }

        }else{
            console.log("Password should be minimum 8 digits.");
        }

    }
    else{
        console.log("all fields are required.")
    }
}

function login(event){
    event.preventDefault();

     var email=document.getElementById("email").value;
     var password=document.getElementById("password").value;
    //  var users={}
    //  console.log(email,password)
    if(email && password){
        var LS=JSON.parse(localStorage.getItem("users"))
        var flag=false;
        console.log(LS)
        for(var i=0;i<LS.length;i++){
            if(LS[i].uemail==email && LS[i].upassword==password){
                flag=true;
                users=LS[i];
            }
        }
        if(flag==true){
            localStorage.setItem("users",JSON.stringify(LS));
            alert("login Successfully")
            document.getElementById("email").value='';
            document.getElementById("password").value='';
            window.location.href="./home.html";
        }
        else{
            alert("credentials not matched.")
            
        }

    }
    else{
        console.log("both fields are required.")
    }

}
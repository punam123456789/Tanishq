// function register(event){
//     event.preventDefault();
//     // console.log("register");

//     var name=document.getElementById("name").value;
//     var email=document.getElementById("email").value;
//     var password=document.getElementById("password").value;
//     var confirmpassword=document.getElementById("confirmpassword").value;

//     // var users={uname:name,uemail:email,upassword:password,uconfirmpassword:confirmpassword};
//     // console.log(users);
//     if(name && email && password && confirmpassword){
//         if(password.length>=8 && confirmpassword.length>=8){
//             if(password==confirmpassword){
//                 var LS=JSON.parse(localStorage.getItem("users")) || [];
               
//                 var flag=false;
//                 for(var i=0;i<LS.length;i++){
//                     if(LS[i].uemail == email){
//                         flag=true;
//                     }
//                 }
//                 if(flag=false){
//                     alert("email already exist");
//                 }
//                 else{
//                     var users={uname:name,uemail:email,upassword:password,uconfirmpassword:confirmpassword};
//                     LS.push(users);
//                     // console.log(LS)
//                     localStorage.setItem("users",JSON.stringify(LS))
//                     alert("Registered Successfully")
//                     document.getElementById("name").value=''
//                     document.getElementById("email").value=''
//                     document.getElementById("password").value=''
//                     document.getElementById("confirmpassword").value=''
//                     window.location.href="./login.html"
//                 }
//             }
//             else{
//                 console.log("Password not matched.")
//             }

//         }else{
//             console.log("Password should be minimum 8 digits.");
//         }

//     }
//     else{
//         console.log("all fields are required.")
//     }
// }

// function login(event){
//     event.preventDefault();

//      var email=document.getElementById("email").value;
//      var password=document.getElementById("password").value;
//     //  var users={}
//     //  console.log(email,password)
//     if(email && password){
//         var LS=JSON.parse(localStorage.getItem("users"))
//         var flag=false;
//         console.log(LS)
//         for(var i=0;i<LS.length;i++){
//             if(LS[i].uemail==email && LS[i].upassword==password){
//                 flag=true;
//                 users=LS[i];
//             }
//         }
//         if(flag==true){
//             localStorage.setItem("users",JSON.stringify(LS));
//             alert("login Successfully")
//             document.getElementById("email").value='';
//             document.getElementById("password").value='';
//             window.location.href="./home.html";
//         }
//         else{
//             alert("credentials not matched.")
            
//         }

//     }
//     else{
//         console.log("both fields are required.")
//     }

// }




// register page
function register(event) {
    event.preventDefault();
    // alert("function called")
    var name = document.getElementById("username").value
    // console.log(name, "name here")
    var email = document.getElementById("useremail").value
    // console.log(email);
    var password = document.getElementById("userpassword").value
    // console.log(password)
    var confirmpassword = document.getElementById("userconfirmpassword").value
    // console.log(confirmpassword);
    // var cartProducts = [];

    if (name && email && password && confirmpassword) {
        if (password.length >= 8 && confirmpassword.length >= 8) {

            if (password == confirmpassword) {

                var Ls = JSON.parse(localStorage.getItem("Tanishq-Users")) || []
                var flag = false;
                for (var i = 0; i < Ls.length; i++) {
                    if (Ls[i].userEmail == email) {
                        flag = true;
                    }
                }
                if (!flag) {
                    var userdata = {
                        userName: name,
                        userEmail: email,
                        userPassword: password,
                        userConfirmPassword: confirmpassword
                        // cartProducts : cartProducts
                    }
                    Ls.push(userdata);
                    localStorage.setItem("Tanishq-Users", JSON.stringify(Ls))
                    alert("Registration Successful")
                    window.location.href="./login.html";
                    document.getElementById("username").value = ""
                    document.getElementById("useremail").value = ""
                    document.getElementById("userpassword").value = ""
                    document.getElementById("userconfirmpassword").value = ""
                }
                else {
                    alert("Email aleready exist")
                }
            }
            else {
                alert("password not match");
            }

        } else {
            alert("password should  include 8 or more characters");
        }
    } else {
        alert("please fill all fields");
    }

}


// login page

function login(event) {
    event.preventDefault();

    var userEmail = document.getElementById("useremail").value;
    var userPassword = document.getElementById("userpassword").value;

    var Ls = JSON.parse(localStorage.getItem("Tanishq-Users"));

    var currentUser;
    var flag = false;
    for (var i = 0; i < Ls.length; i++) {
        if (Ls[i].userEmail == userEmail && Ls[i].userPassword == userPassword) {
            flag = true;
            currentUser=Ls[i];
        }
    }
    if (flag == true) {
        localStorage.setItem("TanishqCurrentUser", JSON.stringify(currentUser))
        alert("login successfully")
        window.location.href="./index.html";
    }
    else {
        alert("Credintials not matched")
    }

}

function logout() {
    alert("Logout successful.")
    localStorage.removeItem("TanishqCurrentUser")
    window.location.reload()


}
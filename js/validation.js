function ValidateEmail(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true);
  }
    alert("You have entered an invalid email address!");
    return (false);
}

function Passwords() {
    
        

        var psw = document.getElementById("psw");
        var psw-repeat = document.getElementById("psw-repeat");
        psw.onchange = ConfirmPassword;
        psw-repeat.onkeyup = ConfirmPassword;
        function ConfirmPassword() {
            psw-repeat.setCustomValidity("");
            if (psw.value != psw-repeat.value) {
                psw-repeat.setCustomValidity("Passwords do not match.");
            }
        }
    }
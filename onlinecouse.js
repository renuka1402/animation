
function run()
{
    setTimeout(play,2500);
    function play()
    {
        document.getElementById('firstlogo').style.display="none";
        document.getElementById('logo').style.display="block";

    }
}
function validation(){
   
   let username=document.getElementById('text').value;
    let emaill =document.getElementById('emaill').value;
   
    let password = document.getElementById('password').value;
   
    console.log(emaill)
    console.log(username)
    console.log(password)

    if(username ==""){
        document.getElementById('errorname').innerHTML="please enter Name";
        document.getElementById('username').focus();
        return false;
    }

    if(emaill ==""){
        document.getElementById('errorusername').innerHTML="please enter Emailid";
        document.getElementById('emaill').focus();
        return false;
    }
    else if(!emaill.includes('@')){
        document.getElementById('errorusername').innerHTML="please enter @ in id field";
        document.getElementById('emaill').focus();
        return false;
        
    }
    else if(!emaill.includes('gmail.com')){
        document.getElementById('errorusername').innerHTML="please enter  gmail.com";
        document.getElementById('emaill').focus();
        return false;
        
    }

    
   else if(password ==""){
        document.getElementById('emaill').innerHTML="";
        document.getElementById('errorpassword').innerHTML="please enterpassword";
        document.getElementById('password').focus();
        return false;
    }
    else if(!password.includes('@')){
        document.getElementById('emaill').innerHTML="";
        document.getElementById('errorpassword').innerHTML="please include special character";
        document.getElementById('password').focus();
        return false;
    }

  
}
  


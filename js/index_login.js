let btnFace=document.getElementById("btnFb");
let btnGoogle=document.getElementById("btnGo");
let btnUp=document.getElementById("btn1");
let btnIn=document.getElementById("btn2");
let pass=document.getElementById("pass");
let user=document.getElementById("user");

btnFace.onclick=function()
{
    window.open("https://www.facebook.com","_blank");
}
btnGoogle.onclick=function()
{
    window.open("https://mail.google.com","_blank");
}

btnIn.onclick=function()
{
    if(pass.value.length==0)
       {
    alert("من فضلك اكتب البيانات المطلوبة");
       }
    else if(user.value.length==0)
            {
                alert("من فضلك اكتب البيانات المطلوبة");
            }
    else
    {
        alert("تم التسجيل بنجاح .. برجاء الانتظار"); 
        window.open("index.html","_self");
    }
      clearFn();
}

btnUp.onclick=function()
{
    window.open("signup.html","_self");
}


function clearFn()
{
    pass.value="";
}
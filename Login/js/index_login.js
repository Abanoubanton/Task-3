let btnFace=document.getElementById("btnFb");
let btnGoogle=document.getElementById("btnGo");
let btnUp=document.getElementById("btn1");
let btnIn=document.getElementById("btn2");
let pass=document.getElementById("pass");

btnFace.onclick=function()
{
    window.open("https://www.facebook.com","_blank");
}
btnGoogle.onclick=function()
{
    window.open("https://mail.google.com","_blank");
}
pass.onclick=function()
{
    alert("كلمة السر يجب ان يكون طولها ثمانية حروف او اكثر");
}
btnIn.onclick=function()
{
    if(pass.value.length<8)
       {
    alert("كلمة السر يجب ان يكون طولها ثمانية حروف او اكثر");
       }
    else
    {
        alert("تم التسجيل بنجاح .. برجاء الانتظار");   
    }
      clearFn();
}

btnUp.onclick=function()
{
    window.open("file:///C:/Users/Ahmed%20Sameh/Desktop/project/signup/index.html","_blank");
    window.close();
}


function clearFn()
{
    pass.value="";
}
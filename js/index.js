//////////add site//////////////
var siteNameInp = document.getElementById("mySiteName");
var devNameInp = document.getElementById("devName");
var siteUrlInp = document.getElementById("mySiteURL");
var siteDescInp = document.getElementById("siteDesc");
var devCountryInp =document.getElementById("devCountry")
var addBtn = document.getElementById("addBtn");
var alertContainer = document.getElementById("alertContainer");
var sitesContainer;

if (localStorage.getItem("sitesContainer") == null) {
    sitesContainer = [];
} else {
    sitesContainer = JSON.parse(localStorage.getItem("sitesContainer"));
    displaySite();
}

addBtn.onclick = function () {
    if (validateForm() == true) {
        addSite();
        displaySite();
        clearForm();
    }
}

function addSite() {
    var site = {
        sitename : siteNameInp.value,
        name: devNameInp.value,
        country:devCountryInp.value,
        url: siteUrlInp.value,
        desc: siteDescInp.value,
    }
    sitesContainer.push(site);

    localStorage.setItem("sitesContainer", JSON.stringify(sitesContainer));
}

function displaySite() {
    var cols = "";
    for (var i = 0; i < sitesContainer.length; i++) {
        cols+=`<div class="col-md-3 text-dark bg-light m-5 site">
                            <div class="container">
                                <img src="images/site.jpg" class="img-fluid mt-2"/>
                                <h4 class="pt-3 font-weight-bold">`+sitesContainer[i].sitename+` :اسم الموقع</h4>
                                <p class="text-secondary"> `+sitesContainer[i].name+` :اسم المطور</p>
                                <p class="text-secondary">بلد المطور :`+sitesContainer[i].country+`</p>
                                <p class="text-secondary">`+sitesContainer[i].desc+`  :وصف الموقع</p>
                                <div class="btns mb-3">
                                    <a class="btn btn-info" href="`+sitesContainer[i].url+`" target="_blank">Visit</a>
                                    <button class="btn btn-danger" onclick="deleteSite(`+i+`)">Delete</button>
                                </div>
                            </div>
                        </div>`;
    }
    document.getElementById("rowData").innerHTML = cols;
}

function deleteSite(id) {
    sitesContainer.splice(id, 1);
    localStorage.setItem("sitesContainer", JSON.stringify(sitesContainer));
    displaySite();
}

function clearForm() {

    var inputs = document.getElementsByClassName("form-control");

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}

function validateForm()
{
    var errors = "";
    var nameRegx = /^[A-Z][a-zA-Z0-9]{2,14}$/;
    var urlRegx = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;
    
    
    if(nameRegx.test(siteNameInp.value)== false)
        {
            alertContainer.style.display = "block";
            errors+="<p>capital يجب ان  يبدا اسم الموقع بحرف</p>";
            alertContainer.innerHTML = errors
        }
    if(urlRegx.test(siteUrlInp.value)== false)
        {
            alertContainer.style.display = "block";
            errors+="<p>(https://)يجب ان يبدا الرابط ب</p>";
            alertContainer.innerHTML = errors
        }
    if(errors.length>0)
        {
            return false;
        }
    else 
        {
            alertContainer.style.display = "none";
            return true;
        }
}
///////////////////////////
$(window).scroll(function () {

    let wScroll = $(window).scrollTop();

    if (wScroll > 20) {
        //$("#myNav").animate({ width:'100%',padding:'0px' } , 100 );
        $("#myNav").css("position", "fixed")
        $("#myNav").css("width", "100%")
        $("#myNav").css("padding", "0px")
    } else {
        //$("#myNav").animate({width:'100%',padding:'30px' } , 100 );
        $("#myNav").css("position", "static")
        $("#myNav").css("width", "100%")
        $("#myNav").css("padding", "30px")
    }
})
// nav bar end.
$('.autoplay').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
});

//////////////////
$("nav a").click(function(){
    
    let aHref = $(this).attr("href");

     let sectionOffset =  $(aHref).offset().top;
    
    $("html,body").animate({scrollTop:sectionOffset} , 2000)

})
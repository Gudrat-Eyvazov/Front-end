var countryCheckbox=document.getElementById("checkCountry");

var txtname= document.getElementById("txtname");
var surname=document.getElementById("txtsurname");
var ataadi=document.getElementById("txtfathername");
var age=document.getElementById("txtage");
var unvan= document.getElementById("txtlocation");
var telefon=document.getElementById("txtphone");
var email=document.getElementById("txtemail")
var apply=document.getElementById("txtapply");
var submitbtn=document.getElementById("submitBtn");
var sosialdurum= document.getElementById("sosialdurum");
var count = document.getElementById("count");
var seheradi= document.getElementById("seheradi");
var genderid= document.getElementById("gedervalidation")
countryCheckbox.addEventListener("change", function () {
  var noneElements = document.getElementsByClassName("dNoneCountry");

  if (countryCheckbox.checked) {
    console.log(noneElements)
    for (var i = 0; i < noneElements.length; i++) {
      noneElements[i].style.display = "none"
    }
    document.getElementById("cityVisible").style.display="block"
  } 
  else {
    for (var i = 0; i < noneElements.length; i++) {
      noneElements[i].style.display = "block"
    }
    document.getElementById("cityVisible").style.display="none"
  }
})

submitbtn.addEventListener("click",function(){
checkNull(txtname);
checkNull(surname);
checkNull(ataadi);
checkNull(unvan);
checkNull(telefon);
checkNull(email);
checkNull(age);
checkNull(apply);
checkNull(sosialdurum);
checkNull(seheradi);

var gender = document.querySelectorAll(".gender")
  var check=false;
  for(var i=0;i<gender.length;i++)
  {
    if(gender[i].checked)
    {
      check = true;
      break;
    }
  }

  if(check)
  {
    genderid.style.display = "none";
    
  }
  else 
  {
    
    genderid.style.display = "block";
  }



})

apply.addEventListener("keyup",function(){
  count.innerHTML=500-apply.value.length
})
function checkNull(htmlInput)
{
  if(htmlInput.value.trim()=="")
  {
    htmlInput.nextElementSibling.style.display="block"
  }
  else{
    htmlInput.nextElementSibling.style.display="none"
  }

}

var input=document.getElementById("txtInput");
var btn = document.querySelector(".box button");
var ul = document.querySelector(".list-group ");
btn.addEventListener("click",function()
{
    var inputvalue=input.value;
  if(inputvalue!=""){
 
  var li =document.createElement("li");
  li.innerHTML=inputvalue;
  li.classList.add("list-group-item");
  ul.appendChild(li);
  input.value="";
}
else{
    alert("bos ola bilmez")
}
})
var buttons = document.querySelectorAll(".btn");
var count =0;

buttons.forEach(btn => {
    btn.addEventListener("click",function(){
        count++;
        if(count<2)
        {
        btn.previousElementSibling.style.display="block";
        btn.parentElement.previousElementSibling.style.filter="blur(0px)";
        btn.previousElementSibling.previousElementSibling.style.display="block";
    }
    else{
        alert("Siz Sansinizi doldurmusuz")
    }

    })
});
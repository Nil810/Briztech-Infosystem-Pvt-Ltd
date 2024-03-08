var text= document.getElementById("text");
var bold=document.getElementById("bold");
var italic=document.getElementById("italic");
var bigsize=document.getElementById("bigsize");
var color=document.getElementById("color");
var bgcolor=document.getElementById("bgcolor");
var reset=document.getElementById("reset");

bold.addEventListener("click",()=>{
text.innerHTML="Pathak";
text.style.fontStyle="bold";
text.style.fontWeight="900"
});

italic.addEventListener("click",()=>{
    text.innerHTML="Pathak";
    text.style.fontStyle="italic";
    });

    bigsize.addEventListener("click",()=>{
        text.innerHTML="Pathak";
        text.style.fontSize="150px";
        });

        color.addEventListener("click",()=>{
            text.innerHTML="Pathak";
            text.style.color="blue";
            });

            bgcolor.addEventListener("click",()=>{
                text.innerHTML="Pathak";
                text.style.background="red";
                });
                
                reset.addEventListener("click",()=>{
                    text.innerHTML="";
                    text.style.background="none";
                    text.style.color= "black";
                    text.style.fontWeight = "normal";
                    text.style.fontStyle ="normal";
                    
                    });

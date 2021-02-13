mostrar=false;

document.addEventListener("DOMContentLoaded",()=>{    
    document.getElementsByTagName("nav")[0].style.display="none";
    window.addEventListener('resize',(ev)=>{
        let tamX = window.innerWidth;
        if(tamX<851){
            document.getElementsByTagName("nav")[0].style.display="none";
        }else{
            document.getElementsByTagName("nav")[0].style.display="flex";
            mostrar=false;
        }
    });
    document.getElementById("nav_col").addEventListener('click',()=>{
        
        if(!mostrar){
            document.getElementsByTagName("nav")[0].style.display="flex";
            mostrar=true;
        }else{
            document.getElementsByTagName("nav")[0].style.display="none";
            mostrar=false;
        }
    });

});
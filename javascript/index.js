  const handleClick = () => {
    document.getElementById("dialogue").style.display="block";
     const Anumb=document.getElementById("a").value;
     const Bnumb=document.getElementById("b").value;
     const Cnumb=document.getElementById("c").value;
     let x1=0;
     let x2=0;
     console.log(Anumb)


     const delta=(Bnumb*Bnumb) - (4 * Anumb * Cnumb);

      if(Anumb === "0" && Bnumb === "0" && Cnumb === "0"){
        document.getElementById("x1").innerHTML = "une erreur c'est survenue lors de calcule" ;
        document.getElementById("separation").style.display="none";
        document.getElementById('message').innerHTML = "Erreur";
        document.getElementById("x2").style.display="none";
    }
    else{

      if(delta<0){
         document.getElementById('message').innerHTML = "Erreur de calcule";
         document.getElementById("message").style.color ="red";
         document.getElementById("x1").innerHTML = "Pas de Resultat";
         document.getElementById("separation").style.display="none";
         document.getElementById("x2").style.display="none";
     }
     else if(delta === 0){

        x1 = x2 = (-Bnumb)/(2 * Anumb);
        document.getElementById("x1").innerHTML = "x1 = x2 =" + x1 ;
        document.getElementById("separation").style.display="none";
        document.getElementById('message').innerHTML = "Resultat";
        document.getElementById("x2").style.display="none";
     }
     
     else{
         x1 = (( -Bnumb) - (Math.sqrt(delta))) / (2 * Anumb);
         x2 = (( -Bnumb) + (Math.sqrt(delta))) / (2 * Anumb);
         document.getElementById("x1").innerHTML = "x1 = " + x1;
         document.getElementById("x2").innerHTML = "x2 = " + x2;
         document.getElementById("separation").style.display="block";
         document.getElementById('message').innerHTML = "Resultat";
         document.getElementById("x2").style.display="block";
     }
    }

     
      }

      const fermer = () =>{
          document.getElementById("dialogue").style.display="none";
      }

    //   testsfcs

    var i = 0;

const myFunction = (x) => {
  x.classList.toggle("change");
}

function closeNav() {    
   document.getElementById("myNav").style.height = "0%";
   i = 0; return;
}

const  openNav = () =>{    
  if (i == 0){
    document.getElementById("myNav").style.height = "100%"; 
    document.getElementById("logo-path").style.fill = "white";
    document.getElementById("baroverlay").style.transform = "rotate(-45deg) translate(50px, 300px)";

    
    i = 1;
    return;
  }
  
  if (i == 1){ 
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("logo-path").style.fill = "#1E1E1E";
    document.getElementById("baroverlay").style.transform = "rotate(-45deg) translate(0px, -3000px)";
       
    
    
    i = 0; return;
  }
}
    
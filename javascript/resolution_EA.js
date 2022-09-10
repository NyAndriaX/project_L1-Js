const handleSend = () =>{
    var Req,I1,I2,I3,I4,U1,U2,U3,U4;
    const R1=document.getElementById('R1').value;
    const R2=document.getElementById('R2').value;
    const R3=document.getElementById('R3').value;
    const R4=document.getElementById('R4').value;
    const U=document.getElementById('U').value;
    console.log("arriver")

    if(U != 0 && R1 >=0 && R2 >0 && R3 >0 && R4 >=0)
    {
        

        Req=((R3*R2)/(R3+R2))+(R1+R4);
    
        I1=I4=U/Req;
    
        I2=I1*(R3/(R3+R2));
    
    
        I3=I1*(R3/(R3+R2));
    
        // U1=R1*I1;
        // U2=R2*I2;
        // U3=R3*I3;
        // U4=R4*I4;
    
        document.getElementById('dialogue').style.display='block';
        document.getElementById('message').innerHTML="Resultat";
        document.getElementById("I1").innerHTML=`I1 = ${I1}`;
        document.getElementById("I2").innerHTML=`I2 = ${I2}`;
        document.getElementById("I3").innerHTML=`I3 = ${I3}`;
        document.getElementById("I4").innerHTML=`I3 = ${I4}`;
        document.getElementById("I2").style.display=`block`
        document.getElementById("I3").style.display=`block`
        document.getElementById("I4").style.display=`block`

    

    }else{
        document.getElementById('dialogue').style.display='block';
        document.getElementById('message').innerHTML="Erreur";
        document.getElementById('I1').innerHTML="Une erreur c'est survenue lors du calcule";
        document.getElementById("I2").style.display=`none`
        document.getElementById("I3").style.display=`none`
        document.getElementById("I4").style.display=`none`
    }




}
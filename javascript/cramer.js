 
const handleSend = () =>{
    console.log('arriver')
    let D,T,Y,X;
    const a11=document.getElementById('a11').value;
    const a12=document.getElementById('a12').value;
    const a13=document.getElementById('a13').value;
    const a21=document.getElementById('a21').value;
    const a22=document.getElementById('a22').value;
    const a23=document.getElementById('a23').value;
    const a31=document.getElementById('a31').value;
    const a32=document.getElementById('a32').value;
    const a33=document.getElementById('a33').value;
    const A=document.getElementById('A').value;
    const B=document.getElementById('B').value;
    const C=document.getElementById('C').value;
   
    D=a11*((a22*a33)-(a32*a13))-a21*((a12*a33)-(a32*a13))+a31*((a12*a23)-(a22*a13));

    if(D===0){
        document.getElementById("dialogue").style.display="block";
        document.getElementById("message").innerHTML="Resultat";
        document.getElementById("x").innerHTML='Pas de solution'

    }else{
        document.getElementById("dialogue").style.display="block";
        document.getElementById("message").innerHTML="Resultat"
        X=A*((a22*a33)-(a32*23)) -B*((a12*a33)-(a13*a32))+C*((a12*a23)-(a22*a13));

        Y=a11*((B*a33)-(C*a23))-a21*((A*a33)-(C*a13))+a31*((A*a23)-(B*a13));
    
        T=a11*((a22*C)-(a32*B))-a22*((a12*C)-(a32*A))+a31*((a12*B)-(a22*A));
        document.getElementById("x").innerHTML=`X = ${X}`;
        document.getElementById("y").innerHTML=`Y = ${Y}`;
        document.getElementById("t").innerHTML=`T = ${T}`;
    }



    


}
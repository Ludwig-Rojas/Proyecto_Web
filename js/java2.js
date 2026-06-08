const rvBtn=document.getElementById("rvBtnCalc");
rvBtn.addEventListener("click",function(){
    const rvBOrigen=parseInt(document.getElementById("rvBaseOrigen").value);
    const rvNumVal=document.getElementById("rvNumero").value.trim();
    const rvBDestino=parseInt(document.getElementById("rvBaseDestino").value);
    const rvResField=document.getElementById("rvResultado");
    if(isNaN(rvBOrigen)||isNaN(rvBDestino)){
        rvResField.value="Error: ingresa las bases";
        return;
    }
    if(rvBOrigen<2||rvBOrigen>36||rvBDestino<2||rvBDestino>36){
        rvResField.value="Error: base entre 2 y 36";
        return;
    }
    if(rvNumVal===""){
        rvResField.value="Error: ingresa un número";
        return;
    }
    const rvDec=parseInt(rvNumVal,rvBOrigen);
    if(isNaN(rvDec)){
        rvResField.value="Error: número inválido";
        return;
    }
    rvResField.value=rvDec.toString(rvBDestino).toUpperCase();
});
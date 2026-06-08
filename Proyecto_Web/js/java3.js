async function rvObtenerClima(){
    var rvCiudadValue=document.getElementById("rvCiudad").value.trim();
    var rvApiKey="c6ae4de01af41c37e7312373b695d0f5";
    var rvUrl=`https://api.openweathermap.org/data/2.5/weather?q=${rvCiudadValue}&appid=${rvApiKey}&units=metric&lang=es`;
    if(rvCiudadValue===""){
        document.getElementById("rvResultadoClima").innerHTML="Ingresa una ciudad";
        return;
    }
    try{
        var rvRespuesta=await fetch(rvUrl);
        if(!rvRespuesta.ok){
            throw new Error("Ciudad no encontrada");
        }
        var rvDatos=await rvRespuesta.json();
        document.getElementById("rvResultadoClima").innerHTML=`El clima en ${rvCiudadValue.toUpperCase()} es ${rvDatos.weather[0].description} con una temperatura de ${rvDatos.main.temp}°C.`;
    }catch(rvError){
        document.getElementById("rvResultadoClima").innerHTML="Error al obtener el clima: "+rvError.message;
    }
}
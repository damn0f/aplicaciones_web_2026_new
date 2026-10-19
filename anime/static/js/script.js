async function VerAnime(){

    try{
        const uri = "https://api.animechan.io/v1/quotes/random";

        const datos_random = document.getElementById("datos_ramdom");

        const response = await fetch(uri);

        const { data } = await response.json();

        console.log("DATA: ", data);

        datos_random.textContent = data.content;

    } catch (error){
        console.error("UPS ALGO FALLO: ", error.massage);
    }
}
   
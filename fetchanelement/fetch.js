async function fetchData(){
    try{
    const pokemonName=document.getElementById("pokemonName").value.toLowercase();
    const res=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if(!res.ok){
        throw new Error("could not fetch the data");

    }
    const data=await res.json();
    console.log(data);
    const pokemon=data.sprites.front_default;
    const img=document.getElementById("pokemon spite");
    img.src=pokemon;
    img.style.display="block";
    }
    catch(error){
        console.error(error);
    }

}
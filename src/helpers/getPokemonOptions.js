import pokemonApi from "@/api/pokemonApi"

const getAleatorio = (max, min) => Math.floor( Math.random()*(max - min + 1)+min )

const getRandomPokemonId = (cantidad) => {
    const arrayAleatorio = []
    for(let i = 0; i < cantidad; i++){
        arrayAleatorio.push(getAleatorio(1, 249))
    }
    
    return arrayAleatorio
}

const getPokemonOptions = async() => {
        const pokemonMix = getRandomPokemonId(4)
        
        const pokemons = await getPokemonNames(pokemonMix)

        return pokemons
}

const getPokemonNames = async( pokemon = [] ) => {
    const promesasArr = pokemon.map((id) => {
        return pokemonApi.get(`/${id}`)
    })

    const respuestas = await Promise.all( promesasArr )
    
    const [p1, p2, p3, p4] = respuestas.map((rpta) => {
        return {
            name: rpta.data.name,
            id: rpta.data.id
        }
    })
    return [p1, p2, p3, p4];
   

    
}
export default getPokemonOptions
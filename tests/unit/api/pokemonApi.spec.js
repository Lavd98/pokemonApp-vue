import pokemonApi from '@/api/pokemonApi'

describe('PokemonApi', () => {
    test('Axio debe estar configurado con el url de pokemon APi', () =>{
        expect( pokemonApi.defaults.baseURL ).toBe('https://pokeapi.co/api/v2/pokemon')
    })
})
import getPokemonOptions, { getPokemonNames } from '@/helpers/getPokemonOptions'
import { pokemons } from '../mocks/pokemons.mock'


describe('getPokemonOptions', () =>{
    test('Sacar 4 numeros', async() => {

        const pokemons = await getPokemonNames([1,2,3,4])
    

        expect(pokemons).toEqual(pokemons)
    }),

    test('getPokemon retorna un arreglo mezclado', async() => {

        const mock = [
            { id: expect.any(Number), name: expect.any(String)},
            { id: expect.any(Number), name: expect.any(String)},
            { id: expect.any(Number), name: expect.any(String)},
            { id: expect.any(Number), name: expect.any(String)}
        ]

        const pokemons = await getPokemonOptions()

        expect(pokemons.length).toBe(4)
        expect(pokemons).toEqual(mock)
    })
})

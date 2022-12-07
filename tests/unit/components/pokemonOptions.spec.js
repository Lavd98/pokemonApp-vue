import { shallowMount } from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions'
import { pokemons } from '../mocks/pokemons.mock'

describe('PokemonOptionsComponent', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions, {
            props: {
                pokemons
            }
        })
    })


    test('debe hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('debe de mostrar las 4 opciones correctamente', () => {
        const li = wrapper.findAll('li')
        expect(li.length).toBe(4)

        expect(li[0].text()).toBe('bulbasaur')
    })

    test('debe de emitir "selection" cons sus respectivos parametros al hacer click', () => {
        const [li1, li2, li3, li4] = wrapper.findAll('li')

        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')
        // console.log(wrapper.emitted('selectionPokemon'))

        expect(wrapper.emitted('selectionPokemon').length).toBe(4)
        expect(wrapper.emitted('selectionPokemon')[0]).toEqual([1])
    })
})
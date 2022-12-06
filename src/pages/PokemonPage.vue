<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>Quien es este Pokemon?</h1>
    <PokemonPicture 
      :pokemonId="pokemon.id" 
      :showPokemon="showPokemon"
    />

    <PokemonOptions v-if="!showAnswer" 
      :pokemons="pokemonArr"
      @selection-pokemon="checkAnswer($event)"
    />

    <template v-else>
      <h2 class="fade-in">{{message}}</h2>
      <button @click="newGame">
        Nuevo Juego
      </button>
    </template>
    
  </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture';
import PokemonOptions from '@/components/PokemonOptions';

import getPokemonOptions from '@/helpers/getPokemonOptions'


export default {
    components: {
        PokemonPicture,
        PokemonOptions
    },
    data() {
      return {
        pokemonArr: [],
        pokemon: null,
        showPokemon: false,
        showAnswer: false,
        message: ''
      }
    },
    methods: {
      async mixPokemonArray() {
        this.pokemonArr = await getPokemonOptions()

        const rndInt = Math.floor( Math.random() * 4 )

        this.pokemon = this.pokemonArr[rndInt]
      },
      checkAnswer(selectedId) {
        this.showPokemon = true
        this.showAnswer = true

        if( selectedId === this.pokemon.id ) {
           this.message = `Correcto, es ${ this.pokemon.name }`
        } else {
           this.message = `Opps!, el pokemon es ${ this.pokemon.name }`
        }
      },
      newGame() {
        this.pokemonArr = [],
        this.showPokemon = false
        this.showAnswer = false
        this.pokemon = null
        this.message = ''
        this.mixPokemonArray()
      }
    },
    mounted() {
      this.mixPokemonArray()
    }
}
</script>

<style>

</style>
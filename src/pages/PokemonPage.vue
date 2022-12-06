<template>
   <div class="contador">
      <p class="separar">Correctas: {{correctas}}</p>
      <p class="separar">Incorrectas: {{incorrectas}}</p>
      <button @click="resetContador">Reiniciar Contador</button>
    </div>
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
        message: '',
        correctas: 0,
        incorrectas: 0
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
           this.correctas++
        } else {
           this.message = `Opps!, el pokemon es ${ this.pokemon.name }`
           this.incorrectas++
        }
      },
      newGame() {
        this.pokemonArr = [],
        this.showPokemon = false
        this.showAnswer = false
        this.pokemon = null
        this.message = ''
        this.mixPokemonArray()
      },
      resetContador() {
        this.correctas = 0
        this.incorrectas = 0
      }
    },
    mounted() {
      this.mixPokemonArray()
    }
}
</script>

<style scoped>
.contador {
    display: inline-flex; /*Convertimos al menú en flexbox*/
    align-items: center; /*con esto alineamos de manera vertical*/
}
.separar {
  margin-right: 30px;
}
</style>
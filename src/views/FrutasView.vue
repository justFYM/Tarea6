<script setup>
import Navbar from'@/components/Navbar.vue'
import {useCounterStore} from '../stores/counter.js'
import {useFrutasStore} from '../stores/frutas.js'
import {useTexto} from '@/stores/textoStore'

const store = useCounterStore(); //Luego de importar el store, se crea la variable que referencia al store.
const useFrutas = useFrutasStore();
const useTextoStore = useTexto();
</script>
<template>
 <Navbar></Navbar>
 <b-container>
  <b-card bg-variant="" text-variant="black" header="Botón con incremento" class="text-center">
 <b-button @click="store.increment()" id="1">
  Incremento x1= {{store.counter}}
  </b-button>
  </b-card>
       <b-card bg-variant="" text-variant="black" header="Comprobando v-for" class="text-center">
        <b-form-select>
          <b-form-select-option disabled>Seleccione una fruta</b-form-select-option>
        <b-form-select-option v-for="fruta in useFrutas.frutas" v-bind:value="fruta.id" :selected="fruta.selected">{{fruta.id}}-{{fruta.nombre}}</b-form-select-option>
    </b-form-select>
    </b-card>

    

    <b-card bg-variant="" text-variant="black" header="comprobando v-on y v-model" class="text-center">
    <b-form-input id="input-small" size="sm" placeholder="Escriba una fruta y luego presione agregar" style="margin-bottom:15px" v-model="useFrutas.nuevaFruta"></b-form-input>
    <b-button v-on:click='useFrutas.agregarFruta()'>Agregar</b-button>

  <b-list-group-item v-for="fruta in useFrutas.frutas" style="margin-top:15px">
   {{fruta.id}} - {{fruta.nombre}}
  </b-list-group-item>

    </b-card>

 <b-card bg-variant="" text-variant="black" header="comprobando v-if" class="text-center">
        <div class="texto" v-if="useTextoStore.texto">
        <p>Texto para comprobar</p>
        </div>
      <b-button variant="primary" @click="useTextoStore.texto =! useTextoStore.texto">Click aquí</b-button>
    </b-card>
  </b-container>
</template>


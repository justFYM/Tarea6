<script setup>
import Navbar from'@/components/Navbar.vue'
import {useTexto} from '@/stores/textoStore'

const useTextoStore = useTexto();
</script>
<template>
<b-container>
  <div>
    
  </div>


  <b-card bg-variant="" text-variant="black" header="Resumen" class="text-center">
    <div>
    <h10>Utilicé estos 6 componentes gráficos de BootstrapVue: b-form-input , b-button, b-card, b-container, b-select, b-list.</h10> 
    </div>
    <div>
    <h10>Utilicé estas 4 directivas de Vue: v-on, v-if, v-for, v-model.</h10> 
    </div>
</b-card>
</b-container>


</template>
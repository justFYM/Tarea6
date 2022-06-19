<template>
  <div class="Login">
    <b-container>
     <b-card class="mt-3">
      <b-row class="justify-content-md-center" cols="10">
         <h1 style="text-align: center; margin-top:3%">Tarea 6: Vue</h1>
        <b-col style="margin-top:5%;" cols="6">
       
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Usuario:"
        label-for="input-1"
        description="Usuario: Tarea6"
      >
        <b-form-input
          id="input-1"
          v-model="form.user"
          type="text"
          placeholder="Usuario: Tarea6"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Contraseña:" label-for="input-2" description="Contraseña: 12345">
        <b-form-input
          id="input-2"
          v-model="form.password"
          placeholder="Contraseña: 12345"
          type="password"
          
          required
        ></b-form-input>
      </b-form-group>

     
      <div style="text-align:center;">
      <b-button type="submit" variant="primary">¡Ingresar!</b-button>
      </div>
    </b-form>
    <b-card class="mt-3">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
    </b-col>
    </b-row>
   </b-card>
    </b-container>
  </div>
  <router-view></router-view>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          user: '',
          password: ''
         
        },
        show: true,
        con:false
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        if(this.form.user=='Tarea6' && this.form.password=='12345'){
          this.$router.push('home')

        }else{
         alert('Datos ingresados incorrectos')
          this.con=true
        }
       
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.user = ''
        this.form.password = ''
       
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
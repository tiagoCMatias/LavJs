<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/hegi.png" alt="Hegisantos" class="mb-5">
        <v-form v-model="form_valid">
          <v-flex xs12>
            <v-text-field
              label="Username"
              :rules="[(v) => v.length <= 25 || 'Max 25 characters']"
              :counter="25"
              v-model="title"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              label="Password"
              :rules="[(v) => v.length <= 25 || 'Max 25 characters']"
              :counter="25"
              v-model="password"
            ></v-text-field>
          </v-flex>
          <v-btn @click="submit" :disabled="!form_valid">Submeter</v-btn>
          <v-btn @click="clear">Limpar</v-btn>
        </v-form>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      form_valid: false,
      title: '',
      password: '',
      items: [
        { icon: '', title: 'Lavandarias' },
        { icon: '', title: 'Maquinas' },
        { icon: '', title: 'Liquidos' }
      ]
    }
  },
  methods: {
        submit () {
            if (this.$refs.form_valid.validate()) {
            signIn(this.name, this.password).then((resposta) => {
                console.log(resposta);

                if(resposta.message == "Sucessful"){
                    this.$router.push('/menu')
                }
                else {
                    this.alert = true;
                }
                });
            }
        },
        clear () { 
          this.$refs.form_valid.reset()
        },   
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

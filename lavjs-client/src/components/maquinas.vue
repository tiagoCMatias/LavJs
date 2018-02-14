<template>
    <v-container>
        <v-layout row justify-center>
            <v-dialog v-model="dialog" persistent max-width="500px">
            <v-btn color="primary" dark slot="activator">Adicionar Máquina</v-btn>
            <v-card>
                <v-card-title>
                <span class="headline">Nova Máquina</span>
                </v-card-title>
                <v-card-text>
                <v-container grid-list-md>
                    <v-form v-model="valid" ref="form" lazy-validation>
                        <v-layout wrap>
                        <v-flex xs12>
                            <v-text-field label="Nome" v-model="machine_name" :rules="formRules" required></v-text-field>
                        </v-flex>
                        <v-flex xs6>
                            <v-subheader>Lavandaria</v-subheader>
                        </v-flex>
                        <v-flex xs6>
                            <v-select 
                            v-bind:items="dropdown_lavandarias" 
                            label="Select"
                            v-model="lavandaria"
                            single-line
                            required
         
                            >
                            </v-select>
                        </v-flex>
                        </v-layout>
                    </v-form>
                </v-container>
                <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
                <v-btn color="blue darken-1" flat @click.native="addMaq">Save</v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
        </v-layout>

        <!-- DATA TABLE -->
        <v-layout class="ma-5">
            <v-flex xs12>
            <v-card-title>
            Lavandarias
            <v-spacer></v-spacer>
            <v-text-field
                append-icon="search"
                label="Procurar"
                single-line
                hide-details
                v-model="search"
            ></v-text-field>
            </v-card-title>
            <v-data-table
                v-bind:headers="headers"
                :items="items"
                :search="search"
                hide-actions
                class="elevation-1"
                >
                <template slot="items" slot-scope="props">
                    <tr >
                        <td>{{ props.item.id }}</td>
                        <td class="text-xs-right">{{ props.item.name }}</td>
                        <td class="text-xs-right">{{ props.item.lavandaria }}</td>
                        <td class="text-xs-right">{{ props.item.liquido }}</td>
                    </tr>
                </template>
                <template slot="no-data">
                <v-alert :value="true" color="error" icon="warning">
                    Sorry, nothing to display here :(
                </v-alert>
                </template>
                <template slot="pageText" slot-scope="{ pageStart, pageStop }">
                    From {{ pageStart }} to {{ pageStop }}
                </template>
            </v-data-table>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
import { getLavandarias, getMaquinas, postMaquinas } from '@/utils/configuration-manager'
export default {
  data() {
      return {
            valid: false,
            search: '',
            dialog: false,
            machine_name: '',
            local: '',
            lavandaria: null,
            item_lavandarias: [],
            dropdown_lavandarias: [],
            formRules: [
                (v) => (!!v || 'Required'),
                (v) => (v.length <= 20 || 'Required')
            ],
            headers: [
                {
                    text: 'ID',
                    align: 'left',
                    sortable: true,
                    value: 'id'
                },
                { text: 'Nome', value: 'name' },
                { text: 'Lavandaria', value: 'lavandaria' },
                { text: 'Programa', value: 'programa' }
            ],
            items: []
      }
    },
    mounted:function(){
        this.loadTable() //method will execute at pageload
    },
    methods: {
        loadTable:function(){
            getMaquinas()
            .then(resposta => {
                resposta.forEach(element => {
                    this.items.push(
                        { 
                            id: element._id,
                            name: element.name,
                            programa: element.programa,
                        }
                    );
                });

            })
            .catch(error => {
                console.log("Deu erro");
            });
            getLavandarias().then((resposta) => {
                for(let i = 0; i < resposta.length; i++)
                {
                    //console.log(resposta[i].name);
                    //console.log(resposta[i].local);
                    //console.log(resposta[i]._id);
                    this.item_lavandarias.push(
                        { 
                            id: resposta[i]._id,
                            name: resposta[i].name,
                            local: resposta[i].local,
                        }
                    );
                    this.dropdown_lavandarias.push( { text: resposta[i].name, id_lav: resposta[i]._id } );
                }
            });
        },
        addMaq:function(){
            console.log(this.lavandaria.text);
            console.log(this.lavandaria.id_lav);
            /*this.dropdown_lavandarias.forEach(element => {
                if(element.text === this.lav_choice){
                    console.log(element.id_lav);
                }
            });*/
            console.log(this.machine_name);
        }
    }
}
</script>


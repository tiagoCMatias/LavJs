<template>
    <v-container>
        <v-layout row justify-center>
            <v-dialog v-model="dialog" persistent max-width="500px">
            <v-btn color="primary" dark slot="activator">Adicionar Lavandaria</v-btn>
            <v-card>
                <v-card-title>
                <span class="headline">Nova Lavandaria</span>
                </v-card-title>
                <v-card-text>
                <v-container grid-list-md>
                    <v-form v-model="valid" ref="form" lazy-validation>
                        <v-layout wrap>
                        <v-flex xs12>
                            <v-text-field label="Nome" v-model="name" :rules="formRules" required></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field label="Localidade" v-model="local" :rules="formRules" required></v-text-field>
                        </v-flex>
                        </v-layout>
                    </v-form>
                </v-container>
                <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
                <v-btn color="blue darken-1" flat @click.native="addLav">Save</v-btn>
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
                    <tr @click="teste">
                        <td>{{ props.item.id }}</td>
                        <td class="text-xs-right">{{ props.item.local }}</td>
                        <td class="text-xs-right">{{ props.item.name }}</td>
                        <!--<td class="text-xs-right">{{ props.item.liquido }}</td>-->
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
import { getLavandarias, postLavandarias } from '@/utils/configuration-manager'
export default {
  data() {
      return {
            valid: false,
            search: '',
            dialog: false,
            name: '',
            local: '',
            formRules: [
                (v) => (!!v || 'Required'),
                (v) => (v && v.length <= 20 || 'Required')
            ],
            headers: [
                {
                    text: 'ID',
                    align: 'left',
                    sortable: true,
                    value: 'id'
                },
                { text: 'Localidade', value: 'local' },
                { text: 'Nome', value: 'name' }
                //{ text: 'Liquido', value: 'liquido' }
            ],
            items: [
            ]
      }
    },
    mounted:function(){
        this.loadTable() //method will execute at pageload
    },
    methods: {
        loadTable:function(){
            getLavandarias().then((resposta) => {
                for(let i = 0; i < resposta.length; i++)
                {
                    //console.log(resposta[i].name);
                    //console.log(resposta[i].local);
                    //console.log(resposta[i]._id);
                    this.items.push(
                        { 
                            id: resposta[i]._id,
                            name: resposta[i].name,
                            local: resposta[i].local,
                            liquido: resposta[i].liq_total
                        }
                    );
                }
            });
        },
        teste:function(){
            //console.log("Teste");
        },
        addLav:function(){
            if (this.$refs.form.validate()){
            postLavandarias(this.name, this.local)
                .then(resposta => {
                    this.dialog = false;
                })
                .catch(error => {
                    console.log("Error");
                });
            }
        }
    }
}
</script>


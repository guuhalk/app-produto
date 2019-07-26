<template>
<div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Produtos Front</a>
      </div>
    </nav>

    <div class="container">
     
      <form @submit.prevent="salvar()">

					<div class="input-field col s6">
							<input type="text" class="validate" v-model="produto.nome">
							<label>Nome</label>  
					</div>

					<div class="input-field col s6">
							<input type="text" class="validate" v-model="produto.quantidade">
							<label>Quantidade</label>  
					</div>

					<div class="input-field col s6">
							<input type="text" class="validate" v-model="produto.valor">
							<label>Valor</label>  
					</div>

          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

      <table>

        <thead>

          <tr>
            <th>NOME</th>
            <th>QTD</th>
            <th>VALOR</th>
            <th>OPÇÕES</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="produto of produtos" :key="produto.id">

            <td>{{ produto.nome }}</td>
            <td>{{ produto.quantidade }}</td>
            <td>{{ produto.valor}}</td>
            <td>
              <button @click="editar(produto)" class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>
      

    </div> 

  </div> 
</template> 

<script>

  import produto from './services/produtos'

  export default{

    data(){
      return{

        produto:{
          nome:'',
          quantidade:'',
          valor:''
        },

        produtos: []
      }
    },


    mounted(){
      this.listar()
    },

    methods:{

      editar(produto){
        this.produto = produto
      },

      salvar(){
        
        produto.salvar(this.produto).then(resposta =>{
          this.produto = {}
          alert('Salvo com sucesso')
          this.listar()
        }).catch( e => {
          console.log(e.response)
        })
        
      },

      listar(){
        produto.listar().then(resposta => {

          console.log(resposta.data)
          this.produtos = resposta.data
          this.listar()
        }) 

      }


    },
    


  }

</script>

<style>

</style>

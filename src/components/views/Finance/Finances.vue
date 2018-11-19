<template>
    <div class="loader text-center" v-if="isLoading">
        <div class="lds-facebook"><div></div><div></div><div></div></div>
    </div>
    <div class="row" v-else>
      <FinanceForm :finance="finance" :showModal="showModal" @closeModal="closeModal" />
      <div class="col-12 mb-3">
        <h3 class="float-left">Lançamentos</h3>
        <button class="btn btn-primary float-right" @click="openform()">ADICIONAR</button>
      </div>
        <div class="col-12">
          <div class="card">
            <div class="card-content" >
                <table class="table table-hover">
                  <thead>
                      <tr>
                      <th scope="col">#</th>
                      <th>Nome</th>
                      <th>Valor</th>
                      <th>Periodo</th>
                      <th>Categoria</th>
                      <th></th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="item in finances">
                        <th scope="row">{{item.id}}</th>
                        <td>{{item.name}}</td>
                        <td>{{item.price}}</td>
                        <td>{{item.period.name}}</td>
                        <td>{{item.category.name}}</td>
                        <td>
                          <font-awesome-icon icon="edit" @click="openform(item)" />
                          <font-awesome-icon icon="trash" @click="deleteItem(item.id)" />
                        </td>
                      </tr>
                  </tbody>
                </table>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import FinanceForm from './FinanceForm'
import {RepositoryFactory} from './../../../components/_repositories/repositoryFactory'
const financeRepository = RepositoryFactory.get('finances')
export default {
  components: {
    FinanceForm
  },
  data: function () {
    return {
      isLoading: true,
      finances: [],
      finance: {},
      showModal: false
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    async fetch () {
      const response = await financeRepository.get()
      if(response.data['message'] == 'success'){
        this.finances = response.data['data']
      }
      else {
        console.log(`${response.data['message']} - ${JSON.stringify(response.data['data'])}`)
      }
      this.isLoading = false
    },
    deleteItem: function (id) {
      financeRepository.delete(id).then(response => {
        if(response.data['message'] == 'success')
          this.fetch()
        else
          console.log(response.data)
      })
    },
    openform: function (item = {}) {
      console.log(`SELECTED ITEM: ${JSON.stringify(item)}`)
      this.showModal = true
      this.finance = item
    },
    closeModal: function (status, refresh) {
      this.showModal = status
      if(refresh) {
        this.fetch()
      }
    }
  }
}
</script>

<style>

</style>

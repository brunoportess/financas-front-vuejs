<template>
    <div class="row">
      <PeriodForm :period="period" :showModal="showModal" @closeModal="closeModal" />
      <div class="col-12 mb-3">
        <h3 class="float-left">Períodos</h3>
        <button class="btn btn-primary float-right" @click="openform()">ADICIONAR</button>
      </div>
        <div class="col-12">
          <div class="card">
              
              <div class="card-content">
                  <table class="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Período</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in periods">
                          <th scope="row">1</th>
                          <td>{{item.name}}</td>
                          <td>{{item.month}}/{{item.year}}</td>
                          <td>
                            <font-awesome-icon icon="edit" @click="openform(item)" />
                            <font-awesome-icon icon="trash" @click="deleteItem(item.id)"/>
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
import PeriodForm from './PeriodForm'
import {RepositoryFactory} from './../../../components/_repositories/repositoryFactory'
const PeriodsRepository = RepositoryFactory.get('periods')

export default {
  components: {
    PeriodForm
  },
  data: function () {
    return {
      periods: [],
      period: {},
      showModal: false
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    async fetch () {
      const response = await PeriodsRepository.get()
      console.log(JSON.stringify(response.data['data']))
      this.periods = response.data['data']
    },
    deleteItem: function (id) {
      PeriodsRepository.delete(id).then(response => {
        if(response.data['message'] == 'success')
          this.fetch()
        else
          console.log(response.data)
      })
    },
    openform: function (item = {}) {
      console.log(`SELECTED ITEM: ${JSON.stringify(item)}`)
      this.showModal = true
      this.period = item
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

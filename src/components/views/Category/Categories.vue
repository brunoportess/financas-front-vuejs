<template>
    <div class="loader text-center" v-if="isLoading">
        <div class="lds-facebook"><div></div><div></div><div></div></div>
    </div>
    <div class="row" v-else>
      <CategoryForm :category="category" :showModal="showModal" @closeModal="closeModal" />
      <div class="col-12 mb-3">
        <h3 class="float-left">Categorias</h3>
        <button class="btn btn-primary float-right" @click="openform()">ADICIONAR</button>
      </div>
        <div class="col-12">
          <div class="card">
            <div class="card-content" >
                <table class="table table-hover">
                  <thead>
                      <tr>
                      <th scope="col">#</th>
                      <th scope="col">Nome</th>
                      <th></th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="item in categories">
                        <th scope="row">1</th>
                        <td>{{item.name}}</td>
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
import CategoryForm from './CategoryForm'
import {RepositoryFactory} from './../../../components/_repositories/repositoryFactory'
const categoryRepository = RepositoryFactory.get('categories')
export default {
  components: {
    CategoryForm
  },
  data: function () {
    return {
      isLoading: true,
      categories: [],
      category: {},
      showModal: false
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    async fetch () {
      const response = await categoryRepository.get()
      console.log(JSON.stringify(response.data['data']))
      this.categories = response.data['data']
      this.isLoading = false
    },
    deleteItem: function (id) {
      categoryRepository.delete(id).then(response => {
        if(response.data['message'] == 'success')
          this.fetch()
        else
          console.log(response.data)
      })
    },
    openform: function (item = {}) {
      console.log(`SELECTED ITEM: ${JSON.stringify(item)}`)
      this.showModal = true
      this.category = item
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
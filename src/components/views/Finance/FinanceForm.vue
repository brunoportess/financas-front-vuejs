<template>
    <transition name="fade">
        <div class="modal-mask"  id="myModal" v-if="showModal">
            <div class="modal-dialog">
            <div class="modal-content">

                <div class="modal-header">
                <h4 class="modal-title">Período</h4>
                <button type="button" class="close" data-dismiss="modal" @click="closeModal()">&times;</button>
                </div>

                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="name">Nome</label>
                                <input type="text" name="name" v-model="finance.name" class="form-control" id="name" placeholder="Nome">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="price">Valor</label>
                                <input type="text" name="price" v-model="finance.price" class="form-control" id="price" placeholder="Valor">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group vselect">
                                <label for="category_id">Categoria</label>
                                <v-select id="category_id" v-model="finance.category" :options="categories" label="name">
                                    <template slot="option" slot-scope="option">
                                        {{ option.name }}
                                    </template>
                                </v-select>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <label for="period_id">Período</label>
                                <input type="text" name="year" v-model="finance.year" class="form-control" id="year" placeholder="Mês">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                <button type="submit" class="btn btn-info btn-fill btn-wd" @click.prevent="saveFinance">
                    Gravar
                </button>
                </div>
            </div>
            </div>
        </div>
        </transition>
</template>

<script>
import {RepositoryFactory} from './../../../components/_repositories/repositoryFactory'
const FinancesRepository = RepositoryFactory.get('finances')
const CategoryRepository = RepositoryFactory.get('categories')
const PeriodsRepository = RepositoryFactory.get('periods')
export default {
    data: function () {
        return {
            categorySelected: {},
            periodSelected: {},
            categories: [],
            periods: []
        }
    },
    created () {
        this.loadItens()
    },
    methods: {
        async loadItens () {
            console.log('finance form')
            const responseCategories = await CategoryRepository.get()
            if(responseCategories.data['message'] == 'success'){
                this.categories = responseCategories.data['data']
            }
            else {
              console.log(`${responseCategories.data['message']} - ${JSON.stringify(responseCategories.data['data'])}`)
            }
            const responsePeriods = await PeriodsRepository.get()
            if(responsePeriods.data['message'] == 'success'){
                this.periods = responsePeriods.data['data']
            }
            else {
              console.log(`${responsePeriods.data['message']} - ${JSON.stringify(responsePeriods.data['data'])}`)
            }
        },
        saveFinance: function () {
            this.finance.category_id = this.finance.category_id.id
            console.log(this.finance)
            /*PeriodsRepository.save(this.period).then(response => {
                this.$emit('closeModal', false, true)
            })*/
        },
        closeModal: function () {
        this.$emit('closeModal', false, false)
        }
    },
    props: ['finance', 'showModal']
}
</script>

<style>
@import '../../../assets/css/modal.css';
</style>

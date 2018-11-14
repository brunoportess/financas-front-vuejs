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
                        <div class="col-md-12">
                        <div class="form-group">
                                <label for="name">Nome</label>
                                <input type="text" name="name" v-model="period.name" class="form-control" id="name" placeholder="Nome">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                                <label for="month">Mês</label>
                                <input type="text" name="month" v-model="period.month" class="form-control" id="month" placeholder="Mês">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <label for="year">Ano</label>
                                <input type="text" name="year" v-model="period.year" class="form-control" id="year" placeholder="Mês">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                <button type="submit" class="btn btn-info btn-fill btn-wd" @click.prevent="savePeriod">
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
const PeriodsRepository = RepositoryFactory.get('periods')
export default {
    methods: {
        savePeriod: function () {
            console.log(this.period)
            PeriodsRepository.save(this.period).then(response => {
                this.$emit('closeModal', false, true)
            })
        },
        closeModal: function () {
        this.$emit('closeModal', false, false)
        }
    },
    props: ['period', 'showModal']
}
</script>

<style>
@import '../../../assets/css/modal.css';
</style>

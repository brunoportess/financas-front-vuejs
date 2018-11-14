<template>
    <transition name="fade">
        <div class="modal-mask"  id="myModal" v-if="showModal">
            <div class="modal-dialog">
            <div class="modal-content">

                <div class="modal-header">
                <h4 class="modal-title">Categoria</h4>
                <button type="button" class="close" data-dismiss="modal" @click="closeModal()">&times;</button>
                </div>

                <div class="modal-body">
                <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                            <label for="name">Nome</label>
                            <input type="text" name="name" v-model="category.name" class="form-control" id="name" placeholder="Nome">
                        </div>
                    </div>
                </div>
                </div>

                <div class="modal-footer">
                <button type="submit" class="btn btn-info btn-fill btn-wd" @click.prevent="saveCategory">
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
const CategoryRepository = RepositoryFactory.get('categories')
export default {
    methods: {
        saveCategory: function () {
            console.log(this.period)
            CategoryRepository.save(this.category).then(response => {
                this.$emit('closeModal', false, true)
            })
        },
        closeModal: function () {
        this.$emit('closeModal', false)
        }
    },
    props: ['category', 'showModal']
}
</script>

<style>
@import '../../../assets/css/modal.css';
</style>

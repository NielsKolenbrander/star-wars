<template>
  <div>
    <User :username="user.username" :age="user.age" class="text-center mb-[20px]" />
    <section class="w-[50%] mx-auto mb-[50px] flex justify-between">
      <Saber v-for="saber in sabers" :key="saber.id" :saber="saber" />
    </section>
    <section class="w-[50%] mx-auto flex flex-wrap">
      <router-link :to="{ name: 'padawan', query: { page: page - 1 } }" rel="prev" id="prev" v-if="page != 1" class="w-[25%] text-left hover:text-gray-500">Prev</router-link>
      <span v-else class="w-[25%]"></span>
      <section class="flex flex-wrap justify-around w-[50%]">
        <router-link :class="{ active: page == currentPage }" v-for="currentPage in totalPages" :key="currentPage" :to="{ name: 'padawan', query: { page: currentPage } }" class="hover:text-gray-500">
          {{ currentPage }}
        </router-link>
      </section>
      <router-link :to="{ name: 'padawan', query: { page: page + 1 } }" rel="next" id="next" v-if="hasNextPage" class="w-[25%] text-right hover:text-gray-500">Next</router-link>
      <span v-else class="w-[25%]"></span>
    </section>
  </div>
</template>

<script>
import { watchEffect } from 'vue'
import ApiServices from '../services/ApiServices.js'
import User from '../components/User.vue'
import Saber from '../components/Saber.vue'

export default {
  name: 'PadawanView',
  props: ['page'],
  components: {
    User,
    Saber
  },
  data(){
    return {
      sabers: null,
      totalSabers: 0,
      totalPages: 0,
      user: {}
    }
  },
  created(){
    watchEffect(() => {
      ApiServices.getSabers(2, this.page)
      .then((response) => {
        this.sabers = response.data
        this.totalSabers = response.headers['x-total-count']
        this.totalPages = this.totalSabers / 2
      })
      .catch((error) => {
        console.log(error)
      })
    })

    this.$store.dispatch('fetchUser')
  },
  computed: {
    user(){
      return this.$store.state.user
    },
    hasNextPage(){
      var totalPages = Math.ceil(this.totalSabers / 2)
      return this.page < totalPages
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

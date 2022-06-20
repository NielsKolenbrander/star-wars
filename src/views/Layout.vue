<template>
  <div>
    <h1>{{ saber.name }}</h1>
    <nav>
      <router-link :to="{ name: 'saberDetails' }">Details</router-link>
      <router-link :to="{ name: 'saberRegister' }">Register</router-link>
      <router-link :to="{ name: 'saberEdit' }">Edit</router-link>
    </nav>
    <router-view :saber="saber"></router-view>
  </div>
</template>

<script>
import ApiServices from '../services/ApiServices.js'
export default {
  props: ['id'],
  data(){
    return {
      saber: null
    }
  },
  created(){
    ApiServices.getSaber(this.id)
      .then(repsonse => {
        this.saber = repsonse.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<template>
  <router-link :to="{ name: 'saberDetails', params: { id:saber.id } }" class="saber">
    <div>
      <h3>{{ saber.name }} </h3>
      <span :style="{ backgroundColor: saber.crystal.color }" class="saber-color"></span>
      <div>
        Krachtverbruik = {{ powerUsage() }}F
      </div>
      <div>
        {{ stockNotification() }} <br />
      </div>
      <div>
        &euro; {{ price() }}
      </div>
      <button>Bestellen</button>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    saber: {
      type: Object,
    }
  },
  data(){
    return {
      userdata: null
    }
  },
  created(){
    this.$store.dispatch('fetchUser')
  },
  computed: {
    userAge(){
      return this.$store.state.user.age
    }
  },
  methods: {
    powerUsage(){
      const age = this.userAge
      const power = this.saber.crystal.power
      const usage = (age * 10) / 100 * power
      return usage
    },
    price(){
      return this.saber.crystal.cr * this.powerUsage()
    },
    stockNotification(){
      const stock = this.saber.stock
      if(stock <= 5){
        return 'nog maar ' + stock + ' op voorraad'
      } else {
        return 'op voorraad'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.saber {

  h3 {
    font-size: 24px;
  }

  .saber-color {
    width: 50px;
    height: 50px;
    display: block;
    border-radius: 50%;
    margin: 10px 0;
  }

  button {
    background-color: #ccc;
    color: #000;
    padding: 5px;
    border-radius: 5px;
    margin: 10px 0;

    &:hover {
      background-color:#999;
      color: #fff;
    }
  }

}

</style>

<template>
  <div>
    <h1>Naam: {{ username }}</h1>
    <strong>Leeftijd: {{ age }}</strong>
  </div>
</template>
 
<script>
export default {
  props: {
    username: String,
    age: Number
  }
}
</script>

<style lang="scss" scoped>

</style>

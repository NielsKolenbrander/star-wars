<template>
  <div>
    <h1>De {{ resource }} die je zoekt is niet gevonden</h1>
    <router-link :to="{ name: 'home' }">Ga terug naar de homepage</router-link>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
      default: 'pagina'
    }
  }
}
</script>

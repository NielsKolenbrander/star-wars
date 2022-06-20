<template>
  <div>
    <p>{{ saber.name }}, {{ saber.crystal.color }}</p>
  </div>
</template>

<script>
export default {
  props: ['saber']
}
</script>

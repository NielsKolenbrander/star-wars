<template>
  <main>
    <nav class="mx-auto w-1/2">
      <router-link to="/"><img src="./assets/starwars-logo.png" class="w-1/2 mx-auto my-5" /></router-link>
    </nav>
    <router-view/>
  </main>
</template>

<style lang="scss">

@import './assets/tailwind.css';
body, html {
  background-image: url('assets/bg-stars.png');
  color: #fff;
}

</style>

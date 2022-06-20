<template>
  <div>
    <nav class="flex flex-row justify-around items-center">
      <router-link to="/masterjedi" class="text-center">
        <img src="../assets/jedi-knight.png" alt="jedi knight" class="mb-10 border border-white rounded-full">
        <strong>Master Jedi</strong>
      </router-link>
      <h1 class="text-yellow-300 text-center text-2xl">Who are you ?</h1>
      <router-link to="/padawan" class="text-center">
        <img src="../assets/padawan.png" alt="jedi knight" class="mb-10 border border-white rounded-full">
        <strong>Padawan</strong>
      </router-link>
    </nav>
  </div>
</template>

<style lang="scss" scoped>

nav a:hover img {box-shadow: 1px 1px 15px #fff;}

</style>

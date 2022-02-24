<script lang="ts" setup>
// import ReactiveCounter from '/@/components/ReactiveCounter.vue';
import Header from '/@/components/Header.vue';
import Bottom   from '/@/components/Bottom.vue';
</script>
<template>
  <div class="w-screen h-screen bg-gray-700 flex flex-col">
    <Header />
    <div class="body h-full w-full grid grid-cols-12">
      <div class="sideMenu h-full col-span-2  flex">
        <div class="tabs h-full w-10 bg-gray-800" />
      </div>
      <div class="work-area h-full w-full col-span-10 bg-gray-200 " />
    </div>
    <Bottom />
    <div class="footer h-10 w-full bg-gray-800" />
  </div>
</template>

<style>
#app {
  width: 100vw;
  height: 100vh;
}
fieldset {
  margin: 2rem;
  padding: 1rem;
}
</style>

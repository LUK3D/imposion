<script>
export default {
  name: 'LukBottom',
  inheritAttrs: false,
  customOptions: {},
};
</script>
<script lang="ts" setup>

</script>

<template>
  <div class="w-full h-2/4 bg-gray-800  flex flex-col">
    <div class="timeline h-10 w-full" />
    <div class="layers h-full w-full grid grid-cols-12 bg-gray-700">
      <div class="layer-names col-span-2 h-full" />
      <div class="layers-key-frames h-full col-span-10 bg-gray-600" />
    </div>
  </div>
</template>

<style scoped>

</style>

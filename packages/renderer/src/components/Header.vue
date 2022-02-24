<script>
export default {
  name: 'LukHeader',
  inheritAttrs: false,
  customOptions: {},
};
</script>
<script lang="ts" setup>

</script>

<template>
  <div class="w-full h-10 py-2 px-5 bg-gray-800 flex items-center justify-between text-gray-400 text-sm">
    <p>Imposion</p>
    <button class="btn btn-ghost btn-sm  rounded-none border-l-0 border-pink-600 border-0 hover:bg-gray-900 ">
      <div class="w-5 h-5 mr-2 ">
        <svg
          width="20"
          height="22"
          viewBox="0 0 20 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="stroke-current"
            d="M10 7V1L8 3"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            class="stroke-current"
            d="M10 1L12 3"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            class="stroke-current"
            d="M5 11C1 11 1 12.79 1 15V16C1 18.76 1 21 6 21H14C18 21 19 18.76 19 16V15C19 12.79 19 11 15 11C14 11 13.72 11.21 13.2 11.6L12.18 12.68C11 13.94 9 13.94 7.81 12.68L6.8 11.6C6.28 11.21 6 11 5 11Z"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            class="stroke-current"
            d="M3 11V9C3 6.99004 3 5.33004 6 5.04004"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            class="stroke-current"
            d="M17 11V9C17 6.99004 17 5.33004 14 5.04004"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <p>PUBLISH</p>
    </button>
  </div>
</template>

<style scoped>

</style>

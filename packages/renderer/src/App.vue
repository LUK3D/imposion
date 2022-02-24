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
        <div class="tabs h-full w-10 bg-gray-800 flex flex-col align-middle items-center">
          <button class="btn btn-ghost btn-sm text-gray-200 btn-square  rounded-none border-l-4 border-pink-600 border-0 hover:bg-gray-900 ">
            <div class="w-5 h-5 ">
              <svg
                width="20"
                height="22"
                viewBox="0 0 20 22"
                class="fnone"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="stroke-current"
                  d="M11.01 1.92007L16.91 4.54007C18.61 5.29007 18.61 6.53007 16.91 7.28007L11.01 9.9001C10.34 10.2001 9.24002 10.2001 8.57002 9.9001L2.67002 7.28007C0.97002 6.53007 0.97002 5.29007 2.67002 4.54007L8.57002 1.92007C9.24002 1.62007 10.34 1.62007 11.01 1.92007Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  class="stroke-current"
                  d="M1 10C1 10.84 1.63 11.81 2.4 12.15L9.19 15.17C9.71 15.4 10.3 15.4 10.81 15.17L17.6 12.15C18.37 11.81 19 10.84 19 10"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  class="stroke-current"
                  d="M1 15C1 15.93 1.55 16.77 2.4 17.15L9.19 20.17C9.71 20.4 10.3 20.4 10.81 20.17L17.6 17.15C18.45 16.77 19 15.93 19 15"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </button>
          <button class="btn btn-ghost btn-sm text-gray-200 btn-square  rounded-none border-l-0 border-pink-600 border-0 hover:bg-gray-900 ">
            <div class="w-5 h-5 ">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="stroke-current"
                  d="M13.4299 13.55H8.42993"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  class="stroke-current"
                  d="M21 10V16C21 20 20 21 16 21H6C2 21 1 20 1 16V6C1 2 2 1 6 1H7.5C9 1 9.33 1.44 9.9 2.2L11.4 4.2C11.78 4.7 12 5 13 5H16C20 5 21 6 21 10Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                />
              </svg>
            </div>
          </button>
        </div>  
      </div>
      <div class="work-area h-full w-full col-span-10 bg-gray-200 " />
    </div>
    <Bottom />
    <div class="footer h-10 w-full bg-gray-900" />
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

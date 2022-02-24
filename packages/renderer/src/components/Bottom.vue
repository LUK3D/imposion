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
    <div class="timeline h-10 w-full grid grid-cols-12">
      <div class="details col-span-2 h-full" />
      <div class="frames-number h-full col-span-10 flex flex-row items-center overflow-auto text-gray-300">
        <button
          v-for="(item, index) in 64"
          :key="index"
          class="btn btn-square btn-ghost btn-sm  bg-gray-800"
        >
          {{ index }}
        </button>
      </div>
    </div>
    <div class="layers h-full w-full grid grid-cols-12 bg-gray-700 relative">
      <div class="layer-names col-span-2 h-full flex flex-col">
        <div class="track  flex flex-col text-gray-300  w-full">
          <div class="track  border-b border-gray-800 flex justify-between items-center  px-3 py-1 w-full">
            <p>div</p>
          </div>
          <div class="props h-20 bg-slate-800 border-t border-gray-900 flex flex-col">
            <div class="property px-3 text-sm py-2 flex justify-between items-center">
              <p>Background-Color</p>
              <button class="btn btn-sm btn-square bg-white" />
            </div>
            <button class="btn btn-sm bg-teal-500 hover:bg-teal-600 rounded-none">
              <div class="w-5 h-5 mr-3">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="stroke-current"
                    d="M7 11H15"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    class="stroke-current"
                    d="M11 15V7"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    class="stroke-current"
                    d="M8 21H14C19 21 21 19 21 14V8C21 3 19 1 14 1H8C3 1 1 3 1 8V14C1 19 3 21 8 21Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div> Add Property
            </button>
          </div>
        </div>
      </div>
      <div class="layers-key-frames h-full col-span-10 bg-gray-600 relative">
        <div
          class="track absolute left-0 top-0 bottom-0  bg-white "
          style="width: 2px;"
        >
          <div class="circle absolute w-7 h-7   -top-9 -left-3 cursor-pointer ">
            <svg
              width="24"
              height="35"
              viewBox="0 0 24 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="stroke-current"
                d="M24 12C24 17.9674 17.1088 25.3496 13.1812 32.6007C12.7406 33.4142 11.4125 33.3514 11.0204 32.5135C7.64029 25.2904 0 17.9434 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z"
                fill="white"
              />
            </svg>
          </div>
          <p class="-top-8 -left-1 absolute font-bold cursor-pointer select-none ">
            0
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

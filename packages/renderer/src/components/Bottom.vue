<script lang="ts">
import { ref } from 'vue';
import { Property, PropertyTypes } from '../models/Property';

export default {
  name: 'LukBottom',
  inheritAttrs: false,
  customOptions: {},
};
</script>
<script lang="ts" setup>

let objects = ref([
  {
    name:'div',
    expand:false,
    properties:[
      new Property({name:'background-color',type: PropertyTypes.Color}),
      new Property({name:'font-familly',type: PropertyTypes.String}),
      new Property({name:'color',type: PropertyTypes.Color}),
      new Property({name:'Backround-Image',type: PropertyTypes.String, tip:'Defines the element \n backround as an image'}),
    ],
  },
  {
    name:'input',
    expand:false,
    properties:[
      new Property({name:'background-color',type: PropertyTypes.Color}),
      new Property({name:'font-familly',type: PropertyTypes.String}),
      new Property({name:'color',type: PropertyTypes.Color}),
      new Property({name:'Backround-Image',type: PropertyTypes.String, tip:'Defines the element \n backround as an image'}),
    ],
  },
]);

</script>

<template>
  <div class="w-full  bg-gray-800  flex flex-col">
    <div class="timeline h-10 w-full grid grid-cols-12 border-b border-gray-900">
      <div class="details col-span-3 h-full" />
      <div class="frames-number h-full col-span-9 flex flex-row items-center overflow-auto text-gray-300">
        <button
          v-for="(item, index) in 64"
          :key="index"
          class="btn btn-square btn-ghost btn-sm  bg-gray-800"
        >
          {{ index }}
        </button>
      </div>
    </div>
    <div class="layers h-60 overflow-y-auto w-full grid grid-cols-12 bg-gray-700 relative">
      <div class="layer-names col-span-3 h-full flex flex-col">
        <div class="track  flex flex-col text-gray-300  w-full">
          <div
            v-for="(item, index) in objects"
            :key="index"
            class="flex flex-col w-full "
          >
            <div class="track  border-b border-gray-800 flex justify-between items-center  px-3 py-1 w-full">
              <div class="flex ">
                <label class="swap swap-rotate mr-2">
                  <input
                    v-model="item.expand"
                    type="checkbox"
                  > 
                  <svg
                    class="swap-on text-teal-500 "
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="stroke-current"
                      d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      class="stroke-current"
                      d="M7.46997 9.73999L11 13.26L14.53 9.73999"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    class="swap-off "
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="stroke-current"
                      d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      class="stroke-current"
                      d="M9.73999 14.53L13.26 11L9.73999 7.46997"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>



                </label>
                <p>{{ item.name }}</p>
              </div>
            </div>
            <div
              v-if="item.expand"
              class=" props  bg-slate-800 border-t border-gray-900 flex flex-col"
            >
              <div
                v-for="(property, index2) in item.properties"
                :key="index2"
                class=" hover:bg-gray-700 pl-8 property px-3 text-sm py-1 flex justify-between items-center"
              >
                <div
                  :class="(property.tip!=null)?'tooltip w-2/4 flex':' w-2/4 flex' "
                  :data-tip="property.tip"
                >
                  {{ property.name }}
                </div>
                <button
                  v-if="property.type == PropertyTypes.Color"
                  class="btn btn-sm btn-square bg-white"
                />
                <input
                  v-if="property.type == PropertyTypes.String"
                  type="text"
                  :placeholder="property.name"
                  class="text-gray-300 input focus:text-gray-300 input w-full  bg-gray-900 input-ghost input-sm "
                >
              </div>
            </div>
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
      <div class="layers-key-frames h-full col-span-9 bg-gray-600 relative z-10">
        <div
          class="track absolute left-0 top-0 bottom-0  bg-white z "
          style="width: 2px;"
        >
          <div class="circle absolute w-7 h-7  z-20 -top-9 -left-3 cursor-pointer ">
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

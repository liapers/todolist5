<template>
  <div  v-bind:id="`tasks_${index}`" class="output-form flex">
    <p class="out-text">{{ task.task }}</p>
    <p class="out-text">{{ task.desc }}</p>
    <div class="menu-task flex">
      <img :src="image" class="basket" alt="delete" @click="DeleteTask" />
      <input
        type="checkbox"
        class="checkbox"
        v-bind:id="`checkbox_${index}`"
        v-on:click="DoneTask(index)"
      />
    </div>
  </div>
</template>

<script>
import image from "../image/basket.png";
export default {
  name: "PanelTask",
  props: {
    task: { type: Object },
    index: { type: Number },
  },

  data() {
    return {
      image,
    };
  },
  methods: {
    DeleteTask(e) {
      const box = e.target.closest("#tasks");
      box.remove();
    },
    DoneTask(index) {
      const check = document.querySelector(`#checkbox_${index}`);
      const block = document.querySelector(`#tasks_${index}`)
      if(check.checked){
        block.classList.add("done")
      }
      else{
        block.classList.remove("done")
      }
    },
  },
};
</script>


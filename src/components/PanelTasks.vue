<template>
  <div id="tasks" class="output-form flex">
        <p class="out-text">{{task.task}}</p>
        <p class="out-text">{{task.desc}}</p>
<div class="menu-task">
<img :src="image" class="basket" alt="delete">
</div>
  </div>
</template>

<script>
import image from "../image/basket.png"
export default {
  name: "PanelTask",
  props:  ["task"],
  data() {
    return {
      image
    };
  } 
};
</script>


<template>
  <div id="tasks" class="output-form">
        <p class="out-text">{{task.task}}</p>
        <p class="out-text">{{task.desc}}</p>
  </div>
</template>

<script>
export default {
  name: "PanelTask",
  props:  ["task"]
  
};
</script>


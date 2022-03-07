<template>
  <div class="mein-form flex">
    <input
      id="task"
      class="item-form mein-text"
      type="text"
      placeholder="Задача"
    />
    <input
      id="desc"
      class="item-form mein-desc"
      type="text"
      placeholder="Описание"
    />
    <button v-on:click="AddTask()" id="save" class="item-form btn-form">
      Сохранить
    </button>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  methods: {
    AddTask() {
      let task = document.querySelector("#task");
      let desc = document.querySelector("#desc");
      //отправляет события в родительский элемент
      this.$emit("add-task", { task: task.value, desc: desc.value });
    },
  },
};
</script>


<template>
    <div class="container">
          <!-- @что-то используется, что отправить полученные данные в какую-либо функцию, в ланном случае начения инпутов в функции савньютаск -->
    <GetTasks @add-task="saveNewTask" />
    <!-- Вместо мапа используем v-for -->
    <div id="output" class="output-forms flex">
      <p class="title">Список задач</p>
  <PanelTasks v-for="(task, index) in tasks" :key="index" :task="task"/>
    </div>
    </div>
</template>

<script>
import GetTasks from "./components/GetTasks.vue";
import PanelTasks from "./components/PanelTasks.vue"

export default {
  name: "App",
  data() {
    return {
      tasks: [],
    };
  },
  components: {
    GetTasks,
    PanelTasks,
  },
  methods: {
    saveNewTask(data) {
      this.tasks.push(data);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

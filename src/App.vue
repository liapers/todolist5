<template>
  <div id="app">
    <div class="container">
          <!-- @что-то используется, что отправить полученные данные в какую-либо функцию, в ланном случае начения инпутов в функции савньютаск -->
    <GetTasks @add-task="saveNewTask" />
    <!-- Вместо мапа используем v-for -->
    <div id="output" class="output-forms flex">
      <p class="title">Список задач</p>
  <PanelTasks v-for="(task, index) in tasks" :key="index" :task="task"/>
    </div>
   
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
*,
*::after,
*::before {
  box-sizing: inherit;
}

body{
    background-color: rgb(48, 20, 5);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
}

.flex {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.container {
  width: 1140px;
  margin: 0 auto;
  padding: 20px 0;
}

.title {
  margin: 0;
  align-self: center;
  font-weight: bold;
  font-size: 36px;
  margin-bottom: 30px;
  color:beige;
}

.output-form {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  background-color: beige;
  margin-bottom: 10px;
  border-radius: 10px;
  text-align: center;
}
.output-form:last-child {
  margin-bottom: 0;
}
</style>

<style>

</style>
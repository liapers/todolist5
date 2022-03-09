<template>
  <div class="container">
    <!-- @что-то используется, что отправить полученные данные в какую-либо функцию, в ланном случае начения инпутов в функции савньютаск -->
    <GetTasks @add-task="saveNewTask" />
    <!-- Вместо мапа используем v-for -->
    <div id="output" class="output-forms flex">
      <p class="title">Список задач</p>
      <div class="delete-form">
        <input
          v-model="search"
          type="text"
          id="search"
          class="search"
          placeholder="Поиск по имени задачи"
        />
        <button
          id="delete"
          class="item-form btn-form"
          v-on:click="removeTasks()"
        >
          Удалить все задачи
        </button>
      </div>
      <PanelTasks
        v-for="(task, index) in todosByTitle"
        :key="`${index}_${task.task}`"
        :task="task"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
import GetTasks from "./components/GetTasks.vue";
import PanelTasks from "./components/PanelTasks.vue";

export default {
  name: "App",
  data() {
    return {
      tasks: [],
      search: "",
      todos: [],
      isLoaded: false,
    };
  },
  components: {
    GetTasks,
    PanelTasks,
  },
  computed: {
    todosByTitle() {
      let obj = this.tasks;
      let newArray = [];
      const serach = this.search.toLowerCase();
      obj.forEach(function (obj) {
       let el = obj;
        if (el.task.toLowerCase().indexOf(serach) != -1) newArray.push(el);
      });
      return newArray;
    },
  },
  methods: {
    saveNewTask(data) {
      this.tasks.push(data);
      this.isLoaded = true;
    },
    removeTasks() {
      this.tasks = [];
    },
  },
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

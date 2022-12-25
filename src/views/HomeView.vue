<template>
  <div>
    <v-list
      flat
      subheader
      three-line
    >
      <v-col cols="12" sm="6">
        <v-text-field 
          v-model="taskTitle"
          @keypress.enter="saveTask"
          label="Task Title"
          outlined
          clearable
        />
      </v-col>

      <v-list-item-group
        multiple
        active-class=""
      >
        <div v-for="task, index in tasks" :key="index">
          <Task :task="task" />
        </div>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import Task from '@/components/Tasks/Task.vue';

  export default {
    name: 'Home',
    data() {
      return {
        taskTitle: '',
      }
    },
    computed: {
      tasks() {
        return this.$store.state.tasks;
      }
    },
    methods: {
      saveTask() {
        if (this.taskTitle.length) {
          const id = new Date().getTime() + this.tasks.length;
          const task = { id, title: this.taskTitle, isCompleted: false };
          this.$store.commit('addTask', task);

          this.taskTitle = '';
        }
      },
    },
    components: {
      Task
    },
  }
</script>

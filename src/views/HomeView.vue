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
        tasks: [
          { title: 'Go to Shopping', isCompleted: false },
          { title: 'Sleep', isCompleted: false },
        ],
      }
    },
    methods: {
      saveTask() {
        if (this.taskTitle.length) {
          const task = { title: this.taskTitle, isCompleted: false };
          this.tasks.push(task);
          
          this.taskTitle = '';
        }
      },
    },
    components: {
      Task
    },
  }
</script>

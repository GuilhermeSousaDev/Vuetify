<template>
  <div>
    <v-list
      flat
      subheader
      three-line
    >
      <v-subheader>General</v-subheader>

      <v-list-item-group
        v-model="settings"
        multiple
        active-class=""
      >
        <Task />
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
        settings: [],
      }
    },
    components: {
      Task
    },
  }
</script>

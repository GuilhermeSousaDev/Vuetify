<template>
    <div>
        <v-list-item
          :class="{ 'blue lighten-4': task.isCompleted }"
          @click="task.isCompleted = !task.isCompleted"
        >
          <template v-slot:default="{}">
            <v-list-item-action>
              <v-checkbox :input-value="task.isCompleted"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title 
                :class="{ 'text-decoration-line-through': task.isCompleted }"
              >
                {{ task.title }}
              </v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn icon @click.stop="() => deleteTask(task.id)">
                <v-icon color="red darken-2">mdi-trash-can</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider />
    </div>
</template>

<script>
export default {
    name: 'Task',
    props: ['task'],
    methods: {
      deleteTask(id) {
        this.$store.commit('removeTask', id);
      }
    }
}
</script>
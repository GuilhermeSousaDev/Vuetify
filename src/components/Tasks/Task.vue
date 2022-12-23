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
          </template>
        </v-list-item>
    </div>
</template>

<script>
export default {
    name: 'Task',
    props: ['task']
}
</script>
<template>
<div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          icon
        >
            <v-icon>
                mdi-dots-vertical
            </v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="item.action == 'edit' ? toggleEditModal() : deleteTask()"
        >
          <v-icon left>
            {{ item.icon }}
          </v-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <EditModal 
      v-if="isShowEditModal" 
      @closeModal="toggleEditModal" 
      :task="task"
    />
</div>
</template>

<script>
import EditModal from '../Modal/EditModal.vue';

export default {
    props: ['task'],
    components: { EditModal },
    data() {
      return {     
        isShowEditModal: false,
        items: [
          {  
              title: 'Edit', 
              icon: 'mdi-pencil', 
              action: 'edit',
          },
          { 
              title: 'Delete', 
              icon: 'mdi-trash-can',
              action: 'delete',
          },
        ],
      }
    },
    methods: {
      toggleEditModal() {
        this.isShowEditModal = !this.isShowEditModal;
      },
      deleteTask() {
        this.$store.commit('removeTask', this.task.id);
      }
    },
}
</script>

<style>
</style>
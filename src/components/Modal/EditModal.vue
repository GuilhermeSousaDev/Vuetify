<template>
    <div>
        <v-dialog v-model="dialog" persistent max-width="290">
            <v-card>
                <v-card-title class="text-h5">
                    Edit
                </v-card-title>
                <v-divider />
                <v-card-text class="pt-2">Title</v-card-text>
                <v-text-field 
                    class="px-3"
                    label="Title"
                    placeholder="Title"
                    outlined
                />
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-1" @click="$emit('closeModal')">
                        Cancel
                    </v-btn>
                    <v-btn color="green darken-1" @click="dialog = false">
                        Edit
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
  export default {
    name: 'EditModal',
    data() {
        return {
            dialog: true,
        }
    },
  }
</script>

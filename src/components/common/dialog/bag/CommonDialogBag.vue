<template>
  <v-dialog v-model="drawer" fullscreen transition="dialog-bottom-transition">
    <v-card>Basket content</v-card>
  </v-dialog>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'common-dialog-basket',
    computed: {
      drawer: {
        get(): boolean {
          return false;
        },
        set(newValue: boolean): void {
          console.log(newValue);
        },
      },
    },
  });
</script>

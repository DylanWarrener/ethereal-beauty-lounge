<template>
  <CommonDialog :drawer="drawer">
    <template #dialog-content>
      <v-card class="pa-4">
        <template #title>
          <v-card-item>
            <v-card-title class="text-center">
              Are you sure you want to delete?
            </v-card-title>
          </v-card-item>
        </template>
        <template #default>
          <v-divider class="py-2"></v-divider>
        </template>
        <template #actions>
          <CommonBtn text="no" @clicked="doNotDelete" />
          <v-spacer></v-spacer>
          <CommonBtn text="yes" @clicked="doDelete" />
        </template>
      </v-card>
    </template>
  </CommonDialog>
</template>

<script lang="ts">
  import { useRootStore } from '@/stores/root';

  export default defineComponent({
    name: 'common-dialog-delete-confirm',
    props: {
      drawer: { type: Boolean, required: true },
    },
    emits: {
      no: null,
      yes: null,
    },
    setup() {
      const rootStore = useRootStore();
      return { rootStore };
    },
    methods: {
      /* Events */
      doNotDelete(): void {
        this.$emit('no');
      },
      doDelete(): void {
        this.$emit('yes');
      },
    },
  });
</script>

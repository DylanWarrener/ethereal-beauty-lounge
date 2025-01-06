<template>
  <v-card class="bg-secondary-3">
    <template #title>
      <v-card-item>
        <v-card-title>{{ title }}</v-card-title>
        <v-card-subtitle v-if="subtitle">{{ subtitle }}</v-card-subtitle>
      </v-card-item>
    </template>
    <template #default>
      <v-divider></v-divider>
      <v-container style="border: 2px solid black">
        <v-row style="border: 2px solid red">
          <slot name="preferences-content"></slot>
        </v-row>
      </v-container>
      <v-divider></v-divider>
    </template>
    <template #actions>
      <v-spacer></v-spacer>
      <CommonBtn
        text="Update avatar"
        @clicked.stop="updateAvatar_clickHandler"
      />
      <CommonBtn text="Save" @clicked.stop="saveSettings_clickHandler" />
    </template>
  </v-card>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'section-account-preferences',
    props: {
      title: { type: String, required: true },
      subtitle: { type: String, required: false },
    },
    methods: {
      /* Events */
      updateAvatar_clickHandler(): void {},
      saveSettings_clickHandler(): void {},

      /* Utils */
      slotIsPopulated(slotName: string): boolean {
        return this.$slots[slotName] !== undefined;
      },
    },
  });
</script>

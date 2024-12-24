<template>
  <v-card class="bg-secondary-3">
    <template v-if="title && subtitle" #title>
      <v-card-item>
        <v-card-title v-if="title">{{ title }}</v-card-title>
        <v-card-subtitle v-if="subtitle">{{ subtitle }}</v-card-subtitle>
      </v-card-item>
    </template>
    <template #default>
      <v-divider></v-divider>
      <v-container>
        <v-row>
          <v-col>Content</v-col>
        </v-row>
      </v-container>
      <v-divider></v-divider>
    </template>
    <template #actions>
      <v-spacer></v-spacer>
      <CommonBtn text="Save" @clicked="" />
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
  });
</script>

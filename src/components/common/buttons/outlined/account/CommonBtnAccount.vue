<template>
  <v-hover>
    <template #default="{ isHovering, props }">
      <v-btn
        rounded="xl"
        variant="outlined"
        :class="btnClass(isHovering)"
        v-bind="props"
        @click="$emit('clicked')"
      >
        <span class="mr-2">{{ text }}</span>
        <v-icon :icon="icon"></v-icon>
      </v-btn>
    </template>
  </v-hover>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'common-btn-account',
    props: {
      class: { type: String, required: false },
      text: { type: String, required: true },
      icon: { type: String, required: true },
    },
    emits: ['clicked'],
    methods: {
      btnClass(isHovering: boolean | null): string[] {
        let retVal: string[] = [];
        if (this.class) {
          retVal.push(this.class);
        }
        if (isHovering) {
          retVal.push('text-accent-2');
        }
        return retVal;
      },
    },
  });
</script>

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
      btnLoginClass: { type: String, required: false },
      text: { type: String, required: true },
      icon: { type: String, required: true },
    },
    emits: ['clicked'],
    methods: {
      btnClass(isHovering: boolean | null): string[] {
        console.log('The class in btn account component: ', this.btnLoginClass);
        let retVal: string[] = [];
        if (this.btnLoginClass) {
          retVal.push(...this.btnLoginClass);
        }
        if (isHovering) {
          retVal.push('text-accent-2');
        }
        return retVal;
      },
    },
  });
</script>

<template>
  <v-btn
    rounded="xl"
    variant="flat"
    :icon="isIcon"
    :to="to"
    :size="size"
    :class="[`bg-cta text-default ${isIcon ? '' : 'px-4'}`, btnClass]"
    @click="clicked"
  >
    <span v-if="text" :class="btnTextClass">{{ text }}</span>
    <v-icon v-if="icon" :icon="icon" :class="[iconClass]"></v-icon>
  </v-btn>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'common-btn',
    props: {
      text: { type: String, required: false },
      to: { type: String, required: false },
      btnClass: { type: String, required: false },
      btnTextClass: { type: String, required: false },
      iconClass: { type: String, required: false },
      icon: { type: String, required: false },
      isIcon: { type: Boolean, required: false },
    },
    emits: {
      clicked: null,
    },
    computed: {
      size(): string | undefined {
        let retVal: string | undefined = undefined;
        if (this.$vuetify.display.lgAndUp) {
          retVal = 'large';
        }
        if (this.$vuetify.display.xlAndUp) {
          retVal = 'x-large';
        }
        return retVal;
      },
    },
    methods: {
      clicked(): void {
        this.$emit('clicked');
      },
    },
  });
</script>

<template>
  <v-btn
    rounded="xl"
    :variant="`${variant ? variant : 'flat'}`"
    :icon="isIcon"
    :to="to"
    :size="size"
    :class="[
      `${isIcon ? '' : 'px-4'}`,
      `${btnClass ? btnClass : 'bg-cta text-default'}`,
    ]"
    :style="btnStyle"
    @click="(e: any) => $emit('clicked', e)"
  >
    <span
      v-if="text"
      :class="`${btnTextClass ? btnTextClass : 'text-default'}`"
    >
      {{ text }}
    </span>
    <v-icon v-if="icon" :icon="icon" :class="[iconClass]"></v-icon>
  </v-btn>
</template>

<script lang="ts">
  type TVariant =
    | 'flat'
    | 'text'
    | 'elevated'
    | 'tonal'
    | 'outlined'
    | 'plain'
    | undefined;

  export default defineComponent({
    name: 'common-btn',
    props: {
      text: { type: String, required: false },
      to: { type: String, required: false },
      variant: { type: String as PropType<TVariant>, required: false },
      btnClass: { type: String, required: false },
      btnStyle: { type: String, required: false },
      btnTextClass: { type: String, required: false },
      iconClass: { type: String, required: false },
      icon: { type: String, required: false },
      isIcon: { type: Boolean, required: true, default: false },
    },
    emits: ['clicked'],
    computed: {
      /* Properties */
      size(): string {
        let retVal: string = 'default';
        if (this.isMobile) retVal = 'small';
        if (this.isTablet) retVal = 'default';
        if (this.isDisplayLargeAndUp) retVal = 'large';
        return retVal;
      },

      /* Data */
      isMobile(): boolean {
        return this.$vuetify.display.mobile;
      },
      isTablet(): boolean {
        return this.$vuetify.display.md;
      },
      isDisplayLargeAndUp(): boolean {
        return this.$vuetify.display.lgAndUp;
      },
      isDisplayExLargeAndUp(): boolean {
        return this.$vuetify.display.lgAndUp;
      },
    },
  });
</script>

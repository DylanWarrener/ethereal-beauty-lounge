<template>
  <v-select :density="selectDensity" :label="selectLabel">
    <template #chip>
      <CommonChip :label="chipLabel" />
    </template>
  </v-select>
</template>

<script lang="ts">
  import type { VSelect } from 'vuetify/components';

  type Density = VSelect['$props']['density'];

  export default defineComponent({
    name: 'common-select-input',
    props: {
      selectLabel: { type: String, required: true },
      chipLabel: { type: String, required: true },
      density: {
        type: String as PropType<Density>,
        required: false,
      },
    },
    computed: {
      /* Properties */
      selectDensity(): Density {
        if (this.density) return this.density;

        switch (this.$vuetify.display.name) {
          case 'xs':
            return 'compact';
          case 'sm':
          case 'md':
            return 'comfortable';
          case 'xl':
            return 'default';
        }
      },
    },
  });
</script>

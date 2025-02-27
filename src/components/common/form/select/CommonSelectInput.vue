<template>
  <v-select :density="selectDensity" :label="selectLabel">
    <template #chip>
      <CommonChip
        :class="['my-1', chipClass]"
        :color="chipColor"
        :label="chipLabel"
      />
    </template>
  </v-select>
</template>

<script lang="ts">
  import type { VSelect } from 'vuetify/components';

  type Density = VSelect['$props']['density'];

  export default defineComponent({
    name: 'common-select-input',
    props: {
      /* Select */
      selectLabel: { type: String, required: true },
      density: { type: String as PropType<Density>, required: false },

      /* Chip */
      chipClass: { type: String, required: false },
      chipLabel: { type: String, required: true },
      chipColor: { type: String, required: false },
    },
    emits: ['update:modelValue'],
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

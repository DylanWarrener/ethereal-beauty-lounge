<template>
  <v-rating
    readonly
    length="5"
    :color="ratingColor"
    :active-color="ratingActiveColor"
    :density="ratingDensity"
    :size="ratingSize"
    :model-value="rating"
  />
</template>

<script lang="ts">
  import {
    type TRatingDensity,
    type TRatingSize,
  } from '@/abstractions/types/elements';

  export default defineComponent({
    name: 'common-rating',
    props: {
      /* Default attributes */
      density: { type: String, required: false },
      size: { type: String, required: false },
      rating: { type: Number, required: true },
      color: { type: String, required: true },
      activeColor: { type: String, required: true },
    },
    computed: {
      /* CSS */
      ratingColor(): string {
        return this.color;
      },
      ratingActiveColor(): string {
        return this.activeColor;
      },
      ratingDensity(): TRatingDensity {
        let retVal: TRatingDensity;
        if (this.density) {
          retVal = this.density as TRatingDensity;
        } else {
          retVal = 'default';
        }
        return retVal;
      },
      ratingSize(): TRatingSize | number {
        let retVal: TRatingSize | number = 'default' as TRatingSize;
        if (typeof this.size === 'string') {
          retVal = this.size as TRatingSize;
        }
        if (typeof this.size === 'number') {
          retVal = this.size as number;
        }
        return retVal;
      },
    },
  });
</script>

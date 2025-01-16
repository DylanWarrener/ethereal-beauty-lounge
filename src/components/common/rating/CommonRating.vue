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
      size: {
        type: [String, Number], // Allow both String and Number at runtime
        required: false,
        validator: (value: unknown) => {
          // Add TypeScript-compatible runtime validation
          const validSizes: TRatingSize[] = [
            'x-small',
            'small',
            'large',
            'x-large',
          ];
          return (
            typeof value === 'number' ||
            (typeof value === 'string' &&
              validSizes.includes(value as TRatingSize))
          );
        },
      },
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
      ratingSize(): string | number {
        let retVal: string | number = 'default';
        if (typeof this.size === 'string') {
          retVal = this.size as string;
        }
        if (typeof this.size === 'number') {
          retVal = this.size as number;
        }
        return retVal;
      },
    },
  });
</script>

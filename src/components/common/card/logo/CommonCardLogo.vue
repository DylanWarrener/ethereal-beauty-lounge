<template>
  <v-card
    flat
    class="bg-white"
    :style="cardStyle"
    :to="cardRoute"
    :width="cardWidth"
    :height="cardHeight"
    min-width="150"
  >
    <v-img width="100%" height="100%" :src="imgSrc" :alt="imgAlt"></v-img>
  </v-card>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'common-card-logo',
    props: {
      cardStyle: { type: String, required: false },
      cardWidth: { type: String, required: false },
      cardHeight: { type: String, required: false, default: '100%' },
      cardRoute: { type: String, required: false },
      imgSrc: { type: String, required: false },
      imgAlt: { type: String, required: false },
      imgWidth: { type: String, required: false },
      imgHeight: { type: String, required: false },
    },
  });
</script>

<template>
  <SectionAccountPreferences
    :title="title"
    :subtitle="subtitle"
  ></SectionAccountPreferences>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'section-account-security-preferences',
    data() {
      return {
        security: {
          title: 'Security',
          subtitle: '',
        },
      };
    },
    computed: {
      /* Text */
      title(): string {
        return this.security.title;
      },
      subtitle(): string {
        return this.security.subtitle;
      },
    },
  });
</script>

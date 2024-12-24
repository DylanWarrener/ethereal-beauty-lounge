<template>
  <SectionAccountPreferences
    :title="title"
    :subtitle="subtitle"
  ></SectionAccountPreferences>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'section-account-profile-preferences',
    data() {
      return {
        profile: {
          title: 'Profile',
          subtitle: 'Subtitle',
        },
      };
    },
    computed: {
      /* Text */
      title(): string {
        return this.profile.title;
      },
      subtitle(): string {
        return this.profile.subtitle;
      },
    },
  });
</script>

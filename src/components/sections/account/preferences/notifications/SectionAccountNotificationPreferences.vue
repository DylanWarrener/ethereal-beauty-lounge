<template>
  <SectionAccountPreferences :title="title" :subtitle="subtitle">
    <template #preferences-content>Content</template>
  </SectionAccountPreferences>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'section-account-notification-preferences',
    data() {
      return {
        notifications: {
          title: 'Notifications',
          subtitle: '',
        },
      };
    },
    computed: {
      /* Text */
      title(): string {
        return this.notifications.title;
      },
      subtitle(): string {
        return this.notifications.subtitle;
      },
    },
  });
</script>

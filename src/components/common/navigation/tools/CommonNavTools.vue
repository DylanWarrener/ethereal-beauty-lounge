<template>
  <ClientOnly>
    <v-hover>
      <template #default="{ isHovering, props: hoverProps }">
        <v-tooltip location="bottom" text="Search">
          <template #activator="{ props: tooltipProps }">
            <v-btn
              icon
              v-bind="mergeProps(hoverProps, tooltipProps)"
              class="d-none d-md-flex"
            >
              <v-icon
                icon="$search"
                :class="[isHovering ? 'text-secondary' : '']"
              ></v-icon>
            </v-btn>
          </template>
        </v-tooltip>
      </template>
    </v-hover>
  </ClientOnly>
</template>

<script lang="ts">
  import { mergeProps } from 'vue';

  export default defineComponent({
    name: 'common-navigation-tools',
    methods: {
      mergeProps,
    },
  });
</script>

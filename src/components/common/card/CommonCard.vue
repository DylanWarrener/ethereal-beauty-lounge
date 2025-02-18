<template>
  <v-card
    :id="id"
    :class="cardClass"
    :style="cardStyle"
    :rounded="rounded"
    :elevation="elevation"
  >
    <slot name="card-transition"></slot>
    <v-container
      fluid
      :class="['h-100 d-flex flex-column', containerClass]"
      :style="`${containerStyle}`"
    >
      <!-- Toolbar -->
      <v-row
        v-if="slotIsPopulated(['card-toolbar'])"
        dense
        :class="['flex-shrink-1 flex-grow-0', toolbarRowClass]"
        :style="toolbarRowStyle"
      >
        <v-col :class="['pa-0', toolbarColClass]" :style="toolbarColStyle">
          <slot name="card-toolbar"></slot>
        </v-col>
      </v-row>

      <!-- Icon -->
      <v-row
        v-if="slotIsPopulated(['card-icon'])"
        dense
        :class="['flex-shrink-1 flex-grow-0', iconRowClass]"
        :style="`${iconRowStyle}`"
      >
        <v-col :class="['pa-0', iconColClass]" :style="`${iconColStyle}`">
          <slot name="card-icon"></slot>
        </v-col>
      </v-row>

      <!-- Image -->
      <v-row
        v-if="slotIsPopulated(['card-img'])"
        dense
        :class="['flex-shrink-0 flex-grow-1', imgRowClass]"
        :style="imgRowStyle"
      >
        <v-col :class="[imgColClass]" :style="imgColStyle">
          <slot name="card-img"></slot>
        </v-col>
      </v-row>

      <!-- Headings -->
      <v-row
        v-if="headingIsPopulated"
        dense
        :class="['flex-shrink-1 flex-grow-0', headingRowClass]"
        :style="`${headingRowStyle}`"
      >
        <v-col
          :cols="headingCols"
          :class="['pa-0', headingColClass]"
          :style="`${headingColStyle}`"
        >
          <v-card-item
            :class="['pa-0 text-wrap d-flex flex-column', headingClass]"
            :style="`${headingStyle}`"
          >
            <v-card-title
              v-if="titleIsPopulated"
              :tag="headingTitleTag"
              :class="['text-wrap', headingTitleClass]"
              :style="`${headingTitleStyle}`"
            >
              <slot name="card-title">{{ title }}</slot>
            </v-card-title>
            <v-card-subtitle
              v-if="subtitleIsPopulated"
              :tag="headingSubtitleTag"
              :class="['text-wrap', headingSubtitleClass]"
              :style="`${headingSubtitleStyle}`"
            >
              <slot name="card-subtitle">{{ subtitle }}</slot>
            </v-card-subtitle>
          </v-card-item>
        </v-col>
        <slot name="card-hero-img"></slot>
      </v-row>

      <!-- Content -->
      <v-row
        v-if="slotIsPopulated(['card-content'])"
        dense
        :class="['flex-shrink-1 flex-grow-1', contentRowClass]"
        :style="`${contentRowStyle}`"
      >
        <v-col :class="['pa-0', contentColClass]" :style="`${contentColStyle}`">
          <v-card-text
            :class="['pa-0', contentClass]"
            :style="`${contentStyle}`"
          >
            <slot name="card-content"></slot>
          </v-card-text>
        </v-col>
      </v-row>

      <!-- Actions -->
      <v-row
        v-if="slotIsPopulated(['card-actions'])"
        dense
        :class="[
          'ga-4 d-flex flex-shrink-1 flex-grow-0 align-center',
          actionRowClass,
        ]"
        :style="`${actionRowStyle}`"
      >
        <v-col
          cols="12"
          :class="['pa-0', actionColClass]"
          :style="`${actionColStyle}`"
        >
          <v-card-actions
            :class="['pa-0', actionClass]"
            :style="`${actionStyle}`"
          >
            <slot name="card-actions"></slot>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'common-card',
    props: {
      /* Text */
      title: { type: String, required: false },
      subtitle: { type: String, required: false },

      /* CSS */
      // v-card
      id: { type: String, required: false },
      rounded: { type: String, required: false },
      elevation: { type: String, required: false },
      cardClass: { type: String, required: false },
      cardStyle: { type: String, required: false },

      // v-container
      containerClass: { type: String, required: false },
      containerStyle: { type: String, required: false },

      // v-row
      toolbarRowClass: { type: String, required: false },
      toolbarRowStyle: { type: String, required: false },
      iconRowClass: { type: String, required: false },
      iconRowStyle: { type: String, required: false },
      imgRowClass: { type: String, required: false },
      imgRowStyle: { type: String, required: false },
      headingRowClass: { type: String, required: false },
      headingRowStyle: { type: String, required: false },
      contentRowClass: { type: String, required: false },
      contentRowStyle: { type: String, required: false },
      actionRowClass: { type: String, required: false },
      actionRowStyle: { type: String, required: false },

      // v-col
      toolbarColClass: { type: String, required: false },
      toolbarColStyle: { type: String, required: false },
      iconColClass: { type: String, required: false },
      iconColStyle: { type: String, required: false },
      imgColClass: { type: String, required: false },
      imgColStyle: { type: String, required: false },
      headingCols: { type: String, required: false },
      headingColClass: { type: String, required: false },
      headingColStyle: { type: String, required: false },
      titleColClass: { type: String, required: false },
      titleColStyle: { type: String, required: false },
      subtitleColClass: { type: String, required: false },
      subtitleColStyle: { type: String, required: false },
      contentColClass: { type: String, required: false },
      contentColStyle: { type: String, required: false },
      actionColClass: { type: String, required: false },
      actionColStyle: { type: String, required: false },

      // Content
      headingClass: { type: String, required: false },
      headingStyle: { type: String, required: false },
      headingTitleClass: { type: String, required: false },
      headingTitleStyle: { type: String, required: false },
      headingTitleTag: { type: String, required: false },
      headingSubtitleClass: { type: String, required: false },
      headingSubtitleStyle: { type: String, required: false },
      headingSubtitleTag: { type: String, required: false },
      contentClass: { type: String, required: false },
      contentStyle: { type: String, required: false },
      actionClass: { type: String, required: false },
      actionStyle: { type: String, required: false },
    },
    computed: {
      /* Data */
      isMobile(): boolean {
        return this.$vuetify.display.mobile;
      },
      headingIsPopulated(): boolean {
        return (
          !!this.title ||
          !!this.subtitle ||
          this.slotIsPopulated(['card-title']) ||
          this.slotIsPopulated(['card-subtitle'])
        );
      },
      titleIsPopulated(): boolean {
        return !!this.title || this.slotIsPopulated(['card-title']);
      },
      subtitleIsPopulated(): boolean {
        return !!this.subtitle || this.slotIsPopulated(['card-subtitle']);
      },
    },
    methods: {
      slotIsPopulated(name: string[]): boolean {
        return name.every(
          (slotName: string) => this.$slots[slotName] !== undefined
        );
      },
    },
  });
</script>

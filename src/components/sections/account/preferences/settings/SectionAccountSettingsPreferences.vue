<template>
  <SectionAccountPreferences :title="title" :subtitle="subtitle">
    <template #preferences-content>
      <!-- Avatar -->
      <v-col cols="12" class="d-flex flex-column justify-center align-center">
        <v-card
          width="128"
          height="128"
          rounded="circle"
          class="d-flex justify-center align-center"
        >
          <template #default>
            <span v-if="avatarInitials" class="text-h6">
              {{ avatarInitials }}
            </span>
          </template>
        </v-card>
      </v-col>

      <!-- Display name -->
      <v-col cols="12" style="border: 2px solid blue">
        <v-text-field
          v-model="settings.content.displayName.value"
          clearable
          variant="underlined"
          type="text"
          :label="settings.content.displayName.label"
          :rules="displayNameRules"
        ></v-text-field>
      </v-col>

      <!-- First name -->
      <v-col cols="12" style="border: 2px solid blue">
        <v-text-field
          v-model="settings.content.firstName.value"
          clearable
          variant="underlined"
          type="text"
          :label="settings.content.firstName.label"
          :rules="firstNameRules"
        ></v-text-field>
      </v-col>

      <!-- Last name -->
      <v-col cols="12" style="border: 2px solid blue">
        <v-text-field
          v-model="settings.content.lastName.value"
          clearable
          variant="underlined"
          type="text"
          :label="settings.content.lastName.label"
          :rules="lastNameRules"
        ></v-text-field>
      </v-col>

      <!-- Email -->
      <v-col cols="12" style="border: 2px solid blue">
        <v-text-field
          v-model="settings.content.email.value"
          clearable
          variant="underlined"
          type="text"
          :label="settings.content.email.label"
          :rules="emailRules"
        ></v-text-field>
      </v-col>

      <!-- Phone number -->
      <v-col cols="12" style="border: 2px solid blue">
        <v-text-field
          v-model="settings.content.phoneNumber.value"
          clearable
          variant="underlined"
          type="text"
          :label="settings.content.phoneNumber.label"
          :rules="phoneNumberRules"
        ></v-text-field>
      </v-col>
    </template>
  </SectionAccountPreferences>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'section-account-settings-preferences',
    data() {
      return {
        settings: {
          title: 'Settings',
          subtitle: '',
          content: {
            avatar: {
              background: '',
              text: 'DW',
            },
            displayName: {
              label: 'Display name',
              value: '',
            },
            firstName: {
              label: 'First name',
              value: '',
            },
            lastName: {
              label: 'Second name',
              value: '',
            },
            email: {
              label: 'Email',
              value: '',
            },
            phoneNumber: {
              label: 'Phone number',
              value: '',
            },
          },
        },
      };
    },
    computed: {
      /* Text */
      title(): string {
        return this.settings.title;
      },
      subtitle(): string {
        return this.settings.subtitle;
      },
      avatarInitials(): string {
        let retval: string = '';
        if (this.displayName_value.trim().length > 0) {
          const [firstname, lastname] = this.displayName.split(' ');
          retval = `${firstname[0]}${lastname[0]}`.toUpperCase();
        }
        return retval;
      },

      /* Validation */
      displayNameRules(): any[] {
        return [];
      },
      firstNameRules(): any[] {
        return [];
      },
      lastNameRules(): any[] {
        return [];
      },
      emailRules(): any[] {
        return [];
      },
      phoneNumberRules(): any[] {
        return [];
      },

      /* Data */
      displayName_value: {
        get(): string {
          return '';
        },
        set(state: string): void {
          this.
        },
      },
      firstName_value: {},
      lastName_value: {},
      email_value: {},
      phoneNumber_value: {},
    },
    methods: {},
  });
</script>

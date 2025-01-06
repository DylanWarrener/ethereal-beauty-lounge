<template>
  <SectionAccountPreferences :title="title" :subtitle="subtitle">
    <template #preferences-content>
      <!-- Avatar -->
      <v-col cols="12" class="d-flex flex-column justify-center align-center">
        <ClientOnly>
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
        </ClientOnly>
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
  import { useAuthStore } from '@/stores/auth';
  import { useFirestore } from '@/stores/firestore';

  export default defineComponent({
    name: 'section-account-settings-preferences',
    setup() {
      const authStore = useAuthStore();
      const fireStore = useFirestore();
      return { authStore, fireStore };
    },
    data(): any {
      return {
        settings: {
          title: 'Settings',
          subtitle: '',
          content: {
            input: {
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
                value: null,
              },
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
        // First and last name are required, so directly access the first characters
        const firstnameFirstLetter: string = this.firstname_value[0];
        const lastnameFirstLetter: string = this.lastname_value[0];
        return `${firstnameFirstLetter}${lastnameFirstLetter}`.toUpperCase();
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
      displayname_value: {
        get(): string {
          return this.authStore.get_user_displayName;
        },
        set(state: string): void {
          this.authStore.set_user_displayName(state);
        },
      },
      firstname_value: {
        get(): string {
          return this.fireStore.get_user_firstname;
        },
        set(state: string): void {
          this.fireStore.set_user_firstname(state);
        },
      },
      lastname_value: {
        get(): string {
          return this.fireStore.get_user_lastname;
        },
        set(state: string): void {
          this.fireStore.set_user_lastname(state);
        },
      },
      email_value: {
        get(): string {
          return this.authStore.get_user_displayName;
        },
        set(state: string): void {
          this.authStore.set_user_email(state);
        },
      },
      phoneNumber_value: {
        get(): number | null {
          return this.fireStore.get_user_phoneNumber;
        },
        set(state: number | null): void {
          this.fireStore.set_user_phoneNumber(state);
        },
      },
    },
    methods: {},
  });
</script>

<template>
  <CommonSectionMain :title="title" :subtitle="subtitle">
    <template #section-content>
      <v-container fluid>
        <v-row>
          <!-- Mobile side navigation -->
          <ClientOnly v-if="isMobile">
            <v-col cols="12">
              <v-sheet class="mx-auto bg-secondary-3">
                <v-slide-group mandatory>
                  <v-slide-group-item v-slot="{ isSelected }">
                    <v-btn
                      rounded
                      class="ma-2"
                      variant="outlined"
                      :color="isSelected ? 'accent' : undefined"
                      @click.stop="
                        account.content.selectedComponent =
                          'SectionAccountProfilePreferences'
                      "
                    >
                      <template v-slot:prepend>
                        <v-icon
                          :icon="account.navigation.profile.icon"
                        ></v-icon>
                      </template>
                      <template v-slot:default>
                        <span v-text="account.navigation.profile.text"></span>
                      </template>
                    </v-btn>
                    <v-btn
                      rounded
                      class="ma-2"
                      variant="outlined"
                      :text="account.navigation.security.text"
                      :color="isSelected ? 'accent' : undefined"
                      @click.stop="
                        account.content.selectedComponent =
                          'SectionAccountSecurityPreferences'
                      "
                    >
                      <template v-slot:prepend>
                        <v-icon
                          :icon="account.navigation.security.icon"
                        ></v-icon>
                      </template>
                    </v-btn>
                    <v-btn
                      rounded
                      class="ma-2"
                      variant="outlined"
                      :text="account.navigation.notifications.text"
                      :color="isSelected ? 'accent' : undefined"
                      @click.stop="
                        account.content.selectedComponent =
                          'SectionAccountNotificationsPreferences'
                      "
                    >
                      <template v-slot:prepend>
                        <v-icon
                          :icon="account.navigation.notifications.icon"
                        ></v-icon>
                      </template>
                    </v-btn>
                  </v-slide-group-item>
                </v-slide-group>
              </v-sheet>
            </v-col>
          </ClientOnly>

          <!-- Desktop side navigation -->
          <ClientOnly v-else>
            <v-col cols="3">
              <v-card>
                <v-list nav class="pl-1 bg-secondary-3">
                  <v-list-item
                    :title="account.navigation.profile.text"
                    :value="account.navigation.profile.value"
                    @click.stop="
                      account.content.selectedComponent =
                        'SectionAccountProfilePreferences'
                    "
                  >
                    <template #prepend>
                      <v-icon :icon="account.navigation.profile.icon"></v-icon>
                    </template>
                  </v-list-item>
                  <v-list-item
                    :title="account.navigation.security.text"
                    :value="account.navigation.security.value"
                    @click.stop="
                      account.content.selectedComponent =
                        'SectionAccountSecurityPreferences'
                    "
                  >
                    <template #prepend>
                      <v-icon :icon="account.navigation.security.icon"></v-icon>
                    </template>
                  </v-list-item>
                  <v-list-item
                    :title="account.navigation.notifications.text"
                    :value="account.navigation.notifications.value"
                    @click.stop="
                      account.content.selectedComponent =
                        'SectionAccountNotificationsPreferences'
                    "
                  >
                    <template #prepend>
                      <v-icon
                        :icon="account.navigation.notifications.icon"
                      ></v-icon>
                    </template>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </ClientOnly>

          <v-col cols="9">
            <component :is="account.content.selectedComponent"></component>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </CommonSectionMain>
</template>

<script lang="ts">
  import SectionAccountProfilePreferences from '@/components/sections/account/preferences/profile/SectionAccountProfilePreferences.vue';
  import SectionAccountSecurityPreferences from '@/components/sections/account/preferences/security/SectionAccountSecurityPreferences.vue';
  import SectionAccountNotificationsPreferences from '@/components/sections/account/preferences/notifications/SectionAccountNotificationPreferences.vue';

  export default defineComponent({
    name: 'section-account',
    components: {
      SectionAccountProfilePreferences,
      SectionAccountSecurityPreferences,
      SectionAccountNotificationsPreferences,
    },
    data(): any {
      return {
        account: {
          section: {
            title: 'Account',
            subtitle: 'Update your account settings here.',
          },
          navigation: {
            openedGroup: ['profile'],
            profile: {
              text: 'Profile',
              value: 'profile',
              icon: '$account',
            },
            security: {
              text: 'Security',
              value: 'security',
              icon: '$security',
            },
            notifications: {
              text: 'Notifications',
              value: 'notifications',
              icon: '$notifications',
            },
          },
          content: {
            selectedComponent: 'SectionAccountProfilePreferences',
          },
        },
      };
    },
    computed: {
      /* Text */
      title(): string {
        return this.account.section.title;
      },
      subtitle(): string {
        return this.account.section.subtitle;
      },

      /* Data */
      isMobile(): boolean {
        return this.$vuetify.display.smAndDown;
      },
    },
  });
</script>

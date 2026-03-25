<script setup lang="ts">
import Modal from '@/molecules/modal/Modal.vue'
import Button from '@/atoms/button/Button.vue'
import { ref } from 'vue'
import Loader from '@/atoms/loader/Loader.vue'
import { useAuth } from '@/helpers/useAuth'
import { delay } from '@/helpers/delay'
import FormField from '@/atoms/form-controls/form-field/FormField.vue'
import BaseInput from '@/atoms/form-controls/input/BaseInput.vue'
import BaseTextarea from '@/atoms/form-controls/textarea/BaseTextarea.vue'
import FileUploader from '@/atoms/form-controls/file-uploader/FileUploader.vue'
import VIcon from '@/atoms/icon/VIcon.vue'

const isOpen = defineModel<boolean>()
const isLoading = ref(false)

const handleSave = async () => {
  // isLoading.value = true
  // await delay(2000)
  // isOpen.value = false
  // isLoading.value = false
}
</script>

<template>
  <Modal v-bind="$attrs" v-model="isOpen">
    <template #header-center>
      <span class="modal-title">Edit your Profile</span>
    </template>
    <template #content>
      <div v-if="!isLoading" class="edit-profile">
        <form class="edit-profile-form" @submit.prevent="handleSave">
          <FormField class="edit-profile-form__field edit-profile-form__field_name">
            <template #label>Name</template>
            <BaseInput type="text" class="edit-profile-form__input" />
          </FormField>
          <FormField class="edit-profile-form__field edit-profile-form__field_username">
            <template #label>Username</template>
            <div class="edit-profile-form__username-wrapper">
              <span class="edit-profile-form__note">@</span
              ><BaseInput type="text" class="edit-profile-form__input" />
            </div>
          </FormField>
          <FormField class="edit-profile-form__field edit-profile-form__field_email">
            <template #label>Email</template>
            <div class="edit-profile-form__email-wrapper">
              <BaseInput type="text" class="edit-profile-form__input" />
              <span class="edit-profile-form__note">
                Add your email address to receive notifications about your activity on Foundation.
                This will not be shown on your profile.
              </span>
            </div>
          </FormField>
          <FormField class="edit-profile-form__field edit-profile-form__field_bio">
            <template #label>BIO</template>
            <BaseTextarea class="edit-profile-form__textarea" />
          </FormField>
          <FormField class="edit-profile-form__field edit-profile-form__field_profile-image">
            <template #label>Profile image</template>
            <FileUploader />
          </FormField>
          <FormField class="edit-profile-form__field edit-profile-form__field_contacts">
            <template #label>Contacts</template>
            <div class="contacts">
              <div class="contacts__item">
                <div class="contacts__icon">
                  <VIcon name="twitch" class="contacts__icon" />
                  <span class="contacts__name">Twitch</span>
                </div>
                <BaseInput type="text" class="edit-profile-form__input" />
              </div>
              <div class="contacts__item">
                <div class="contacts__icon">
                  <VIcon name="instagram" class="contacts__icon" />
                  <span class="contacts__name">Instagram</span>
                </div>
                <BaseInput type="text" class="edit-profile-form__input" />
              </div>
              <div class="contacts__item">
                <div class="contacts__icon">
                  <VIcon name="twitter" class="contacts__icon" />
                  <span class="contacts__name">Twitter</span>
                </div>
                <BaseInput type="text" class="edit-profile-form__input" />
              </div>
              <div class="contacts__item">
                <div class="contacts__icon">
                  <VIcon name="onlyfans" class="contacts__icon" />
                  <span class="contacts__name">Onlyfans</span>
                </div>
                <BaseInput type="text" class="edit-profile-form__input" />
              </div>
            </div>
          </FormField>
          <footer class="edit-profile-form__footer">
            <Button type="submit" class="edit-profile-form__action">Save changes</Button>
          </footer>
        </form>
      </div>
      <div v-else class="edit-profile__loader">
        <Loader />
      </div>
    </template>
  </Modal>
</template>

<style lang="scss" scoped>
.edit-profile {
  padding-top: 28px;
  padding-inline: 24px;

  &__loader {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-block: 25px;
  }

  :deep(.file-uploader) {
    height: 120px;
  }
}

.edit-profile-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 16px;
  row-gap: 24px;

  &__field {
    &_name {
    }
    &_username {
      .edit-profile-form__username-wrapper {
        display: flex;
        align-items: center;
      }

      .edit-profile-form__note {
        font-size: 16px;
        padding-left: 5px;
        padding-right: 12px;
      }
    }
    &_email {
      display: grid;
      grid-template-columns: subgrid;
      grid-column: 1 / -1;
      column-gap: inherit;

      .edit-profile-form__email-wrapper {
        display: grid;
        grid-template-columns: subgrid;
        grid-column: 1 / -1;
        align-items: center;
      }
      .edit-profile-form__note {
        font-size: 12px;
      }
    }
    &_bio {
      grid-column: 1/-1;
    }
    &_profile-image {
      grid-column: 1;
    }
    &_contacts {
      grid-column: 1/3;
    }
  }

  .contacts {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 10px;

    &__item {
      display: grid;
      grid-template-columns: subgrid;
      grid-column: 1 / 3;
    }
    &__icon {
      display: flex;
      align-items: center;
      gap: 6px;
    }
  }
  &__footer {
    grid-column: 1/-1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__note {
    font-family: var(--font-family);
    font-weight: 500;
    color: rgba(255, 255, 255, 0.5);
  }
}
</style>

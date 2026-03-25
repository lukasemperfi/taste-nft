<script setup lang="ts">
import Modal from '@/molecules/modal/Modal.vue'
import Button from '@/atoms/button/Button.vue'
import { ref } from 'vue'
import Loader from '@/atoms/loader/Loader.vue'
import FormField from '@/atoms/form-controls/form-field/FormField.vue'
import BaseInput from '@/atoms/form-controls/input/BaseInput.vue'
import BaseTextarea from '@/atoms/form-controls/textarea/BaseTextarea.vue'
import FileUploader from '@/atoms/form-controls/file-uploader/FileUploader.vue'
import VIcon from '@/atoms/icon/VIcon.vue'
import { delay } from '@/helpers/delay'

import { useForm, Field, ErrorMessage } from 'vee-validate'
import { editProfileSchema } from './edit-profile.schema'

const isOpen = defineModel<boolean>()
const isLoading = ref(false)

const { handleSubmit, errors } = useForm({
  validationSchema: editProfileSchema,
})

const handleSave = handleSubmit(
  async (values, { resetForm }) => {
    console.log('Form Submitted:', values)
    isLoading.value = true
    await delay(2000)
    resetForm()
    isOpen.value = false
    isLoading.value = false
  },
  () => {
    const errorElements = document.querySelectorAll('.error-message')

    if (errorElements.length > 0) {
      const firstError = errorElements[0]
      const parentField = firstError?.closest('.edit-profile-form__field')
      const input = parentField?.querySelector('input, textarea') as HTMLElement | null

      if (input) {
        input.focus()
        input.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  },
)
</script>

<template>
  <Modal v-bind="$attrs" v-model="isOpen">
    <template #header-center>
      <span class="modal-title">Edit your Profile</span>
    </template>
    <template #content>
      <div v-if="!isLoading" class="edit-profile">
        <form class="edit-profile-form" @submit="handleSave">
          <FormField class="edit-profile-form__field edit-profile-form__field_name">
            <template #label>Name</template>
            <Field name="name" v-slot="{ field }">
              <BaseInput
                v-bind="field"
                type="text"
                class="edit-profile-form__input"
                :error="!!errors.name"
              />
            </Field>
            <ErrorMessage name="name" class="error-message" />
          </FormField>

          <FormField class="edit-profile-form__field edit-profile-form__field_username">
            <template #label>Username</template>
            <div class="edit-profile-form__username-wrapper">
              <span class="edit-profile-form__note">@</span>
              <Field name="username" v-slot="{ field }">
                <BaseInput
                  v-bind="field"
                  type="text"
                  class="edit-profile-form__input"
                  :error="!!errors.username"
                />
              </Field>
            </div>
            <ErrorMessage name="username" class="error-message" />
          </FormField>

          <FormField class="edit-profile-form__field edit-profile-form__field_email">
            <template #label>Email</template>
            <div class="edit-profile-form__email-wrapper">
              <Field name="email" v-slot="{ field }">
                <BaseInput
                  v-bind="field"
                  type="text"
                  class="edit-profile-form__input"
                  :error="!!errors.email"
                />
              </Field>
              <span class="edit-profile-form__note">
                Add your email address to receive notifications about your activity on Foundation.
                This will not be shown on your profile.
              </span>
            </div>
            <ErrorMessage name="email" class="error-message" />
          </FormField>

          <FormField class="edit-profile-form__field edit-profile-form__field_bio">
            <template #label>BIO</template>
            <Field name="bio" v-slot="{ field }">
              <BaseTextarea
                v-bind="field"
                class="edit-profile-form__textarea"
                :error="!!errors.bio"
              />
            </Field>
            <ErrorMessage name="bio" class="error-message" />
          </FormField>

          <FormField class="edit-profile-form__field edit-profile-form__field_profile-image">
            <template #label>Profile image</template>
            <Field name="profileImage" v-slot="{ handleChange, value }">
              <FileUploader :model-value="value" @update:model-value="handleChange" />
            </Field>
            <ErrorMessage name="profileImage" class="error-message" />
          </FormField>

          <FormField class="edit-profile-form__field edit-profile-form__field_contacts">
            <template #label>Contacts</template>
            <div class="contacts">
              <div class="contacts__item">
                <div class="contacts__social">
                  <VIcon name="twitch" class="contacts__icon" />
                  <span class="contacts__name">Twitch</span>
                </div>
                <Field name="twitch" v-slot="{ field }">
                  <BaseInput v-bind="field" type="text" class="edit-profile-form__input" />
                </Field>
                <ErrorMessage name="twitch" class="error-message error-message_twitch" />
              </div>
              <div class="contacts__item">
                <div class="contacts__social">
                  <VIcon name="instagram" class="contacts__icon" />
                  <span class="contacts__name">Instagram</span>
                </div>
                <Field name="instagram" v-slot="{ field }">
                  <BaseInput v-bind="field" type="text" class="edit-profile-form__input" />
                </Field>
                <ErrorMessage name="instagram" class="error-message error-message_instagram" />
              </div>
              <div class="contacts__item">
                <div class="contacts__social">
                  <VIcon name="twitter" class="contacts__icon" />
                  <span class="contacts__name">Twitter</span>
                </div>
                <Field name="twitter" v-slot="{ field }">
                  <BaseInput v-bind="field" type="text" class="edit-profile-form__input" />
                </Field>
                <ErrorMessage name="twitter" class="error-message error-message_twitter" />
              </div>
              <div class="contacts__item">
                <div class="contacts__social">
                  <VIcon name="onlyfans" class="contacts__icon" />
                  <span class="contacts__name">Onlyfans</span>
                </div>
                <Field name="onlyfans" v-slot="{ field }">
                  <BaseInput v-bind="field" type="text" class="edit-profile-form__input" />
                </Field>
                <ErrorMessage name="onlyfans" class="error-message error-message_onlyfans" />
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
.error-message {
  color: #ff5e54;
  font-size: 12px;
  margin-top: 4px;
  font-family: var(--font-family);

  &_twitch,
  &_twitter,
  &_instagram,
  &_onlyfans {
    grid-column: 2;
  }
}

.edit-profile {
  padding-top: 34px;
  padding-inline: 24px;

  @media (max-width: globalBreakpoints.$breakpoint-xs) {
    padding: 12px;
  }

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

  @media (max-width: globalBreakpoints.$breakpoint-sm) {
    grid-template-columns: 1fr;
    column-gap: 0;
  }

  &__field {
    @media (max-width: globalBreakpoints.$breakpoint-sm) {
      grid-column: 1/-1;
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
    &__social {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    &__icon {
      @media (max-width: globalBreakpoints.$breakpoint-xs) {
        width: 18px;
        height: 18px;
      }
    }

    &__name {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 14px;
      color: #fff;
      font-size: clamp(12px, 1vw, 14px);
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

    @media (max-width: globalBreakpoints.$breakpoint-sm) {
      display: none;
    }
  }

  :deep(.file-uploader) {
    .file-uploader__dropzone,
    .file-uploader__card {
      @media (max-width: globalBreakpoints.$breakpoint-sm) {
        width: 100%;
      }
    }
  }
}
</style>

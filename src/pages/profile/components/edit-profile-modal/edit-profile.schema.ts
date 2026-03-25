import * as yup from 'yup'

export const editProfileSchema = yup.object({
  name: yup.string().required('Name is required').min(2, 'Too short'),
  username: yup.string().required('Username is required').min(3, 'Too short'),
  email: yup.string().required('Email is required').email('Invalid email'),
  bio: yup.string().max(200, 'Max 200 characters'),
  twitch: yup.string().url('Must be a valid URL').nullable(),
  instagram: yup.string().url('Must be a valid URL').nullable(),
  twitter: yup.string().url('Must be a valid URL').nullable(),
  onlyfans: yup.string().url('Must be a valid URL').nullable(),
  profileImage: yup
    .mixed<File>()
    .nullable()
    .test('fileType', 'Only images are allowed', (value) => {
      if (!value) return true
      return ['image/jpeg', 'image/png', 'image/webp'].includes(value.type)
    }),
})

export type EditProfileFormValues = yup.InferType<typeof editProfileSchema>

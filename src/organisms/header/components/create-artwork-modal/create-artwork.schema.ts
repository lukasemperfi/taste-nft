import * as yup from 'yup'

export const createArtworkStepSchemas = [
  yup.object({
    file: yup
      .mixed<File>()
      .required('File is required')
      .test('fileType', 'Only images are allowed', (value) => {
        if (!value) {
          return false
        }

        return ['image/jpeg', 'image/png', 'image/webp'].includes(value.type)
      }),
  }),
  yup.object({}),
  yup.object({
    name: yup.string().required('Name is required').min(3, 'Too short'),
    description: yup.string().required('Description is required'),
    copies: yup.number().required().min(1),
    minSum: yup.number().required().min(1, 'Amount must be greater than 0'),
  }),
]

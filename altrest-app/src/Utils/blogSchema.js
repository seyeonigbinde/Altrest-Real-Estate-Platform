import * as yup from 'yup'

const blogSchema = yup.object().shape({

  title: yup.string()
    .trim()
    .required('Title is required')
    .min(5, 'Title must be at least 5 characters long'),

  preview: yup.string()
    .trim()
    .required('Story preview is required')
    .max(450, 'Story preview must not exceeded 450 characters'),
  image: yup.string()
    .trim()
    .required('Upload the image of the story'),
  story: yup.string()
    .required('You have not added your story')
    .max(5000, 'Your story must not exceeded 5000 characters'),
})

export default blogSchema

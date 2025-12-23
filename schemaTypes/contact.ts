import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  preview: {
    prepare() {
      return {title: 'Contact'}
    },
  },
  fields: [
    defineField({
      name: 'metadata',
      title: 'Metadata',
      type: 'object',
      options: {collapsible: true},
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: (rule) => rule.required(),
            },
          ],
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      validation: (rule) => rule.required(),
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'other',
      title: 'Other ways to connect',
      type: 'object',
      options: {collapsible: true},
      validation: (rule) => rule.required(),
      fields: [
        defineField({
          name: 'title',
          title: 'title',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'mapLink',
          title: 'Map Link',
          type: 'url',
        }),
        defineField({
          name: 'phone',
          title: 'Phone',
          type: 'string',
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
        }),
      ],
    }),
  ],
})

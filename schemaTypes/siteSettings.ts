import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  preview: {
    prepare() {
      return {title: 'Settings'}
    },
  },
  fields: [
    defineField({name: 'siteTitle', type: 'string', title: 'Site Title'}),
    defineField({name: 'logo', type: 'image', title: 'Logo'}),
  ],
})

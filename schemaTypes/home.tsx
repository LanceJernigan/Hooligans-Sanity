import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
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
      name: 'hero',
      title: 'Hero',
      type: 'object',
      options: {collapsible: true, collapsed: false},
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'text',
          rows: 2,
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'subheading',
          title: 'Subheading',
          type: 'array',
          validation: (rule) => rule.required(),
          of: [
            {
              type: 'block',
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'object',
      options: {collapsible: true, collapsed: false},
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'text',
          validation: (rule) => rule.required(),
          rows: 2,
        }),
        defineField({
          name: 'content',
          title: 'Content',
          type: 'array',
          validation: (rule) => rule.required(),
          of: [
            {
              type: 'block',
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'onlineOrdering',
      title: 'Online Ordering',
      type: 'object',
      options: {collapsible: true, collapsed: false},
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'text',
          validation: (rule) => rule.required(),
          rows: 2,
        }),
        defineField({
          name: 'content',
          title: 'Content',
          type: 'array',
          validation: (rule) => rule.required(),
          of: [
            {
              type: 'block',
            },
          ],
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
      name: 'specials',
      title: 'Specials',
      type: 'object',
      options: {collapsible: true, collapsed: false},
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'text',
          validation: (rule) => rule.required(),
          rows: 2,
        }),
        defineField({
          name: 'subheading',
          title: 'Subheading',
          type: 'text',
          validation: (rule) => rule.required(),
          rows: 2,
        }),
        defineField({
          name: 'content',
          title: 'Content',
          type: 'array',
          validation: (rule) => rule.required(),
          of: [
            {
              type: 'block',
            },
          ],
        }),
        defineField({
          name: 'specialsList',
          title: 'Specials',
          type: 'array',
          of: [
            {
              type: 'object',
              preview: {
                select: {title: 'title'},
                prepare({title}) {
                  const letter = (title?.trim()?.[0] || 'S').toUpperCase()
                  const Media = () => (
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 6,
                        display: 'grid',
                        placeItems: 'center',
                        fontSize: 12,
                        opacity: 0.7,
                      }}
                    >
                      {letter}
                    </div>
                  )
                  return {title: title || 'Untitled special', media: Media}
                },
              },
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'text',
                  validation: (rule) => rule.required(),
                  rows: 2,
                }),
                defineField({
                  name: 'content',
                  title: 'Content',
                  type: 'array',
                  validation: (rule) => rule.required(),
                  of: [
                    {
                      type: 'block',
                    },
                  ],
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'favorites',
      title: 'Favorites',
      type: 'object',
      options: {collapsible: true, collapsed: false},
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'text',
          validation: (rule) => rule.required(),
          rows: 2,
        }),
        defineField({
          name: 'subheading',
          title: 'Subheading',
          type: 'text',
          validation: (rule) => rule.required(),
          rows: 2,
        }),
        defineField({
          name: 'content',
          title: 'Content',
          type: 'array',
          validation: (rule) => rule.required(),
          of: [
            {
              type: 'block',
            },
          ],
        }),
        defineField({
          name: 'favoritesList',
          title: 'Favorites',
          type: 'array',
          of: [
            {
              type: 'object',
              preview: {
                select: {
                  title: 'title',
                  media: 'image',
                  alt: 'image.alt',
                },
                prepare({title, media, alt}) {
                  return {
                    title: title || 'Untitled favorite',
                    media,
                  }
                },
              },
              fields: [
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
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'content',
                  title: 'Content',
                  type: 'array',
                  validation: (rule) => rule.required(),
                  of: [
                    {
                      type: 'block',
                    },
                  ],
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Home'}
    },
  },
})

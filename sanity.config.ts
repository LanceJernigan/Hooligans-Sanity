import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {deskStructure} from './structure/deskStructure'

const singletonTypes = new Set(['home', 'drinks', 'contact', 'siteSettings'])

export default defineConfig({
  name: 'default',
  title: 'Hooligans',

  projectId: 'fq9ez7n3',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: deskStructure,
    }),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (prev, ctx) => {
      if (singletonTypes.has(ctx.schemaType)) {
        return prev.filter((action) => !['duplicate'].includes(String(action)))
      }
      return prev
    },
  },
})

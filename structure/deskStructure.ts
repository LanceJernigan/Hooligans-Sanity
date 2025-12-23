import type {StructureResolver} from 'sanity/structure'

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home')
        .id('home')
        .child(S.document().schemaType('home').documentId('home')),

      S.listItem()
        .title('Drinks')
        .id('drinks')
        .child(S.document().schemaType('drinks').documentId('drinks')),

      S.listItem()
        .title('Contact')
        .id('contact')
        .child(S.document().schemaType('contact').documentId('contact')),

      S.divider(),

      S.listItem()
        .title('Settings')
        .id('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
    ])

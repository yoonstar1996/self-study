export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'mainPost',
      title: 'Main Post',
      type: 'reference',
      to: {type: 'post'},
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'mainPost.title',
    },
  },
}

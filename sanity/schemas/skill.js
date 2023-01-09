export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Skill title',
      type: 'string'
    },
    {
      name: 'progress',
      title: 'Progress',
      type: 'string',
      description: 'Skill progress grade',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    }
  ],

}

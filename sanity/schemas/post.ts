const bodyBlocks = [
  {
    title: 'Block',
    type: 'block',
    styles: [
      { title: 'Normal', value: 'normal' },
      { title: 'H1', value: 'h1' },
      { title: 'H2', value: 'h2' },
      { title: 'H3', value: 'h3' },
      { title: 'H4', value: 'h4' },
      { title: 'Quote', value: 'blockquote' },
    ],
    lists: [
      { title: 'Bullet', value: 'bullet' },
      { title: 'Numbered', value: 'number' },
    ],
    marks: {
      decorators: [
        { title: 'Strong', value: 'strong' },
        { title: 'Emphasis', value: 'em' },
        { title: 'Code', value: 'code' },
      ],
      annotations: [
        {
          title: 'Link',
          name: 'link',
          type: 'object',
          fields: [
            { name: 'href', title: 'URL', type: 'url' },
            { name: 'openInNewTab', title: 'Open in new tab', type: 'boolean', initialValue: true },
          ],
        },
      ],
    },
  },
  {
    type: 'image',
    options: { hotspot: true },
  },
  {
    title: 'Code block',
    name: 'codeBlock',
    type: 'object',
    fields: [
      {
        name: 'language',
        title: 'Language',
        type: 'string',
        options: {
          list: ['javascript', 'typescript', 'bash', 'css', 'html', 'json', 'jsx', 'tsx', 'python', 'php'],
        },
      },
      { name: 'code', title: 'Code', type: 'text', rows: 14 },
    ],
  },
  {
    title: 'Callout',
    name: 'callout',
    type: 'object',
    fields: [
      {
        name: 'tone',
        title: 'Tone',
        type: 'string',
        initialValue: 'tip',
        options: {
          list: [
            { title: 'Tip', value: 'tip' },
            { title: 'Important', value: 'important' },
            { title: 'Warning', value: 'warning' },
          ],
        },
      },
      { name: 'title', title: 'Title', type: 'string' },
      {
        name: 'body',
        title: 'Body',
        type: 'array',
        of: [
          {
            type: 'block',
            styles: [{ title: 'Normal', value: 'normal' }],
            marks: {
              decorators: [
                { title: 'Strong', value: 'strong' },
                { title: 'Emphasis', value: 'em' },
                { title: 'Code', value: 'code' },
              ],
            },
          },
        ],
      },
    ],
  },
]

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Short description for SEO and previews (150-160 characters recommended)',
      validation: (Rule: any) => Rule.max(200),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      validation: (Rule: any) => Rule.max(20),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'featured',
      title: 'Featured article',
      type: 'boolean',
      description: 'Pin this post as the featured article on the blog listing.',
      initialValue: false,
    },
    {
      name: 'body',
      title: 'Body (English)',
      type: 'array',
      of: bodyBlocks,
    },
    {
      name: 'body_es',
      title: 'Body (Spanish)',
      type: 'array',
      of: bodyBlocks,
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection: any) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}

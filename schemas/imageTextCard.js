export default {
  name: "imageTextCard",
  type: "object",
  title: "Image & Text Card",
  preview: {
    select: {
      title: "heading",
      media: "image",
    }
  },
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "content",
      type: "text",
      title: "Content",
    },
    {
      name: "image",
      type: "img",
      title: "Image",
    },
  ],
};

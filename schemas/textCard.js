export default {
  name: "textCard",
  type: "object",
  title: "Text Card",
  preview: {
    title: "heading",
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
      name: "link",
      type: "link",
      title: "Link",
    },
  ],
};

export default {
  name: "imageCard",
  type: "object",
  title: "Image Card",
  preview: {
    select: {
      title: "name",
      media: "image",
    }
  },
  fields: [
    {
      name: "name",
      type: "string",
      title: "Card Name",
    },
    {
      name: "image",
      type: "img",
      title: "Image",
    },
  ],
};

export default {
  name: "grid",
  type: "object",
  title: "Grid",
  preview: {
    select: {
      title: "name",
      media: "cards.0.image",
    },
  },
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      initialValue: "Grid",
    },
    {
      name: "cards",
      type: "array",
      title: "Cards",
      of: [
        { type: "imageCard" },
        { type: "textCard" },
        { type: "imageTextCard" },
      ],
      options: {
        layout: "grid",
      },
    },
  ],
};

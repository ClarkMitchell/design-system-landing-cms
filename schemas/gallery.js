export default {
  name: "gallery",
  type: "object",
  title: "Gallery",
  preview: {
    select: {
      title: "name",
      media: "images.0",
    },
  },
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      initialValue: "Gallery",
    },
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [
        {
          name: "image",
          type: "img",
          title: "Image",
        },
      ],
      options: {
        layout: "grid",
      },
    },
  ],
};

export default {
  name: "navigation",
  type: "document",
  title: "Navigation",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      name: "logo",
      type: "img",
      title: "Logo",
    },
    {
      name: "nav",
      type: "array",
      title: "Nav",
      of: [{ type: "link" }],
    },
  ],
};

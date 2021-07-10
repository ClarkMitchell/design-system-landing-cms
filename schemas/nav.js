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
      name: "inHero",
      type: "boolean",
      title: "Nav is within Hero Section.",
    },
    {
      name: "nav",
      type: "array",
      title: "Nav",
      of: [{ type: "link" }],
    },
  ],
  initialValue: {
    inHero: false
  }
};

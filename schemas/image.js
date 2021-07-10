export default {
  name: "img",
  type: "image",
  title: "Image",
  options: {
    hotspot: true,
    metadata: ["dimensions", "palette"],
  },
  fields: [
    {
      name: "altText",
      type: "string",
      title: "Alternative text",
      validation: (Rule) => Rule.required().min(3).max(120),
    },
  ],
};

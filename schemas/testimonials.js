export default {
  name: "testimonials",
  type: "object",
  title: "Testimonials",
  preview: {
    select: {
      title: "name",
      media: "testimonials.0.image",
    },
  },
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      initialValue: "Testimonials",
    },
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "testimonials",
      type: "array",
      title: "Testimonials",
      of: [
        {
          name: "testimonial",
          type: "testimonial",
          title: "Testimonial",
        },
      ],
    },
  ],
};

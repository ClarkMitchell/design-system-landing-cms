export default {
    name: "img",
    type: "image",
    title: "Image",
    fields: [
        {
            name: "altText",
            type: "string",
            title: "Alternative text",
            validation: (Rule) => Rule.required().min(3).max(120),
        },
    ],
}

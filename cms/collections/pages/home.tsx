const homeConfig = {
    label : 'Home',
    name: 'home',
    file: 'src/content/home.json',
    fields: [
        {
            label : "Hero section",
            name : "hero_section",
            widget: 'object',
            required: true,
            collapsed : true,
            fields: [
                {
                    label : "Title",
                    name : 'title',
                    widget : 'string'
                },
                {
                    label : "Description",
                    name : 'description',
                    widget : 'string'
                }
            ]
        }
    ]
};

export default homeConfig;
module.exports = {
    items: [
        {
            name: "NSA Disputes Management",
            id: "disputes",
            sectionClass: "disputes",
            content: require('./content-group/disputes'),
        },
        {
            name: "Differentiators",
            id: "differentiators",
            sectionClass: "diffs",
            content: require('./content-group/differentiators'),
        },
        {
            name: "Capabilities",
            id: "capabilities",
            sectionClass: "caps",
            content: require('./content-group/capabilities'),
        },
        {
            name: "NSA & IDR Process",
            id: "nsa",
            sectionClass: "nsa",
            content: require('./content-group/nsa'),
        },
        {
            name: "Resources",
            id: "resources",
            sectionClass: "resources",
            content: require('./content-group/resources'),
        },
    ]
}

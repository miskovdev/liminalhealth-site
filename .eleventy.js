module.exports = (eleventyConfig) => {
	const handlebars = require('handlebars')
	const MarkdownIt = require("markdown-it")

	eleventyConfig.setLibrary('hbs', handlebars)

	eleventyConfig.addHandlebarsHelper("jsonPrint", obj => JSON.stringify(obj, null, 2))
	eleventyConfig.addHandlebarsHelper("addOne", num => (num + 1))
	eleventyConfig.addHandlebarsHelper("eq", (a, b) => (a === b))
	eleventyConfig.addHandlebarsHelper("not", exp => !exp)
	eleventyConfig.addHandlebarsHelper("isFirst", a => a === 0)
	eleventyConfig.addHandlebarsHelper("isNotEmpty", a => a !== '')
	eleventyConfig.addHandlebarsHelper("hasMenu", item => item.submenu?.length > 0);
	eleventyConfig.addHandlebarsHelper("groupPartial", id => 'content-group/' + id);
	eleventyConfig.addHandlebarsHelper("wrapParagraph", text => {
		let rows = text.trim().split(/\r?\n/);
		return rows.map(element => "<p>" + element + "</p>").join("\n")
	});

	const mdRender = new MarkdownIt();
	eleventyConfig.addFilter("renderMarkdown", function(rawString) {
		return mdRender.render(rawString);
	});

	eleventyConfig.addPassthroughCopy('assets')
	eleventyConfig.addPassthroughCopy('js')
	eleventyConfig.addPassthroughCopy('css')
	eleventyConfig.addPassthroughCopy('images')
	eleventyConfig.setUseGitIgnore(false);

	return {
		dir: {
			input: './',
			includes: 'includes'
		},
		passthroughFileCopy: true
	}
}

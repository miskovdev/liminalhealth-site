# Liminal Health site

---

### Based on 11ty, static-site generator

Requirements:
- NodeJS v16+ (<https://nodejs.org>)
- NPM v8+

## Setup environment

Run powershell or terminal in the project folder and run

    `npm install`

After packages installation you'll be able to:

**Edit and see results with live reload in your browser by running**

    npm run dev

**Build whole project**

    npm run build

All built files are located in the `_site` directory and ready to deploy.

## Change data

All data are in js format, which allows user to edit and add data easily. Separated files are located in `_data` directory.

## Edit layout

All layout partials can be found in `includes` directory. The main layout file which consists of html document base and sections structure is `includes/layout-default.hbs`.

## Built with

More information on how to support and edit project files you can find here:
- 11ty (<https://www.11ty.dev/docs>)
- Handlebars (<https://handlebarsjs.com/guide/>)

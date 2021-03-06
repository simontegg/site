const glob = require('glob')
const fs = require('fs')
const md = require('markdown-it')()
  .use(require('markdown-it-attrs'))
  .use(require('markdown-it-header-sections'))
const path = require('path')
const template = require('./template')

glob.sync('./writings/*.md').forEach(file => {
  const name = file.split('/')[2].split('.')[0]
  const markdown = fs.readFileSync(file, 'utf8')
  const html = md.render(markdown)

  fs.writeFileSync(path.join(__dirname, `${name}.html`), template(html))
})






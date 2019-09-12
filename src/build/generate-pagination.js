var glob = require("glob")
var fs = require('fs');

glob("./src/assets/posts/pt/*.md", function (er, files) {
  files = files.map(function (i) {
    var arr = i.split('/')
    return arr[arr.length - 1].split('.')[0]
  })
  files.sort((a, b) => parseInt(a) - parseInt(b))

  var perPage = 5

  var paginator = {
    lastPage: Math.ceil(files.length / perPage)
  }

  fs.writeFileSync("./src/assets/pagination/paginator.json", JSON.stringify(paginator));


  var page = [];
  var c = 1;
  for (var i = files.length - 1; i > -1; i--) {

    var content = fs.readFileSync('./src/assets/posts/pt/' + files[i] + '.md', 'utf8');

    var lines = content.split('\n').filter(function (e) {
      return e !== ''
    })

    var title = lines[0].split('# ')[1]
    var preview = lines[1] + '\n\n' + lines[2]

    var partial = {
      'title': {
        'pt': title
      },
      'preview': {
        'pt': preview,
      },
      timestamp: files[i]
    }

    for (let lang of ['en', 'es']) {
      try {
        var content = fs.readFileSync('./src/assets/posts/' + lang + '/' + files[i] + '.md', 'utf8');

        var lines = content.split('\n').filter(function (e) {
          return e !== ''
        })

        var title = lines[0].split('# ')[1]
        var preview = lines[1] + '\n\n' + lines[2]

        partial.title[lang] = title
        partial.preview[lang] = preview
      } catch (e) {
        console.log('post ' + files[i] + ' does not exists for lang: ' + lang)
      }
    }

    page.push(partial)

    if (page.length === 5 || i === 0) {
      fs.writeFileSync("./src/assets/pagination/page_" + c + ".json", JSON.stringify(page));
      page = []
      c++
    }
  }

})

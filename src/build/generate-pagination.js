var glob = require("glob")
var fs = require('fs');

glob("./static/posts/pt/*.md", function (er, files) {
  const slugify = text => {
    // Use hash map for special characters
    let specialChars = {"à":'a',"ä":'a',"á":'a',"â":'a',"æ":'a',"å":'a',"ë":'e',"è":'e',"é":'e', "ê":'e',"î":'i',"ï":'i',"ì":'i',"í":'i',"ò":'o',"ó":'o',"ö":'o',"ô":'o',"ø":'o',"ù":'o',"ú":'u',"ü":'u',"û":'u',"ñ":'n',"ç":'c',"ß":'s',"ÿ":'y',"œ":'o',"ŕ":'r',"ś":'s',"ń":'n',"ṕ":'p',"ẃ":'w',"ǵ":'g',"ǹ":'n',"ḿ":'m',"ǘ":'u',"ẍ":'x',"ź":'z',"ḧ":'h',"·":'-',"/":'-',"_":'-',",":'-',":":'-',";":'-'};

      return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/./g,(target, index, str) => specialChars[target] || target) // Replace special characters using the hash map
        .replace(/&/g, '-and-')         // Replace & with 'and'
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');             // Trim - from end of text
  };

  files = files.map(function (i) {
    var arr = i.split('/')
    return arr[arr.length - 1].split('.')[0]
  })
  files.sort((a, b) => parseInt(a) - parseInt(b))

  var perPage = 5

  var paginator = {
    lastPage: Math.ceil(files.length / perPage)
  }

  fs.writeFileSync("./static/pagination/paginator.json", JSON.stringify(paginator));

  var page = [];
  var c = 1;
  for (var i = files.length - 1; i > -1; i--) {

    var content = fs.readFileSync('./static/posts/pt/' + files[i] + '.md', 'utf8');

    var lines = content.split('\n').filter(function (e) {
      return e !== ''
    })

    var title = lines[0].split('# ')[1]
    var preview = lines[1] + '\n\n' + lines[2]
    var slug = ''

    var partial = {
      'title': {
        'pt': title
      },
      'preview': {
        'pt': preview,
      },
      postId: {
        'pt': files[i] + '-' + slugify(title)
      },
      timestamp: files[i]
    }

    for (let lang of ['en', 'es']) {
      try {
        var content = fs.readFileSync('./static/posts/' + lang + '/' + files[i] + '.md', 'utf8');

        var lines = content.split('\n').filter(function (e) {
          return e !== ''
        })

        var title = lines[0].split('# ')[1]
        var preview = lines[1] + '\n\n' + lines[2]

        partial.title[lang] = title
        partial.preview[lang] = preview
        partial.postId[lang] = files[i] + '-' + slugify(title)
      } catch (e) {
        console.log('post ' + files[i] + ' does not exists for lang: ' + lang)
      }
    }

    page.push(partial)

    if (page.length === 5 || i === 0) {
      fs.writeFileSync("./static/pagination/page_" + c + ".json", JSON.stringify(page));
      page = []
      c++
    }
  }

})

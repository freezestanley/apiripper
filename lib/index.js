#!/usr/bin/env node
const execSh = require("exec-sh"),
path = require("path"),
argv = process.argv,
cwd = process.cwd(),
fs = require('fs')

// init
if (argv[2] == 'init') {
function init (name = 'page', param = '-d', datapath = './doc') {
if (!param || !path || param != '-d') {
  console.warn('need param & path')
  return
}
var git = 'git clone https://github.com/freezestanley/apitest.git ' + name
execSh(git, { cwd }, function(err){
    if (err) {
      console.log("Exit code: ", err.code);
    }
    let confpath = path.join(cwd, name, './config/api.conf.json')
    fs.writeFileSync(confpath, JSON.stringify({
      docpath: path.join('../../', datapath)
    }))
    execSh("npm i", { cwd: path.join(cwd, '/' + name) }, function(err){
      if (err) {
        console.log("Exit code: ", err.code);
      }
      console.log(`cd ${name} && npm start`)
    })
  })
}
  init(argv[3], argv[4], argv[5])
}
// var target = './doc/page'
// var doc = './doc/page'
// var argv = process.argv

// if (argv[2] == 'build') {
//   if (process.argv.length == 5) {
//     if (process.argv[3] == '-t') {
//       target = process.argv[4]
//     } else if (process.argv[3] == '-d') {
//       doc = process.argv[4]
//     }
//   } else if (process.argv.length == 7) {
//     if (process.argv[3] == '-t') {
//       target = process.argv[4]
//       doc = process.argv[6]
//     } else if (process.argv[3] == '-d') {
//       doc = process.argv[4]
//       target = process.argv[6]
//     }
//   }
//   process.env.API_DOC = doc
//   process.env.API_OUTPUT = target
//   process.env.API_PATH = process.cwd()
//   execSh("npm run build", { cwd: path.join(__dirname, '../')}, function(err){
//     if (err) {
//       console.log("Exit code: ", err.code);
//     }
//   })
// } else {
//   process.env.API_DOC = doc
//   process.env.API_OUTPUT = target
//   process.env.API_PATH = process.cwd()
//   execSh("npm start", { cwd: path.join(__dirname, '../')}, function(err){
//     if (err) {
//       console.log("Exit code: ", err.code);
//     }
//   })
// }


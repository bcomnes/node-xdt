var xdt = require('../')

var options = {
  src: 'Web.config',
  dest: 'Out.config',
  transform: 'Web.Debug.config'
}

xdt(options, function (err) {
  if (err) throw err
  console.log('done')
})

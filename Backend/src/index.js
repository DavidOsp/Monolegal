require('./conexionDB')
const app = require('./app')

app.listen(app.get('port'))

console.log("server en puerto", app.get('port') );
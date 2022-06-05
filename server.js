require('dotenv').config()
const app = require('./app')
const conexionBD = require('./db/mongodb')
const {appConfig, db} = require('./config')

async function initApp(appConfig,db){
try{
await conexionBD(db)
app.listen(appConfig.port || 3000, ()=> console.log(`levantando servidor en ${appConfig.port}`))
 }catch(e){
     console.error(e)
     process.exit(0)
 }
}
 initApp(appConfig, db)
const mongoose = require('mongoose')

mongoose.connection.on('open', ()=> console.log('la base de datos esta conectada') )

async function conexionBD({host, port, db_name}){
    const URI = `mongodb://${host}:${port}/${db_name}`
    await mongoose.connect(URI, {useNewUrlParser:true, useUnifiedTopology: true,  useCreateIndex: true})
}
module.exports = conexionBD
const mongoose = require('mongoose')
const {appConfig}=require('../config')
const Schema = mongoose.Schema
const ImageSchema = Schema({
    titulo: String,
    imagenUrl: String,
    usuario: String,
})

ImageSchema.methods.setImgUrl = function setImgUrl(filename){
   const {host, port} = appConfig
   this.imagenUrl = `${host}:${port}/public/${filename}`
}       

module.exports = mongoose.model('Image', ImageSchema)
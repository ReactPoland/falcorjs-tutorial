import mongoose from 'mongoose';

const conf = {
  hostname: process.env.MONGO_HOSTNAME || 'localhost',
  port: process.env.MONGO_PORT || 27017,
  env: process.env.MONGO_ENV || 'local',
};

mongoose.connect(`mongodb://${conf.hostname}:${conf.port}/${conf.env}`);

var descriptionSchema = {
  descriptionTitle:String,
  descriptionContent:String
}

var FalcorDescription = mongoose.model('FalcorDescription', descriptionSchema, 'descriptions');

export default {
  FalcorDescription
}
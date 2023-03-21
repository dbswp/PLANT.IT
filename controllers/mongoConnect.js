const { MongoClient, ServerApiVersion } = require('mongodb');

const uri =
  'mongodb+srv://songsubin:thdtnqls1004@cluster0.ntbfxlb.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;

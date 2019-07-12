const mongoose = require('mongoose');

const { log } = require('./logConfig');
const { msg } = require('@/lib/messages');

const { env } = process;

const {
  DBUSER: dbuser,
  DBPASS: dbpass,
  DBHOST: dbhost,
  DBPARAM: dbparam,
} = env;

const dburi = `mongodb+srv://${dbuser}:${dbpass}@${dbhost}/${dbparam}`;

const conection = mongoose.connect(
  dburi,
  { useNewUrlParser: true },
).then(
  () => (log().info(msg.db.ok)),
).catch(
  err => (log().error(msg.db.nook, err)),
);

const connectDB = () => conection;


module.exports = {
  connectDB,
};

import {mongoose} from 'mongoose';

// connect to database mongoDB
const connect = mongoose.connect('mongodb://localhost:27017/employees_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default connect;

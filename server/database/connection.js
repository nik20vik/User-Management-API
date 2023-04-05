const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");

const connectDB = async () => {
  try {
    // mongodb connection string
    const con = await mongoose.connect(process.env.MONGO_URI, {
      /*  Stop warnings in the console when we use mongodb connection 
          but in updated versions no longer used ----
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true
      */
    });

    console.log(`MongoDB connected: ${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

// Exporting the function
module.exports = connectDB;

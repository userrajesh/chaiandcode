// require ('dotenv').config({path:'./env'})
import connectDB from "./src/db/index.js";
connectDB()
 


 



/*(async () => {
  try {
    mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on('error',(error)=>{
        console.log("Error",error);
        throw error;
    })

    app.listen(process.env.PORT,()=>{
        console.log(`app is running on port ${process.env.PORT}`);
    })
    
  } catch (err) {
    console.error("ERROR: ", err);
    throw err;
  }
})(); //IFE FUNCTION EXECUTES IMMEDIATELY
*/
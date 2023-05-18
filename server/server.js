const express = require("express");
const app = express();
    
require("./config/mongoose.config"); // calling the mongoose.config file and running the connect function
    
// Middleware to handle POST requests
app.use(express.json(), express.urlencoded({ extended: true }));
    

const CseUserRoutes = require("./routes/cseuser.routes");
CseUserRoutes(app);
    
app.listen(8000, () => console.log("The server live and running on PORT 8000 :  http://localhost:8000/"));

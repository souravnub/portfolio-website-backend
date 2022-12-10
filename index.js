const express = require("express");
const dotenv = require("dotenv");
const connectToMongo = require("./db");
const cors = require("cors");

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("welcome to contact api for sourav's portfolio");
});
app.use("/contact", require("./routes/contacts"));

let listenToPort = () => {
    app.listen(port, (err) => {
        if (err) {
            return console.log(
                `ERROR : while listening to app \n err : ${err}`
            );
        }
        console.log(
            `listning on port ${
                process.env.PORT ? port : `http://localhost:${port}`
            }`
        );
    });
};

let start = async () => {
    try {
        await connectToMongo(process.env.MONGO_URI);
        console.log("connected to DB");
        listenToPort();
    } catch (err) {
        console.log(`ERROR : while connecting to DB \n err : ${err}`);
    }
};

start();

import express from "express"
import ejs from 'ejs'
import graphqlHTTP from "express-graphql";

import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
require('dotenv').config()
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);
const app = express();

import schema from "./schema";
import seed from "./seed.js";
import runCron from "./cron.js";
// allow cross-origin requests
app.use(cors());

app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(express.static("public"));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Authorization, Content-Type, Accept"
    );
    next();
});
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true
});



mongoose.connection.once("open", () => {
    console.log("conneted to database");
    seed();

});

// bind express with graphql
app.get("/", (req, res) => {
    res.json({
        message: process.env.APP_NAME + " Api docs."
    });
});

// require("./schema/file/media.js")(app);
// require("./schema/file/media.js")(app);


app.use(
    "/graphql", graphqlHTTP({
        schema,
        graphiql: true
    })
);

app.listen(process.env.PORT, () => {
    runCron();
    console.log("now listening for requests on port 4000");
});

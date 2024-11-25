const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");


const MONGO_URL = "mongodb://127.0.0.1:27017/wandernest";

async function main() {
    await mongoose.connect(MONGO_URL);
}

main()
    .then(() => {
    console.log("connected");
    })
    .catch((err) => {
    console.log(err);
});

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((ob) => ({...ob, 
        owner:"673999c5cea1ac3b133297df",
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialised");
}

initDB();
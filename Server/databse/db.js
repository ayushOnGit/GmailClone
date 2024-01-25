const mongoose = require('mongoose');

const Connections = async () => {
    const DB_URI = `mongodb://gmailClone:7291019063@ac-spnm3qa-shard-00-00.f550bnp.mongodb.net:27017,ac-spnm3qa-shard-00-01.f550bnp.mongodb.net:27017,ac-spnm3qa-shard-00-02.f550bnp.mongodb.net:27017/?ssl=true&replicaSet=atlas-k2h3ce-shard-0&authSource=admin&retryWrites=true&w=majority`; // Your MongoDB connection URI
    try {
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,  
        });
        console.log('Database is Connected ............');
    } catch (error) {
        console.error('Error in Connection', error.message);
    }
};

module.exports = Connections;

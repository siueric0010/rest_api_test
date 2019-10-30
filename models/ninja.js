const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema = strcture, Collection = Model

//create ninja Schema & model
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name field is required"] // nane field is required is inc acse it doesn't work
    },
    rank: {
        type: String, 
    },
    available: {
        type: Boolean,
        default: false
    }

    // add in geo location
});

const Ninja = mongoose.model('ninja', NinjaSchema) // 'ninja' = collection name (there are ninjas)

module.exports = Ninja; // Export model for use in files
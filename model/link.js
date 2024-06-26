// mappingModel.js

// Import mongoose
const mongoose = require('mongoose');

// Define the schema
const mappingSchema = new mongoose.Schema({
  from: { type: String, required: true }, // Define 'a' as a required string field
  to: { type: String, required: true }  // Define 'b' as a required string field
});

mongoose.models = {};
// Create the model
const Mapping = mongoose.model('Mapping', mappingSchema);

// Export the model
module.exports = Mapping;

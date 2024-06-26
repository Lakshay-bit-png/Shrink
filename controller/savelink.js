const { v4: uuidv4 } = require('uuid');
const Mapping = require('../model/link');

exports.createMapping = async (req, res) => {
    if (req.method === "POST") {
        const { to } = req.body;

        try {
            const present = await Mapping.findOne({to:to})
            if(present){
                res.status(200).json({ success: true, message: "Successfully saved", data: present });
                return;
            }
            // Create a new instance of Mapping model
            const mapping = new Mapping({
                from: uuidv4().split('-')[0].substring(0, 5), // Generate unique UUID for 'from' field
                to: to
            });

            // Save the mapping to MongoDB
            await mapping.save();

            // Respond with success message and saved data
            res.status(200).json({ success: true, message: "Successfully saved", data: mapping });
        } catch (error) {
            console.error('Error saving mapping:', error);
            res.status(500).json({ success: false, message: "Failed to save mapping" });
        }
    } else {
        res.status(400).json({ success: false, message: "Method not allowed" });
    }
};



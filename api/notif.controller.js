const formidable = require('formidable');
class KassaController {KassaController
    constructor() {
        this.data = []; // Initialize the data array in the constructor
    }
    notif = async (req, res, next) => {
        const form = new formidable.IncomingForm();
  
        form.parse(req, (err, fields, files) => {
        if (err) {
          res.status(400).json({ error: 'An error occurred while parsing form data.' });
          return;
        }

        // Process form data and files as needed
        console.log('Form Fields:', fields);
        console.log('Uploaded Files:', files);
        console.log('bruh')
        this.data.push({})

        res.status(200).json({ message: 'Form data received successfully.' });
        })
        
        
    }
    getData = async (req, res, next) => {
        res.json(this.data)
    }
    success = async (req, res, next) => {
        res.json("success")
    }
    failure = async (req, res, next) => {
        res.json("failure")
    }
}

module.exports = new KassaController()
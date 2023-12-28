const formidable = require('formidable');
// const freekassa = require('@alex-kondakov/freekassa').init()
const { LavaApi } = require('lava-business');

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

    generate = async (req, res, next) => {
        const SHOPID = "abc-avc", // Идентификатор проекта
        SECRETKEY = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", // Секретный ключ
        ADDITIONALKEY = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"; // Дополнительный ключ

        const lavaApi = new LavaApi(
            SHOPID,
            SECRETKEY,
            ADDITIONALKEY,
        );

        lavaApi.createInvoice({
            shopId: 'a-b-c', // Optional if specified in lavaApi
            sum: 300,
            orderId: new Date().getTime(), // nique payment identifier in merchant system
        });

        // (async () => {
        //     await freekassa.create()
        //         .then(response => res.json(response))
        // })()
    }
}

module.exports = new KassaController()
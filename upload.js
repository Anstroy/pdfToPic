const axios = require('axios').default
const fs = require('fs')
const FormData = require('form-data'); // npm install --save form-data

const form = new FormData();

const request_config = {
    headers: {
        "Content-Type": "multipart/form-data"
    }
};

async function init() {
    const file = await fs.createReadStream(__dirname + '/file.txt')
    form.append('files', file);
    await axios.post('http://localhost:1337/upload', form, request_config)
        .then(() => console.log('it worked'))
        .catch(err => console.log('ERROR', err));
}

init()
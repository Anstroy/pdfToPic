const path = require('path');
const pdf = require('pdf-poppler');

let file = 'file.pdf'

let opts = {
    format: 'jpeg',
    out_dir: path.dirname(file),
    out_prefix: 'file',
    page: null
}

pdf.convert(file, opts)
    .then(res => {
        console.log('res', res)
        console.log('Successfully converted');
    })
    .catch(error => {
        console.error(error);
    })
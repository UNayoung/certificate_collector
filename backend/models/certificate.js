const mongoose = require('mongoose');
const mongooseAutoInc = require('mongoose-auto-increment');

mongoose.set('useCreateIndex', true);

const Schema = mongoose.Schema;

const CertificateSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    source: {
        type: String,
        required: false,
    },
    year: {
        type: String,
        required: false,
    },
    field: {
        type: String,
        required: false,
    },
});

CertificateSchema.plugin(mongooseAutoInc.plugin, 'certificate');

module.exports = mongoose.model('certificate', CertificateSchema);

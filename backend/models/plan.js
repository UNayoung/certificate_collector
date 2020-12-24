const mongoose = require('mongoose');
const mongooseAutoInc = require('mongoose-auto-increment');

mongoose.set('useCreateIndex', true);

const Schema = mongoose.Schema;

const PlanSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: false,
    },
    tips: {
        type: String,
        required: false,
    },
    field: {
        type: String,
        required: false,
    },
    create: {
        type: Date,
        required: true,
    },
});

PlanSchema.plugin(mongooseAutoInc.plugin, 'plan');

module.exports = mongoose.model('plan', PlanSchema);
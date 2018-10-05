import * as mongoose from 'mongoose'

const beerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    type: {
        type: String,
        enum: ['Larger', 'Ipa', 'Blonde', 'Brown', 'Dark', 'Pilsen', 'Other'],
        required: true
    }
})

export const Beer = mongoose.model('Beer', beerSchema)
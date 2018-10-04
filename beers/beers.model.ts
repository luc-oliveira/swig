import * as mongoose from 'mongoose'

const beerSchema = new mongoose.Schema({
    description: {
        type: String
    },
    type: {
        type: String,
        enum: ['Larger', 'Ipa', 'Blonde', 'Brown', 'Dark', 'Pilsen', 'Other'],
        required: true
    },
    recipe: [{
        step: {
            type: String,
            required: true
        }
    }],
    ingredients: [{
        name: {
            type: String,
            required: true
        },
        quantity: {
            type: Float32Array
        },
        measurement: {
            type: String,
            enum: ['gill', 'cup', 'ml']
        }
    }],
})

export const Beer = mongoose.model('Beer', beerSchema)
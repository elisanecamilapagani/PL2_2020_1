import mongoose from 'mongoose';

const esquema = new mongoose.Schema({

    descrição:{
        type: String,
        required: true
    },
     quantidade: {
          type: Number,
       required: true   
    },
       marca: String
});

const Produto = mongoose.model('Produto', esquema)

export default Produto;

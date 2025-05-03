import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username é obrigatório'],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Senha é obrigatória'],
        select: false,
        validate: {
            validator: function(v) {
                // Validação ocorre ANTES do hash
                return v.length >= 4; // Mínimo 4 caracteres
            },
            message: 'A senha deve ter no mínimo 4 caracteres'
        }
    },
    email: {
        type: String,
        required: [true, 'Email é obrigatório'],
        unique: true,
        validate: {
            validator: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
            message: 'Formato de email inválido'
        }
    }
}, { 
    timestamps: true 
});

const User = mongoose.model('User', UserSchema);
export default User;
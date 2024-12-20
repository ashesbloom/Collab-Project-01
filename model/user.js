const {Schema,model} = require('mongoose');
const {createhmac,randomBytes} = require('crypto');

const userSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        requirted:true,
        unique:true
    },
    password:{
        trype:String,
        required: true
    },
    salt:{
        type:String,
    },
    profile:{
        type:String,
        default:'default'
    },
    role:{
        type:String,
        default:'user'
    }
},{timestamps:true});

const User = model('User',userSchema);

userSchema.pre('save',function(next){
    const user = this;

    const salt = randomBytes(32).toString('hex');
    user.salt = salt;

    const hash = createhmac('sha256',salt)
        .update(user.password)
        .digest('hex');
});

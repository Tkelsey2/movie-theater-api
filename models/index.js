const {userRouter} = require("../routes/user")
const {showRouter} = require("../routes/show")
const {Show} = require("./Show")
const {User} = require("./User")

function associations(){
    Show.belongsTo(User)
    User.hasMany(Show)
}
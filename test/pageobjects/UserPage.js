const userElement = require('../../elements/User')

class UserPage{
    get disconnect(){
        return $(userElement.Disconnect)
    }
}
module.exports = new UserPage()
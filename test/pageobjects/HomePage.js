const HomeElement = require('../../elements/Home')

class HomePage{
    get compte(){
        return $(HomeElement.compte)
    }
}
module.exports = new HomePage()

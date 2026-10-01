const compteElement = require('../../elements/Compte')

class ComptePage{
    get CreateNew(){
        return $(compteElement.CreateNew)
    }
}
module.exports = new ComptePage()

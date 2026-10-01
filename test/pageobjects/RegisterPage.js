const RegisterElement = require('../../elements/Register')

class RegisterPage{
    get prenom(){
        return $(RegisterElement.prenom)
    }
    get nom(){
        return $(RegisterElement.nom)
    }
    get email(){
        return $(RegisterElement.email)
    }
    get phone(){
        return $(RegisterElement.phone)
    }
    get pwd(){
        return $(RegisterElement.pwd)
    }
    get zip(){
        return $(RegisterElement.zip)
    }
    get button_submit(){
        return $(RegisterElement.button_submit)
    }
    get city(){
        return $(RegisterElement.city)
    }
}

module.exports = new RegisterPage()

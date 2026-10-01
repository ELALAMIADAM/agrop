const Compte_page = require("../pageobjects/ComptePage")
const Register_page = require("../pageobjects/RegisterPage")
const User_page = require("../pageobjects/UserPage")

const actions = require("../../common/Actions")
const assert = require("../../common/Assertions")
const HomePage = require("../pageobjects/HomePage")
const allure = require('@wdio/allure-reporter').default
describe("register",()=>{
    it("register user",async()=> {
        await allure.step("Step 1 click on compte", async()=>{
            await actions.Click(HomePage.compte)
            
            await actions.Click(Compte_page.CreateNew)
            
            // await actions.SetValue(Register_page.prenom,"dckoaddca")
            // console.log("ajajajaak===================================================",await Register_page.prenom.getValue())

            // await actions.SetValue(Register_page.nom,"dckoaddca")
            // await actions.SetValue(Register_page.email,"dckoaddca")
            // await actions.SetValue(Register_page.zip,"dckoaddca")
            // await actions.SetValue(Register_page.phone,"dckoaddca")
            // await actions.SetValue(Register_page.city,"dckoaddca")
            await actions.Saisirpwd(Register_page.pwd,"20312321")
            console.log('================================',Register_page.pwd)
            // await actions.Click(Register_page.button_submit)

            // await assert.assertElementIsDisplayed(User_page.disconnect)
        })
    })
})
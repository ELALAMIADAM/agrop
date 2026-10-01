
class Actions {
    async Click(element){
        await element.waitForDisplayed({timeout:120000})
        await element.click()
    }
    async SetValue(element,value){
        await element.waitForDisplayed({timeout:120000})
        await element.click()
        await element.clearValue()
        await element.setValue(value)
        await driver.hideKeyboard();
    }
    async KeyEnter(element,value){
        await element.waitForDisplayed({timeout:120000})
        await element.click()
        await element.clearValue()
        await driver.keyEnter(value)
        await driver.hideKeyboard();
    }
    async Saisirpwd(element,value){
        await element.scrollIntoView()
        await element.waitForDisplayed({timeout:120000})
        await element.click()
        await element.clearValue()
        driver.action('key').sendKeys('YourSecurePassword123').perform();
        // await element.editText(value)
        // await element.keyEnter(value)

    }
}
module.exports = new Actions()
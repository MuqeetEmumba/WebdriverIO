loginData = require("../data/loginData");

class LoginPage {
    get inputUsername() {return $('#username')}
    get inputPassword() {return $('#password')}
    get submitButton() {return $('//button[@class="radius"]')}
    get flashMessage() {return $('#flash-messages')}
    get logoutButton() {return $('.example .button')}

/**Enter the username to be entered
 * @param {String} text username to be entered
 */
    enterInputUsername(text){
        this.inputUsername.waitForDisplayed()
        this.inputUsername.setValue(text)
    }
/**Enter the password to be entered
 * @param {String} text password to be entered
 */ 
    enterInputPassword(password){
        this.inputPassword.waitForDisplayed()
        this.inputPassword.setValue(password)
    }

    clickSubmitButton(){
        this.submitButton.waitForDisplayed()
        this.submitButton.click()
    }

    displayFlashMessageText(){
        this.flashMessage.waitForDisplayed()
        return this.flashMessage.getText()
    }

    clickLogoutButton(){
        this.logoutButton.waitForDisplayed()
        this.logoutButton.click()
    }
}
module.exports = new LoginPage()

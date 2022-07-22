const loginData = require("../data/loginData");
const login = require("../pages/login.page");

describe('Login Page',function() {
    it("Should Enter Username", () => {
        browser.url(`${browser.options.baseUrl}login`)
        login.enterInputUsername(loginData.validUserName)
        assert.equal(login.inputUsername.getValue(), loginData.validUserName)
    })
    it("Should Enter Password", () => {
        login.enterInputPassword(loginData.validPassword)
        assert.equal(login.inputPassword.getValue(), loginData.validPassword)
    })
    it("Should successfully log in user with correct username and password", () => {
        login.clickSubmitButton()
        login.submitButton.waitForDisplayed({timeout:30000, reverse: true})
        assert.equal('You logged into a secure area!\n×', login.displayFlashMessageText())
    })
})
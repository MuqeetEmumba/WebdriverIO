const internetPage = require("../../pages/internet.page");
const loginData = require('../../data/loginData')

describe('Test element actions',function () {
    it('should click element', () => {
        browser.url('/')
        internetPage.clickOnLink()
        expect(browser.getUrl()).equals('http://the-internet.herokuapp.com/abtest')
        browser.pause(4000)
    })
    it('should get Text', () =>{
        browser.url('/')
        expect(internetPage.getSpecificElementText(1)).equals('A/B Testing')
        browser.pause(4000)
    })
    it('should click checkbox', () =>{
        internetPage.clickLink(6)
        internetPage.clickCheckbox(1)
        expect(internetPage.checkboxes(1).isSelected()).equals(true)
        browser.pause(4000)
    })
    it('should uncheck checkbox', () =>{
        internetPage.clickCheckbox(1)
        expect(internetPage.checkboxes(1).isSelected()).equals(false)
        browser.pause(4000)
    })
    it('should enter username', () => {
        browser.url(`${browser.options.baseUrl}/login`)
        internetPage.enterUsername(loginData.userName)
        assert.equal(loginData.userName,internetPage.username.getValue())
        browser.pause(4000)
    })
    it('should enter password', () => {
        browser.url(`${browser.options.baseUrl}/login`)
        internetPage.enterPassword(loginData.password)
        assert.equal(loginData.password,internetPage.password.getValue())
        browser.pause(4000)
    })
    it('should clear value', () =>{
        internetPage.username.click()
        internetPage.username.clearValue() 
        assert.equal('', internetPage.username.getValue())
        browser.pause(4000)
    })
})
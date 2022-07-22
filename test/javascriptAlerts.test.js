const { assert } = require("chai");
const internetPage = require("../pages/internet.page");

describe('Javascript Alerts', function(){
    it('should get text of alert', () =>{
        browser.url(`${browser.options.baseUrl}/javascript_alerts`)
        internetPage.clickJavascriptAlertButton(1)
        assert.equal('I am a JS Alert',browser.getAlertText())
        console.log(browser.getAlertText())
        browser.pause(5000)
    })

    it('should accpet alert', () =>{
        browser.acceptAlert()
        assert.equal('You successfully clicked an alert', internetPage.getResultText())
        browser.pause(5000)
    })

    it('should sent text to the alert', () =>{
        internetPage.clickJavascriptAlertButton(3)
        browser.sendAlertText('This is some text')
        browser.acceptAlert()
        assert.equal('You entered: This is some text', internetPage.getResultText())
        browser.pause(5000)
    })
})

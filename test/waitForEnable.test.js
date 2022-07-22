const { assert } = require("chai");
const internetPage = require("../pages/internet.page");

describe("Should wait for Enabled", function(){
    it('should wait for the input field to be enabled',() =>{
        browser.url(`${browser.options.baseUrl}/dynamic_controls`)
        internetPage.clickEnableButton()
        internetPage.inputEnabledField.waitForEnabled(4000)
        console.log(internetPage.inputEnabledField.waitForEnabled(4000))
        assert.equal(true,internetPage.inputEnabledField.isEnabled())
        browser.pause(5000)
    })

    it('should wait for the input field to be disabled', () => {
        internetPage.clickEnableButton()
        internetPage.inputEnabledField.waitForEnabled(4000, true)
        assert.equal(true,internetPage.inputEnabledField.isEnabled())
        browser.pause(5000)
    })
})
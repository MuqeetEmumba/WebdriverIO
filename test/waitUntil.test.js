const { assert } = require("chai");
const internetPage = require("../pages/internet.page");

describe("Should wait until", function(){
    it('should wait until the button text changes to Add',() =>{
        browser.url(`${browser.options.baseUrl}/dynamic_controls`)
        internetPage.clickPageButton()
        browser.waitUntil(() => {
            browser.pause(2000)
            return internetPage.pageButton.getText() === 'Add'
        },6000, 'Expect Button text to change')
        assert.equal('Add',internetPage.pageButton.getText())
        browser.pause(2000)
    })

    it('should wait until the button text changes to Remove',() =>{
        internetPage.clickPageButton()
        browser.waitUntil(() => {
            browser.pause(2000)
            return internetPage.pageButton.getText() === 'Remove'
        },6000, 'Expect Button text to change')
        assert.equal('Remove',internetPage.pageButton.getText())
        browser.pause(2000)
    })
})
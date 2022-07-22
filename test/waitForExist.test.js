const { assert } = require("chai");
const internetPage = require("../pages/internet.page");

describe("Should wait for Exist", function(){
    it.only('should wait until the delete button exists',() =>{
        browser.url(`${browser.options.baseUrl}/add_remove_elements/`)
        internetPage.clickExampleButton()
        internetPage.deleteButton(1).waitForExist(4000)
        assert.equal(true,internetPage.deleteButton(1).isExisting())
        browser.pause(5000)
    })

    it('should wait for the input field to be disabled', () => {
        internetPage.clickDeleteButton(1)
        internetPage.deleteButton(1).waitForExist(400, true)
        assert.equal(true,internetPage.deleteButton(1).isExisting())
        browser.pause(5000)
    })
})
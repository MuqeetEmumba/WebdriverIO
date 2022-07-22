const { assert } = require("chai");
const internetPage = require("../pages/internet.page");
describe('Dropdown menu', function () {
    it('should select option 1', () => {
        browser.url(`${browser.options.baseUrl}/dropdown`)
        internetPage.clickDropdownMenu()
        internetPage.clickdropdownMenuOption1()
        assert.equal(true,internetPage.dropdownMenuOption1.isSelected())
        browser.pause(5000)
    })

    it('should select option 2', () => {
        browser.url(`${browser.options.baseUrl}/dropdown`)
        internetPage.clickDropdownMenu()
        internetPage.clickdropdownMenuOption2()
        assert.equal(true,internetPage.dropdownMenuOption2.isSelected())
        browser.pause(5000)
    })
})
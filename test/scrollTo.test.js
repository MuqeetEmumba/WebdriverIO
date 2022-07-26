const { assert } = require('chai')
internetPage = require('../pages/internet.page')

describe('Scroll to Element', function () {
    it('should scroll to the footer', () => {
        browser.url('/')
        internetPage.pageHeader.waitForDisplayed(1000, true)
        internetPage.scrollToPageFooter()
        assert.equal(true, internetPage.pageFooter.isDisplayedInViewport())
        browser.pause(6000)
    })

    it.skip('should scroll into view', () => {
        browser.url('/')
        internetPage.pageFooter.scrollIntoView()
        assert.equal(true, internetPage.pageFooter.isDisplayedInViewport())
        browser.pause(3000)
    })
    
}) 
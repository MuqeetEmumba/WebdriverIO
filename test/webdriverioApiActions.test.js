const internetPage = require("../pages/internet.page");
describe('WebdriverIO API Actions', function(){
    it('should hover on figure', () => {
        browser.url(`${browser.options.baseUrl}/hovers`)
        internetPage.hoverOnfigure(3)
        assert.equal("name: user1",internetPage.getFigureDetailsText(3))
        browser.pause(2000)
    })

    it('should hover on figure 2', () => {
        browser.url(`${browser.options.baseUrl}/hovers`)
        internetPage.hoverOnfigure(4)
        assert.equal("name: user2",internetPage.getFigureDetailsText(4))
        browser.pause(2000)
    })

    it('should hover on figure 3', () => {
        browser.url(`${browser.options.baseUrl}/hovers`)
        internetPage.hoverOnfigure(5)
        assert.equal("name: user3",internetPage.getFigureDetailsText(5))
        browser.pause(2000)
    })
    it('should send keyboard value Backspace', () =>{
        browser.url(`${browser.options.baseUrl}/key_presses`)
        internetPage.clickTarget()
        internetPage.sendKeysToTarget("Backspace") 
        assert.equal("You entered: BACK_SPACE", internetPage.getResultText())
        browser.pause(2000)
    })
    it('should send keyboard value Tab', () =>{
        browser.url(`${browser.options.baseUrl}/key_presses`)
        internetPage.clickTarget()
        internetPage.sendKeysToTarget("Tab") 
        assert.equal("You entered: TAB", internetPage.getResultText())
        browser.pause(2000)
    })
    it('should send keyboard value Shift', () =>{
        browser.url(`${browser.options.baseUrl}/key_presses`)
        internetPage.clickTarget()
        internetPage.sendKeysToTarget("Shift") 
        assert.equal("You entered: SHIFT", internetPage.getResultText())
        browser.pause(2000)
    })
})
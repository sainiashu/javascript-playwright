// const {page} = require('@playwright/test')

class CartPage{
    /**
   * @param {import('@playwright/test').Page} page
   */
    constructor (page){

        this.page = page

    }

    async clickOnTermandConditionCheckBox(){
        await this.page.locator("//input[@id='termsofservice']").click()
    }

    async clickOnCheckOut(){
        await this.page.locator("#checkout").click()
    }
}

module.exports= CartPage

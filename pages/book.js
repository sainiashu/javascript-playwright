class Book{
    /**
     * 
     * @param {import('@playwright/test').page} page 
     */

    constructor(page){
        this.page = page

        this.addTocart="'button', {name: 'Add to cart'}"
        this.shoppingCartLink = "a[class='ico-cart'] span[class='cart-label']"
        // this.product
    }

    async clickAddTocart(page){

        await this.page.locator(this.addTocart).click()
    }

    async clickShoppingCartLink(page){

        await this.page.locator(this.shoppingCartLink).click()
    }
}

module.exports =Book
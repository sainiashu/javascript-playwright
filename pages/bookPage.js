class BookPage{
    constructor (page){
        this.page = page

    }


    async clickAddToCart(){
        await this.page.getByRole('button', {name: 'Add to cart'}).first().click()
    }

    async clickOnShoppingCartLink(){
        await this.page.locator("a[class='ico-cart'] span[class='cart-label']").click()
    }
}

module.exports= BookPage
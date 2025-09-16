class HomePage{
    constructor(page){
        this.page= page

    }

    async clickExcellentCheckBox(){
        await this.page.locator("id=pollanswers-1").click()
     
    }

    async verifyExcellentIsChecked(){
        await expect(this.page.locator("id=pollanswers-1")).toBeChecked()
    }

    async ClickOnBookSTab(){
        await this.page.getByRole('link',{name: 'Books'}).first().click()
        
    }

    async clickLogout(){
        await this.page.locator(".ico-logout").click()
    }

    async getTitlePageText(){
        const locator = await this.page.locator("img[alt='Tricentis Demo Web Shop']")
        return await locator.getAttribute('alt')
    }
}

 module.exports = HomePage; 
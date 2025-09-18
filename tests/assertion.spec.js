const {test, expect } = require('@playwright/test')

test('Assertion Test',async({page})=>{


    await page.goto('https://admin-demo.nopcommerce.com/login')
    await expect(page).toHaveURL('https://admin-demo.nopcommerce.com/login')

    await expect(page).toHaveTitle('nopCommerce demo store. Login')

    const isButtonVisible  = await page.locator("button[type='submit']")
    await expect(isButtonVisible).toBeVisible()

    

})
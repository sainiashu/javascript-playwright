const {test,expect} = require('@playwright/test')
const LoginPage = require('../pages/loginPage')
const HomePage = require('../pages/homePage')
const BookPage = require ('../pages/bookPage')
const CartPage = require('../pages/cartPage')


test(' Add To cart', async({page})=>{

    const loginPage = new LoginPage(page)
    const homePage = new HomePage(page)
    const bookPage = new BookPage(page)
    const cartPage = new CartPage(page)

    await loginPage.goto()
    await loginPage.login('Demo1.Tester@test.test', 'Tester@123')

    await homePage.ClickOnBookSTab()

    await bookPage.clickAddToCart()
    await bookPage.clickOnShoppingCartLink()
    
    await cartPage.clickOnTermandConditionCheckBox()
    await cartPage.clickOnCheckOut()
    await homePage.clickLogout()

})
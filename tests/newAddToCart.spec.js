import {test,expect} from '@playwright/test'
const BookPage = require ('../pages/book')
const HomePage = require('../pages/homePage')
const LoginPage = require('../pages/loginPage')
const CartPage = require('../pages/loginPage')


test('New Add To Cart', async({page})=>{

    const loginPage = new LoginPage(page)
    const homePage = new HomePage(page)
    const bookPage = new BookPage(page)
    const cartPage = new CartPage(page)

    await loginPage.goto('https://demowebshop.tricentis.com/login')
    await loginPage.login('Demo1.Tester@test.test', 'Tester@123')

    await homePage.ClickOnBookSTab()

})
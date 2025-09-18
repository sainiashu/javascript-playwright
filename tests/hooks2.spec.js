const {test, expect} = require ('@playwright/test')
const HomePage = require('../pages/homePage')
const LoginPage = require('../pages/loginPage')
const CartPage = require('../pages/cartPage')
const BookPage = require ('../pages/bookPage')

//declare the page varable in the class level and remove the page from the test level.
let page;


test.beforeEach(async({browser})=>{

  page = await browser.newPage()
  const loginPage = new LoginPage(page);
  // const homePage = new HomePage(page);

  await loginPage.goto('https://demowebshop.tricentis.com/login');
  await loginPage.login('Demo1.Tester@test.test', 'Tester@123');
})


//here we do not define the page fixture because we already declare in the before each
test.afterEach(async()=>{
  const homePage = new HomePage(page);
  await homePage.clickLogout()
})


test('Test 1 home page', async({})=>{

  // const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

  // await loginPage.goto('https://demowebshop.tricentis.com/login');
  // await loginPage.login('Demo1.Tester@test.test', 'Tester@123');
 
  const titleText = await homePage.getTitlePageText();
  console.log(titleText);
  
  // await homePage.clickLogout()
  
//   expect(titleText).toContain('Tricentis')
})

test('Test 2 Add to cart', async({})=>{

    const loginPage = new LoginPage(page)
    const homePage = new HomePage(page)
    const bookPage = new BookPage(page)
    const cartPage = new CartPage(page)

    // await loginPage.goto('https://demowebshop.tricentis.com/login')
    // await loginPage.login('Demo1.Tester@test.test', 'Tester@123')

    await homePage.ClickOnBookSTab()

    await bookPage.clickAddToCart()
    await bookPage.clickOnShoppingCartLink()
    
    await cartPage.clickOnTermandConditionCheckBox()
    await cartPage.clickOnCheckOut()
    // await homePage.clickLogout()
})
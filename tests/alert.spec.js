
const {test, expect, page } = require('@playwright/test')

const LoginPage = require('../pages/loginPage')


// test(' Test 1 javascript alert',async({page})=>{

//     const loginPage = new LoginPage(page)

//     await loginPage.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo')

   
//     // await page.once('dialog',async dialog =>{
//     //     const text = dialog.message()
//     //     console.log(text)
//     //     await dialog.accept()

//     })

// test(' Test 2 confirm box',async({page})=>{

//     const loginPage = new LoginPage(page)

//     await loginPage.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo')

//     await page.once('dialog',async dialog =>{
//         const text = dialog.message()
//         console.log(text)
//         await dialog.dismiss()
//     })

//     await page.getByRole('paragraph').filter({ hasText: 'Confirm box:Click Me' }).getByRole('button').click();

//     await page.pause()

//     })

    test('Test 3 prompt',async({page})=>{

    const loginPage = new LoginPage(page)
    await loginPage.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo')

            page.once('dialog', async dialog =>{
            const text = dialog.message()
            console.log('Dialog msg: ', text)
            await dialog.accept('testing')
        })

        await page.locator('//div[3]//p[1]//button[1]').click()
        const getEnteredText = await page.locator('id=prompt-demo').textContent()
        await expect(getEnteredText).toContain('testing')
    
    })

import {test, expect, chromium } from '@playwright/test'

test('handling pages', async()=>{

   const browser = await chromium.launch()
    const context = await browser.newContext()

    const page1 = await context.newPage()
    const page2 = await context.newPage()

    const allPages = context.pages()

    console.log("No.of pages ", allPages.length)

    await page1.goto('https://demowebshop.tricentis.com/')
    await page2.goto('https://demo.applitools.com/')
})

test.only('handling multiple pages', async()=>{

   const browser = await chromium.launch()
    const context = await browser.newContext()

    const page1 = await context.newPage()
    

    const allPages = context.pages()

    console.log("No.of pages ", allPages.length)

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM')

    const [newPage] = await Promise.all([
        page1.waitForEvent('popup'),
        page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click()
    ])

    await newPage.waitForLoadState()

    await expect(newPage).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM')
    await browser.close()









    // const [newPage]= await Promise.all([
    //     page1.waitForEvent('popup'),
    //     page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click()
    // ])
    
    // await newPage.waitForLoadState()
    
    // await expect(newPage).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM')

    // await browser.close()
})
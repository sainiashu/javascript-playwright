const {test, expect} = require('@playwright/test')


test('table handling', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    
    const table = await page.locator('id=productTable')

    const columns = table.locator('thead tr th')
    console.log('no. of columns: ', await columns.count())

    const rows = table.locator('tbody tr')
    console.log('no. of rows: ', await rows.count())

    expect(await columns.count()).toBe(4)
    expect(await rows.count()).toBe(5)

    await selctProduct(rows, page, 'Laptop')
    await selctProduct(rows, page, 'Smartphone')
    await selctProduct(rows, page, 'Smartwatch')
    // const matchedRow = rows.filter({
    //     has: page.locator('td'),
    //     hasText:'Smartwatch'
    // })

    // await matchedRow.locator('input').check()
    await page.waitForTimeout(5000)
})

    async function selctProduct(rows, page, name) {
    const matchedRow = rows.filter({
            has: page.locator('td'),
            hasText: name
        
    })
    await matchedRow.locator('input').check()
}
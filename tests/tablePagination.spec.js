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


    //5) read data from all the pages in the table

    const pages = await page.locator('.pagination li a')
    console.log( "No. of pages ",await pages.count())

    for( let p = 0; p< await pages.count(); p++)
    {
        if (p>0)
        {
            await pages.nth(p).click()
        }
        for(let i=0; i< await rows.count(); i++)
        {

        const row = rows.nth(i)
        const tds = rows.locator('td')

        for(let j=0; j<await columns.count(); j++)
            
            {
                console.log( await tds.nth(j).textContent())
        }
        await page.waitForTimeout(5000)
    }
    }

    // print all product details by using loop
    // for(let i=0; i< await rows.count(); i++)
    //     {

    //     const row = rows.nth(i)
    //     const tds = rows.locator('td')

    //     for(let j=0; j<await columns.count(); j++)
            
    //         {
    //             console.log( await tds.nth(j).textContent())
    //     }
    // }



    //Select particulat checkbox
    // await selctProduct(rows, page, 'Laptop')
    // await selctProduct(rows, page, 'Smartphone')
    // await selctProduct(rows, page, 'Smartwatch')
    
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
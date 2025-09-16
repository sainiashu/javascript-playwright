const {test, expect} =  require('@playwright/test')
const LoginPage = require('../pages/loginPage')
const FileDownloadUpload = require('../pages/filedownload_upload')


test('Test 1 file download',async({page})=>{

    const loginPage = new LoginPage(page)
    const fileDownload = new FileDownloadUpload(page)
    await loginPage.goto('https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo')

    await fileDownload.fileDownload("Download file")

})

test.only('Test 2 file upload',async({page})=>{
    const loginPage = new LoginPage(page)
    const uploadFile = new FileDownloadUpload(page)
    await loginPage.goto('https://www.lambdatest.com/selenium-playground/upload-file-demo')
    await uploadFile.fileUpload("testdata\\DemoImage.PNG")
    
})
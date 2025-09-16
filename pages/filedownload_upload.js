class FileDownloadUpload
{
    /**
     * 
     * @param {import('@playwright/test').Page} page 
     */
    constructor (page){
        this.page = page
    }

    async fileDownload(comment){

            await this.page.locator("#textbox").fill(comment)
            await this.page.locator("#textbox").press('Enter')
            const generateFile = await this.page.locator("//button[@id='create']")
            await generateFile.isEnabled()
            await this.page.locator("//button[@id='create']").click()


    }

    async fileUpload(path){
        
        await this.page.setInputFiles("id=file",[path])
    }
}

module.exports = FileDownloadUpload
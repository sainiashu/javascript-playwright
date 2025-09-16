class AlertPage{
     /**
   * @param {import('@playwright/test').Page} page
   */

    constructor (page){
        

        this.page = page
    }


    async javaScriptAlert(){
        this.page.on('dialog', async(alert)=>{
            await alert.accept();
        })
        
    }
}

module.exports = AlertPage; 
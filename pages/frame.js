class Frame{
     /**
     * 
     * @param {import('@playwright/test').Page} page 
     */

    constructor(page){
        this.page = page
    }

    async frameHandler(iframe){

    const allFrames = await this.page.frames()
    console.log("Total number of frames:", allFrames.length )

    return await this.page.frameLocator(iframe)
    
    }

//     async nestedFrameHandlers(iframe){

//         return await this.page.frame(iframe)

//     }
}

module.exports = Frame
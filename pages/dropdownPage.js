class DropDownPage{
    /**
     * 
     * @param {import('@playwright/test').Page} page 
     */
    constructor(page){
        this.page = page
    }

    async selectDropdown(item){
        await this.page.selectOption('id=select-demo', {
            index : item
        })
    }

    async multiSelect(itemNumber, name){
    await this.page.selectOption('id=multi-select',[
        {
        index:  itemNumber
        },
        {
            value: name
        }        
    ])
    }

    async treeSelect ( name) {
        await this.page.selectOption('id=country',{
            label: name

        })
        
    }
}

module.exports = DropDownPage
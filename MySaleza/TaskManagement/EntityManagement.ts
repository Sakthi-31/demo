import { Page } from "@playwright/test";

export default class EntityManagement{

    constructor(public page: Page) {}

     async clickOnEntityManagement() {
        await this.page.click("//span[text()='Entity_Management']")
    }
    async clickOnAddEntityManagement() {
        await this.page.click("'Add EntityMangement'")
    }
   async EntityName(){
     await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-319']")
     await this.page.selectOption("//div[@role='listbox']",{
        value:" Quotes "
        
        
     })
   }
   async WorkItemName(){
     await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-320']")
     await this.page.selectOption("//div[@role='listbox']",{
        value:" Scheduling  ",
        index:2,
        

     })
   }
    async clickOnSave() {
        await this.page.click("//button[text()=' Create ']")
    } 

}

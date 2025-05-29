import { Page } from "@playwright/test";

export default class WorkItemSLA{

    constructor(public page: Page) {}

     async clickOnWorkItemSLA() {
        await this.page.click("//span[text()='WorkItemSla']")
    }
    async clickOnAddWorkItemSLA() {
        await this.page.click("'Add WorkItemSla'")
    }
   async WorkItemName(){
     await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-323']")
     await this.page.selectOption("//div[@role='listbox']",{
        value:" support ticket ",

     })
   }
   async SLADays(){
     await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-324']")
     await this.page.selectOption("//div[@role='listbox']",{
        value:" 70 ",
        
     })
   }
    async clickOnSave() {
        await this.page.click("//button[text()=' Create ']")
    } 

}
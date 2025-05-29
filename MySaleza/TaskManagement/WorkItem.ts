import { Page } from "@playwright/test";

export default class WorkItem{

    constructor(public page:Page){}

    async clickOnWorkItem(){
        await this.page.click("//span[text()='Work Item']")
    }
    async clickOnAddWorkItem(){
        await this.page.click("//a[normalize-space(text())='Add WorkItem']")
    }
    async WorkItemType(workitemtype:string) {
       await this.page.locator("//input[contains(@class,'form-control ng-pristine')]").fill(workitemtype)
    }
    async WorkItemCode(workItemcode:string) {
       await this.page.locator("(//input[@id='workItemCode'])[1]").fill(workItemcode)
    }
    async WorkItemName(workItemname:string) {
       await this.page.locator("(//input[@id='workItemName'])[1]").fill(workItemname)
    }
    async ClickOnSave(){
        await this.page.click("//button[normalize-space(text())='Create']")
    }
   
    
}
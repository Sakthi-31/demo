import { Page } from "@playwright/test";

export default class WorkItemSkills {

    constructor(public page: Page) { }

    async clickOnWorkItemSkills() {
        await this.page.click("//span[text()='WorkItemSkills']")
    }
    async clickOnAddWorkItemSkills() {
        await this.page.click("//a[normalize-space(text())='Add WorkItemSkills']")
    }
   async SkillsName(){
     await this.page.click("#mat-select-value-13")
     await this.page.selectOption("//div[@role='listbox']",{
        value:" support staff ",
        index:2,
        
     })
   }
   async WorkItemName(){
     await this.page.click("#mat-select-value-15")
     await this.page.selectOption("//div[@role='listbox']",{
        value:" internal process ",

     })
   }
    async clickOnSave() {
        await this.page.click("//button[normalize-space(text())='Create']")
    }
}
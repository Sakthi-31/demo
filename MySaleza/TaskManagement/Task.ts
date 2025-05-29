import { Page } from "@playwright/test";

export default class Task {

    constructor(public page:Page){}

    async clickOnTask(){
        await this.page.click("//span[text()='Task']")
    }
    async clickOnAddTask(){
        await this.page.click("//button[text()='Add Task ']")
    }
    async EmployeeName() {
        await this.page.click("#mat-select-value-73")
        await this.page.selectOption("#mat-select-72-panel", {
            value: "Moorthy"
        })
    }
    async LeadName() {
        await this.page.click("#mat-select-value-75")
        await this.page.selectOption("//div[@role='listbox']", {
            value: "Kaviya"
        })
    }
    async RelatedTo() {
        await this.page.click("#mat-select-value-77")
        await this.page.selectOption("//div[@role='listbox']", {
            value: " Vendor "
        })
    }
    async WorkItemName() {
        await this.page.click("#mat-select-value-79")
        await this.page.selectOption("//div[@role='listbox']", {
            value: "internal process"
        })
    }
    async Priority() {
        await this.page.click("#mat-select-value-81")
        await this.page.selectOption("//div[@role='listbox']", {
            value: "Lowest"
        })
    }
    async Status() {
        await this.page.click("#mat-select-value-83")
        await this.page.selectOption("#mat-select-82-panel", {
            value: "Proposal"
        })
    }
    async DueDate(duedate:string) {
        await this.page.locator("#mat-input-53").fill(duedate)
        
    }
    async Description(taskdescription:string) {
        await this.page.locator("#mat-input-54").fill(taskdescription)
        
    }
    async clickOnSave(){
        await this.page.click("//button[text()='Create']")
    }
}
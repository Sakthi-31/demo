import {Page} from "@playwright/test"

export default class Solution {

    constructor(public page:Page){}

    async clickOnSolution(){
        await this.page.click("//span[text()='Solution']")
    }
    async clickOnAddSolution(){
        await this.page.click("//a[@class='btn btn-primary']")
    }
    async SolutionOwner() {
        await this.page.click("#mat-select-value-67")
        await this.page.selectOption("//div[@role='listbox']", {
            value: " deepa "
        })
    }
    async SolutionTitle(Solutiontitle:string) {
        await this.page.locator("//input[contains(@class,'form-control ng-untouched')]").fill(Solutiontitle)
    }
   async Status() {
        await this.page.click("#mat-select-value-69")
        await this.page.selectOption("#mat-select-68-panel", {
            value: "Duplicate"
        })
    }
    async ProductName() {
        await this.page.click("#mat-select-value-71")
        await this.page.selectOption("#mat-select-70-panel", {
            value: " Earphone "
        })
    }
    async Question(question:string) {
        await this.page.locator("(//textarea[contains(@class,'form-control ng-untouched')])[1]").fill(question)
    }
    async Answer(answer:string) {
        await this.page.locator("(//textarea[contains(@class,'form-control ng-untouched')])[2]").fill(answer)
        
    }
    async Description(solutiondescription:string) {
        await this.page.locator("#description").fill(solutiondescription)
        
    }
    async clickOnSave(){
        await this.page.click("//button[text()='Create']")
    }
}    
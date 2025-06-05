import { Page } from "@playwright/test";

export default class CreateCase{

    constructor(public page:Page){}

    async ClickCase(){
        await this.page.click("//span[text()='Case']")
    }
     async ClickAddCase(){
        await this.page.click("//button[text()='Add Case']")
    }
    async CaseInvoiceNumber(caseinvoicenumber:string){
        await this.page.locator("#mat-input-41").fill(caseinvoicenumber.toString())
    }
    async SearchInvoice(){
        await this.page.click("//button[text()='Search']")
    }
    async CCaseOwner() {
        await this.page.click("#mat-select-value-49")
        await this.page.selectOption("#mat-select-48-panel", {
            value: "bharathi"
        })
    }
    async CaseStatus() {
        await this.page.click("#mat-select-value-51")
        await this.page.selectOption("#mat-select-50-panel", {
            value: "Closed "
        })
    }
    async CaseType() {
        await this.page.click("#mat-select-value-53")
        await this.page.selectOption("//div[@role='listbox']", {
            value: "Question"
        })
    }
    async CasePriority() {
        await this.page.click("#mat-select-value-55")
        await this.page.selectOption("#mat-select-54-panel", {
            value: "Low"
        })
    }
    async CCaseOrigin() {
        await this.page.click("#mat-select-value-57")
        await this.page.selectOption("#mat-select-56-panel", {
            value: "Phone"
        })
    }
    async CCaseReason() {
        await this.page.click("#mat-select-value-59")
        await this.page.selectOption("//div[@role='listbox']", {
            value: "New Problem"
        })
    }
    async CaseContact() {
        await this.page.click("#mat-select-value-61")
        await this.page.selectOption("#mat-select-60-panel", {
            value: "Ranjith"
        })
    }
    async CaseSubject(casesubject:string){
        await this.page.locator("#mat-input-44").fill(casesubject)
    }
    async CaseAccount() {
        await this.page.click("#mat-select-value-63")
        await this.page.selectOption("", {
            value: ""
        })
    }
    async CaseRelatedTo(caserelatedto:string) {
        await this.page.locator("#mat-input-45").fill(caserelatedto)
    }
    async CaseOpportunity() {
        await this.page.click("#mat-select-value-65")
        await this.page.selectOption("//div[@role='listbox']", {
            value: "pari"
        })
    }
    async CaseEmail(caseemail:string){
        await this.page.locator("#mat-input-46").fill(caseemail)
    }
    async CaseContactNumber(casecontactnumber:string){
        await this.page.locator("#mat-input-47").fill(casecontactnumber.toString())
    }
    async CaseDescription(casedescription:string){
        await this.page.locator("(//textarea[contains(@class,'form-control ng-untouched')])[1]").fill(casedescription)
    }
    async CaseInternalComments(caseinternalcomments:string){
        await this.page.locator("#mat-input-48").fill(caseinternalcomments)
    }
    async CaseSolutions(casesolutions:string){
        await this.page.locator("(//textarea[contains(@class,'form-control ng-untouched')])[2]").fill(casesolutions)
    }
    async CreateCase(){
        await this.page.click("//button[text()='Create']")
    }
}
    
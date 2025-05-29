import { Page } from "@playwright/test";

export default class InvoiceCheck{

    constructor(public page:Page){}

    async ClickInvoiceCheck(){
        await this.page.click("//span[text()='Invoice-Check']")
    }
    async InvoiceNumber(invoicenumber:number){
        await this.page.locator("#mat-input-15").fill(invoicenumber.toString())
    }
    async SearchInvoice(){
        await this.page.click("//button[contains(@class,'btn btn-primary')]")
    }
    async CreatedCase(){
        await this.page.click("(//button[contains(@class,'btn btn-primary')])[2]")
    }
    async CaseOwner() {
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-20']")
        await this.page.selectOption("#mat-select-36-panel", {
            value: "bharathi"
        })
    }
    async Status() {
        await this.page.click("#mat-select-value-39")
        await this.page.selectOption("#mat-select-38-panel", {
            value: ""
        })
    }
    async Type() {
        await this.page.click("#mat-select-value-41")
        await this.page.selectOption("#mat-select-40-panel", {
            value: "Feature Request"
        })
    }
    async Priority() {
        await this.page.click("#mat-select-value-19")
        await this.page.selectOption("#mat-select-18-panel", {
            value: "Medium"
        })
    }
    async CaseOrigin() {
        await this.page.click("#mat-select-value-21")
        await this.page.selectOption("#mat-select-20-panel", {
            value: "Email "
        })
    }
    async CaseReason() {
        await this.page.click("#mat-select-value-23")
        await this.page.selectOption("#mat-select-22-panel", {
            value: "Existing Problem"
        })
    }
    async Contact() {
        await this.page.click("#mat-select-value-25")
        await this.page.selectOption("#mat-select-24-panel", {
            value: "Ranjith"
        })
    }
    async Subject(subject:string){
        await this.page.locator("#mat-input-13").fill(subject)
    }
    async Account() {
        await this.page.click("#mat-select-value-27")
        //await this.page.selectOption("", {
       //     value: ""
       // })
    }
    async RelatedTo(relatedto:string){
        await this.page.locator("#mat-input-14").fill(relatedto)
       
    }
    async Opportunity() {
        await this.page.click("#mat-select-value-29")
        await this.page.selectOption("#mat-select-28-panel", {
            value: "Geetha"
        })
    }
    async Email(email:string){
        await this.page.locator("#mat-input-15").fill(email)
    }
    async ContactNumber(contactnumber:number){
        await this.page.locator("#mat-input-16").fill(contactnumber.toString())
    }
    async InvoiceCheckDescription(invoicecheckdescription:string){
        await this.page.locator("(//textarea[contains(@class,'form-control ng-untouched')])[1]").fill(invoicecheckdescription)
    }
    async InternalComments(internalcomments:number){
        await this.page.locator("#mat-input-17").fill(internalcomments.toString())
    }
    async Solutions(solutions:number){
        await this.page.locator("//textarea[@placeholder='Enter Solutions']").fill(solutions.toString())
    }
    async CreateCaseInInvoiceCheck(){
        await this.page.click("//button[text()='Create']")
    }
}
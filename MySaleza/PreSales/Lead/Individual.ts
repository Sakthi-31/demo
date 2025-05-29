import { Page } from "@playwright/test";

export default class Individual{

    constructor(public page:Page){}

    async ClickLead(){
        await this.page.click("//span[normalize-space(text())='Leads']")
    }
    async ClickAddLead(){
        await this.page.click("//a[@class='btn btn-primary']")
    }
    async LeadType(){
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-84']")
        await this.page.selectOption("//div[@role='listbox']",{
            value:"Individual"
        })
    }
    async AssignEmployee(){
        await this.page.click("#mat-select-value-17")
        await this.page.selectOption("#mat-select-16-panel",{
            value:"thangavel"
        })
    }
    async LeadStatus(){
        await this.page.click("#mat-select-value-19")
        await this.page.selectOption("#mat-select-18-panel",{
            value:"Lost Lead"
        })
    }
    async LeadSource(){
        await this.page.click("#mat-select-value-21")
        await this.page.selectOption("#mat-select-20-panel",{
            value:"Web Research"
        })
    }
    async Salutation(){
        await this.page.click("#mat-select-value-23")
        await this.page.selectOption("#mat-select-22-panel",{
            value:"Mr."
        })
    }
    async Fristname(individualfristname:string){
        await this.page.locator("#firstName").fill(individualfristname)
    }
    async Lastname(individuallastname:string){
        await this.page.locator("#lastName").fill(individuallastname)
    }
    async Designation (individualdesignation:string){
        await this.page.locator("#designation").fill(individualdesignation)
    }
    async EmailAddress(individualemail:string){
        await this.page.locator("#emailAddress").fill(individualemail)
    }
    async MobileNumber(individualmobilenumber:string){
        await this.page.locator("#mobileNo").fill(individualmobilenumber)
    }
    async Street (individualstreet:string){
        await this.page.locator("#street").fill(individualstreet)
    }
    async City (individualcity:string){
        await this.page.locator("#city").fill(individualcity)
    }
    async State (individualstate:string){
        await this.page.locator("#state").fill(individualstate)
    }
    async Country (individualcountry:string){
        await this.page.locator("#country").fill(individualcountry)
    }
    async PostalCode(individualpostalcode:string){
        await this.page.locator("#postalCode").fill(individualpostalcode)
    }
    async Description (individualdescription:string){
        await this.page.locator("#description").fill(individualdescription)
    }
    async IndividualSubmit(){
        await this.page.click("//button[contains(@class,'btn btn-primary')]")
    }


}
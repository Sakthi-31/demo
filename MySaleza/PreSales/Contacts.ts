import { Page } from "@playwright/test";

export default class Contacts{

    constructor(public page:Page){}

    async ClickContacts(){
        await this.page.click("//span[normalize-space(text())='Contact']")
    }
    async ClickAddContacts(){
        await this.page.click("//a[@class='btn btn-primary']")
    }
    async Salutation(){
        await this.page.click("#mat-select-value-73")
        await this.page.selectOption("#mat-select-72-panel",{
            value:"Ms."
           
        })
    }
    async Fristname(contactsfristname:string){
        await this.page.locator("#firstName").fill(contactsfristname)
    }
    async Lastname(contactslastname:string){
        await this.page.locator("#lastName").fill(contactslastname)
    }
    async AccountName(){
        await this.page.click("#mat-select-value-75")
        await this.page.selectOption("#mat-select-84-panel",{
            value:"  Toyota  "
        })
    }
    async Department(department:string){
        await this.page.locator("(//input[contains(@class,'form-control ng-untouched')])[3]").fill(department)
    }
    async Email(contactsemail:string){
        await this.page.locator("//input[@type='email']").fill(contactsemail)
    }
    async phoneNumber(contactsphonenumber:string){
        await this.page.locator("//input[@placeholder='Enter Phone Number']").fill(contactsphonenumber)
    }
    async LeadSource(){
        await this.page.click("#mat-select-value-87")
        await this.page.selectOption("#mat-select-86-panel",{
            value:" X(Twitter) "
        })
    }
    async ContactOwner(){
        await this.page.click("#mat-select-value-89")
        await this.page.selectOption("",{
            value:" Moorthy "
        })
    }
    async DateOfBirth(dateofbirth:string){
        await this.page.locator("//input[contains(@class,'datetimepicker form-control')]").fill(dateofbirth)
    }
    async Title(title:string){
        await this.page.locator("//input[@placeholder='Enter Title']").fill(title)
    }
    async AssistantName(assistantname:string){
        await this.page.locator("//input[@placeholder='Enter Assistant Name']").fill(assistantname)
    }
    async AssistantNumber(assistantnumber:string){
        await this.page.locator("//input[@placeholder='Enter Assistant Number']").fill(assistantnumber)
    }
    async MobileNumber (contactsmobilenumber:string){
        await this.page.locator("//input[@placeholder='Enter Mobile Number']").fill(contactsmobilenumber)
    }
    async HomePhoneNumber (homephonenumber:string){
        await this.page.locator("//input[@placeholder='Enter Home Phone Number']").fill(homephonenumber)
    }
    async BillingStreet (contactsbillingstreet:string){
        await this.page.locator("//input[@placeholder='Enter Billing Street ']").fill(contactsbillingstreet)
    }
    async BillingCity (contactsbillingcity:string){
        await this.page.locator("//input[@placeholder='Enter Billing City ']").fill(contactsbillingcity)
    }
    async BillingState (contactsbillingstate:string){
        await this.page.locator("//input[@placeholder='Enter Billing State ']").fill(contactsbillingstate)
    }
    async BillingCountry (contactsbillingcountry:string){
        await this.page.locator("//input[@placeholder='Enter Billing Country ']").fill(contactsbillingcountry)
    }
    async BillingPostalCode (contactsbillingpostalcode:string){
        await this.page.locator("//input[@placeholder='Enter Billing Code ']").fill(contactsbillingpostalcode)
    }
    async ClickContactsCopyAddress() {
        await this.page.click("(//button[contains(@class,'btn btn-primary')])[1]")
        await this.page.selectOption("'Billing to Shipping'", {
            value: " Billing to Shipping "
        })
    }
     async ContactsDescription(contactdescription:string){
        await this.page.locator("(//textarea[@name='description'])[1]").fill(contactdescription)
    }
    async ContactSubmit(){
        await this.page.click("(//button[contains(@class,'btn btn-primary')])[2]")
    }



}
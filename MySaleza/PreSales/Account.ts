import { Page } from "@playwright/test";

export default class Account{

    constructor(public page:Page){}

    async ClickAccount(){
        await this.page.click("//span[normalize-space(text())='Account']")
    }
    async ClickAddAccount(){
        await this.page.click("//a[@class='btn btn-primary']")
    }
    async AccountOwner(){
        await this.page.click("#mat-select-value-37")
        await this.page.selectOption("#mat-select-60-panel",{
            value:" Shakthi "
        })
    }
    async Rating(){
        await this.page.click("#mat-select-value-63")
        await this.page.selectOption("#mat-select-62-panel",{
            value:"Project Cancelled"
        })
    }
    async AccountName(accountname:string){
        await this.page.locator("#input[name='accountName']").fill(accountname)
    }
    async PhoneNumber(accountphonenumber:string){
        await this.page.locator("#input[name='contactNumber']").fill(accountphonenumber)
    }
    async AccountNo(accountno:string){
        await this.page.locator("input[name='accountNo']").fill(accountno)
    }
    async AccountType(){
        await this.page.click("#mat-select-value-67")
        await this.page.selectOption("#mat-select-66-panel",{
            value:"Integrator"
        })
    }
    async Ownership(){
        await this.page.click("#mat-select-value-69")
        await this.page.selectOption("#mat-select-68-panel",{
            value:"Public Company"
        })
    }
    async Industry(){
        await this.page.click("#mat-select-value-71")
        await this.page.selectOption("#mat-select-70-panel",{
            value:"Telecommunication"
        })
    }
    async NoOfEmployee(noofemployee:string){
        await this.page.locator("input[name='noOfEmploye']").fill(noofemployee)
    }
    async AnnualRevenue(annualrevenuse:string){
        await this.page.locator("input[name='annualRevenue']").fill(annualrevenuse)
    }
    async SICCode(siccode:string){
        await this.page.locator("input[name='SICCode']").fill(siccode)
    }
    async BillingStreet(billingstreet:string){
        await this.page.locator("input[name='billingstreet']").fill(billingstreet)
    }
    async BillingCity(billingcity:string){
        await this.page.locator("input[name='billingcity']").fill(billingcity)
    }
    async BillingState(billingstate:string){
        await this.page.locator("input[name='billingstate']").fill(billingstate)
    }
    async BillingCountry(billingcountry:string){
        await this.page.locator("input[name='billingcountry']").fill(billingcountry)
    }
    async BillingCode(billingcode:string){
        await this.page.locator("input[name='billingcode']").fill(billingcode)
    }
    async ClickAccountCopyAddress() {
        await this.page.click("(//button[contains(@class,'btn btn-primary')])[1]")
        await this.page.selectOption("'Billing to Shipping'", {
            value: " Billing to Shipping "
        })
    }
     async AccountDescription(accountdescription:string){
        await this.page.locator("(//textarea[@name='description'])[1]").fill(accountdescription)
    }
    async AccountSubmit(){
        await this.page.click("(//button[contains(@class,'btn btn-primary')])[2]")
    }
    
    


}
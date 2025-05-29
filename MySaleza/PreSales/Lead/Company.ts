import { Page } from "@playwright/test";

export default class LeadCompany{

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
            value:"Company"
        })
    } 
    async AssignEmployee(){
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-14']")
        await this.page.selectOption("//div[@role='listbox']",{
            value:"bharathi"
        })
    }
    async LeadStatus(){
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-15']")
        await this.page.selectOption("//div[@role='listbox']",{
            value:"Lost Lead"
        })
    }
    async LeadSource(){
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-16']")
        await this.page.selectOption("//div[@role='listbox']",{
            value:"External Referral"
        })
    }
    async EmailAddress(companyemail:string){
        await this.page.locator("//input[contains(@class,'form-control ng-pristine')]").fill(companyemail)
    }
    async MobileNumber(companymobilenumber:string){
        await this.page.locator("(//input[contains(@class,'form-control ng-untouched')])[1]").fill(companymobilenumber)
    }
    async Street (companystreet:string){
        await this.page.locator("(//input[contains(@class,'form-control ng-untouched')])[2]").fill(companystreet)
    }
    async City (companycity:string){
        await this.page.locator("(//input[contains(@class,'form-control ng-untouched')])[3]").fill(companycity)
    }
    async State (companystate:string){
        await this.page.locator("#state").fill(companystate)
    }
    async Country (companycountry:string){
        await this.page.locator("#country").fill(companycountry)
    }
    async PostalCode(companypostalcode:string){
        await this.page.locator("#postalCode").fill(companypostalcode)
    }
    async CompanyName(leadcompanyname:string){
        await this.page.locator("#companyName").fill(leadcompanyname)
    }
    async Website(leadwebsite:string){
        await this.page.locator("#website").fill(leadwebsite)
    }
    async Industry(){
        await this.page.click("#mat-select-value-9")
        await this.page.selectOption("#industry-panel",{
            value:"Data/Telecom OEM"
        })
    }
    async Designation(leaddesignation:string){
        await this.page.locator("#designation").fill(leaddesignation)
    }
     async LeadName(leadnamecompany:string){
        await this.page.locator("#leadName").fill(leadnamecompany)
    }
    async Rating(){
        await this.page.click("#mat-select-value-11")
        await this.page.selectOption("#rating-panel",{
            value:"Shut Down"
        })
    }
     async EmployeeCount(employeecount:string){
        await this.page.locator("#employeeCount").fill(employeecount)
    }
    async Description(leaddescription:string){
        await this.page.locator("#description").fill(leaddescription)
    } 
    async leadcompanySubmit(){
        await this.page.click("//button[contains(@class,'btn btn-primary')]")
    } 

     
}
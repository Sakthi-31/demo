import { Page } from "@playwright/test";

export default class OpportunityCompany{

    constructor(public page:Page){}

    async ClickOpportunity(){
        await this.page.click("//span[normalize-space(text())='Opportunity']")
    }
    async ClickAddOpportunity(){
        await this.page.click("//a[@class='btn btn-primary']")
    }
    async OpportunityType(){
        await this.page.click("#mat-select-value-95")
        await this.page.selectOption("#mat-select-94-panel",{
            value:"Company"
        })
    }
    async DealOwner(){
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-152']")
        await this.page.selectOption("//div[@role='listbox']",{
            value:" Suriya "
        })
    }
    async DealName(dealname:string){
        await this.page.locator("(//input[contains(@class,'form-control ng-untouched')])[1]").fill(dealname)
    }
    async WebSite(website:string){
        await this.page.locator("(//input[contains(@class,'form-control ng-untouched')])[2]").fill(website)
    }
    async Industry(){
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-153']")
        await this.page.selectOption("//div[@role='listbox']",{
           value:"Government/Military"
        })
    }
    async AccountName(){
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-154']")
        await this.page.selectOption("//div[@role='listbox']",{
           value:" job "
        })
    }
    async ExpectedCloseDate(companyexpectedclosedate:string){
        await this.page.locator("//input[contains(@class,'datetimepicker form-control')]").fill(companyexpectedclosedate)
    }
    async Amount(amount:string){
        await this.page.locator("input[name='amount']").fill(amount)
    }
    async SalesStage(){
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-155']")
        await this.page.selectOption("//div[@role='listbox']",{
            value:"Proposal/Price Quote"
        })
    }
    async ExpectedRevenue(oppexpectedrevenue :string){
        await this.page.locator("//input[contains(@class,'form-control ng-dirty')]").fill(oppexpectedrevenue)
    }
    async NextStep(nextstep:string){
        await this.page.locator("//input[@placeholder='Enter Next Step']").fill(nextstep)
    }
    async LeadSource(){
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-173']")
        await this.page.selectOption("//div[@role='listbox']",{
           value:"Online Store"
        })
    }
    async CampaignSource(){
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-174']")
        await this.page.selectOption("//div[@role='listbox']",{
           value:" Summer "
        })
    }
    async OpportunityCompanyDescription(opportunitycompanydescription:string){
        await this.page.locator("(//textarea[@name='description'])[1]").fill(opportunitycompanydescription)
    }
    async OpportunityCompanySubmit(){
        await this.page.click("//button[contains(@class,'btn btn-primary')]")
    }

}
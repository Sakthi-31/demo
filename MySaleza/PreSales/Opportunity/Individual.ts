import { Page } from "@playwright/test";

export default class OpportunityIndividual{

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
            value:"Individual"
        })
    }
    async DealOwner(){
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-152']")
        await this.page.selectOption("//div[@role='listbox']",{
            value:"Suriya"
        })
    }
    async Amount(amount:string){
        await this.page.locator("(//input[contains(@class,'form-control ng-untouched')])[1]").fill(amount)
    }
    async Salutation(){
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-208']")
        await this.page.selectOption("//div[@role='listbox']",{
            value:"Mr"
        })
    }
    async Fristname(opportunityindividualfristname:string){
        await this.page.locator("(//input[contains(@class,'form-control ng-untouched')])[2]").fill(opportunityindividualfristname)
    }
    async Lastname(opportunityindividuallastname:string){
        await this.page.locator("(//input[contains(@class,'form-control ng-untouched')])[3]").fill(opportunityindividuallastname)
    }
    async ExpectedCloseDate(expectedclosedate:string){
        await this.page.locator("//input[contains(@class,'datetimepicker form-control')]").fill(expectedclosedate)
    }
    async AccountName(){
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-209']")
        await this.page.selectOption("//div[@role='listbox']",{
            value:"job"
        })
    }
    async SalesStage(){
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-155']")
        await this.page.selectOption("//div[@role='listbox']",{
            value:"Proposal/Price Quote"
        })
    }
    async NextStep(nextstep:string){
        await this.page.locator("input[name='nextStep']").fill(nextstep)
    }
    async ExpectedRevenue(expectedrevenue :string){
        await this.page.locator("input[name='expectedRevenue']").fill(expectedrevenue)
    }
    async LeadSource(){
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-233']")
        await this.page.selectOption("//div[@role='listbox']",{
            value:"Instagram"
        })
    }
    async CampaignSource(){
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-234']")
        await this.page.selectOption("//div[@role='listbox']",{
            value:" TrustMe "
        })
    }
    async IndividualDescription(Opportunityindividualdescription:string){
        await this.page.locator("//textarea[contains(@class,'form-control ng-untouched')]").fill(Opportunityindividualdescription)
    }
    async OpportunityIndividualSubmit(){
        await this.page.click("//button[contains(@class,'btn btn-primary')]")
    }





}
import {Page} from "@playwright/test"

export default class Campaign{

    constructor(public page:Page){}

    async ClickCampaign(){
        await this.page.click("//span[text()='Campaign']")
    }
    async ClickAddCampaign(){
        await this.page.click("//a[@class='btn btn-primary']")
    }
    async CampaignOwner(){
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-6']")
        await this.page.selectOption("//div[contains(@class,'ng-trigger ng-trigger-transformPanel')]",{
            value:"bharathi"
        })
    }
    async CampaignName(campaignname:string){
        await this.page.locator("//input[contains(@class,'form-control styled')]").fill(campaignname)
    }
    async CampaignMode(){
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-7']")
        await this.page.selectOption("//div[@role='listbox']",{
            value:"Public Relation"
        })
    }
    async CampaignStatus(){
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-8']")
        await this.page.selectOption("//div[@role='listbox']",{
            value:"Completed"
        })
    }
    async NumberofEmployees(noemployee:string){
         await this.page.locator("(//input[contains(@class,'form-control ng-untouched')])[1]").fill(noemployee)
    }
    async CampaignStartDate(campaignsdate:string){
        await this.page.locator("(//input[contains(@class,'datetimepicker form-control')])[1]").fill(campaignsdate)
    }
    async CampaignEndDate(campaignedate:string){
        await this.page.locator("(//input[contains(@class,'datetimepicker form-control')])[2]").fill(campaignedate)
    }
    async ExpectedRevenue(expectedrevenue:string){
        await this.page.locator("//input[contains(@class,'form-control ng-pristine')]").fill(expectedrevenue)
    }
    async BudgetedCost(budgetedcost:string){
        await this.page.locator("(//input[contains(@class,'form-control ng-untouched')])[2]").fill(budgetedcost)
    }
    async ActualCost(actualcost:string){
        await this.page.locator("(//input[contains(@class,'form-control ng-untouched')])[2]").fill(actualcost)
    }
    async ExpectedResponse(expectedresponse:string){
        await this.page.locator("input[name='expectedResponse']").fill(expectedresponse)
    }
    async CampaignDescription(campaigndescription:string){
        await this.page.locator("(//textarea[@name='description'])[1]").fill(campaigndescription)
    }
    async CampaignSubmit(){
        await this.page.click("//button[contains(@class,'btn btn-primary')]")
    }
    

}
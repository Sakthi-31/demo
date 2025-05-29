import { Page } from "@playwright/test";


export default class pricebook{

constructor(public page:Page){}

async ClickaPricebook(){
    await this.page.click("//span[text()='Pricebook']")
}
async ClickaddPricebook(){
    await this.page.click("//a[@class='btn btn-primary']")
}
async PriceBookOwner(){
    await this.page.click("(//mat-select[contains(@class,'mat-mdc-select select')])[1]")
    await this.page.selectOption("//div[@role='listbox']",{
        value: "Shakthi"
    })
}
async PriceBookName(pricebookname:string){
    await this.page.locator("//input[contains(@class,'form-control ng-pristine')]").fill(pricebookname)
}
async PBProduct(){
    await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-13']")
    await this.page.selectOption("//div[contains(@class,'ng-trigger ng-trigger-transformPanel')]",{
        label:"mdc-list-item__primary-text"
    })
}
async PBStatus(){
    await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-14']")
    await this.page.selectOption("//div[contains(@class,'ng-trigger ng-trigger-transformPanel')]",{
        value:"Active"
    })
}
async ListPrice(listprice:string){
    await this.page.locator("#listPrice").fill(listprice.toString())
}
async PricingModel(){
    await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-15']")
    await this.page.selectOption("//div[contains(@class,'ng-trigger ng-trigger-transformPanel')]",{
        index:1
    })
}
async Description(description:string){
    await this.page.locator("#meta[name='description']").fill(description)
}
async CreatedPriceBookSumbit(){
    await this.page.click("//button[contains(@class,'btn btn-primary')]")
}

}
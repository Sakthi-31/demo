import { Page } from "@playwright/test";


export default class createdproduct{

    constructor(public page:Page){}

    async clickaproduct(){
        await this.page.click("//span[text()=' Products / Services']")
    }
    async clickaunits(){
        await this.page.click("'Units'")
    }
    async clickaaddbtn(){
        await this.page.click("a[data-bs-target='#add_unit']")
    }
    async enteraunit(unitname:string){
        await this.page.locator("(//input[@name='unitName'])[1]").fill(unitname)
    }
    async clickasubmit(){
        await this.page.click("(//button[contains(@class,'btn btn-primary')])[1]")
    }
    async clickacategory(){
        await this.page.click("'Category'")
    }
    async clickaddcategory(){
        await this.page.click("'Add Category'")
    }
    async enteracategory(category:string){
        await this.page.locator("(//input[@name='productName'])[1]").fill(category)
    }
    async clickacategorysumbit(){
        await this.page.click("(//button[contains(@class,'btn btn-primary')])[1]")
    }
    async clickaproducts(){
        await this.page.click("'Product List'")
    }
    async clickaddproduct(){
        await this.page.click("'Add Product'")
    }
    async ProductOwnerName(){
    await this.page.click("(//mat-select[contains(@class,'mat-mdc-select select')])[1]")
    await this.page.selectOption("//div[@role='listbox']",{
        value: "Shakthi"
    })
    }
    async ProductName(productname:string){
        await this.page.locator("#productName").fill(productname)
    }
    async ProductCode(productcode:string){
        await this.page.locator("(//input[contains(@class,'form-control ng-untouched')])[1]").fill(productcode)
    }
    async VendorName(){
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-24']")
        await this.page.selectOption("//div[contains(@class,'ng-trigger ng-trigger-transformPanel')]",{
            value:" Alan "
        })
    }
    async ProductStatus(){

        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-25']")
        await this.page.selectOption("//div[contains(@class,'ng-trigger ng-trigger-transformPanel')]",{
        value:"Active"
    })
    }
    async Category(){
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-26']")
        await this.page.selectOption("//div[contains(@class,'ng-trigger ng-trigger-transformPanel')]",{
            index:5
        })
    }
    async Manufacturer(){
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-27']")
        await this.page.selectOption("//div[contains(@class,'ng-trigger ng-trigger-transformPanel')]",{
            index:2
        })
    }
    async SalesStartDate(salesstartdate:string){
        await this.page.locator("(//input[contains(@class,'datetimepicker form-control')])[1]").fill(salesstartdate)
    }
    async SalesEndDate(salesenddate:string){
        await this.page.locator("(//input[contains(@class,'datetimepicker form-control')])[2]").fill(salesenddate)
    }
    async SupportStartDate(supportsartdate:string){
        await this.page.locator("(//input[contains(@class,'datetimepicker form-control')])[3]").fill(supportsartdate)
    }
    async SupportEndDate(supportenddate:string){
        await this.page.locator("//input[@name='supportEndDate']").fill(supportenddate)
    }
    async UnitPrice(unitprice:string){
        await this.page.locator("(//input[contains(@class,'form-control ng-pristine')])[3]").fill(unitprice)
    }
    async CommissionRate(comRate:string){
        await this.page.locator("//input[contains(@class,'form-control styled')]").fill(comRate)
    }
    async Tax(){
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-8']")
        await this.page.selectOption("//div[contains(@class,'ng-trigger ng-trigger-transformPanel')]",{
            value:"CGST - (9%)"
        })
    }
    async Units(){
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-25']")
        await this.page.selectOption("//div[contains(@class,'ng-trigger ng-trigger-transformPanel')]",{
            value:" Packs "
        })
    }
    async QtyOrdered(qtyordered:string){
        await this.page.locator("//input[@placeholder='Enter Qty Ordered']").fill(qtyordered.toString())
    }
    async QtyInStock(qtyinstock:string){
        await this.page.locator("//input[@placeholder='Enter Quantity']").fill(qtyinstock.toString())
    }
    async ReorderLevel(recorder:string){
        await this.page.locator("//input[@placeholder='Enter Reorder Level']").fill(recorder.toString())
    }
    async QtyInDemand(qtyindemand:string){
        await this.page.locator("//input[@placeholder='Enter Quantity in Demand']").fill(qtyindemand.toString())
    }
    async Specification(specification:string){
        await this.page.locator("(//textarea[@name='description'])[1]").fill(specification)
    }
    async CreatedProduct(){
        await this.page.click("//button[contains(@class,'btn btn-primary')]")
    }
}
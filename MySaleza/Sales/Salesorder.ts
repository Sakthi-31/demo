import{Page} from "@playwright/test"

export default class Salesorder{

    constructor(public page:Page){}

    async ClickSalesorder() {
        await this.page.click("//span[normalize-space()='Sales Order']")
    }
    async ClickAddSalesorder() {
        await this.page.click("//a[normalize-space()='Add Quotation']")
    }
    async SalesOrderOwner() {
        await this.page.click("//div[@id='mat-select-value-17']")
        await this.page.selectOption("//div[@id='mat-select-16-panel']", {
            value: " Shakthi "
        })
    }
    async DealName() {
        await this.page.click("//span[contains(@class,'mat-mdc-select-min-line ng-tns-c1771602899-277')]")
        await this.page.selectOption("//div[@role='listbox']", {
            value: " Geetha "
        })
    }
    async Subject(salessubject: string) {
        await this.page.locator("(//input[contains(@class,'form-control ng-untouched')])[1]").fill(salessubject)
    }
    async PurchaseOrderNo(purchaseorderno: string) {
        await this.page.locator("(//input[contains(@class,'form-control ng-untouched')])[2]").fill(purchaseorderno)
    }
    async CustomerNo(customerno: string) {
        await this.page.locator("(//input[contains(@class,'form-control ng-untouched')])[2]").fill(customerno)
    }
    async DueDate(salesduedate: string) {
        await this.page.locator("//input[contains(@class,'datetimepicker form-control')]").fill(salesduedate)
    }
    async ContactName() {
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-279']")
        await this.page.selectOption("//div[@role='listbox']", {
            value: " Gopi "
        })
    }
    async Pending(pending: string) {
        await this.page.locator("(//input[contains(@class,'form-control ng-untouched')])[3]").fill(pending)
    }
    async Tax() {
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-280']")
        await this.page.selectOption("//div[@role='listbox']", {
            value: "SGST - (9%)"
        })
    }
    async Carrier() {
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-281']")
        await this.page.selectOption("//div[@role='listbox']", {
            value: "DHL"
        })
    }
    async Status() {
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-282']")
        await this.page.selectOption("//div[@role='listbox']", {
            value: "Delivered"
        })
    }
    async SalesCommision(SOSalesCommision: string) {
        await this.page.locator("(//div[@class='input-block']//input)[2]").fill(SOSalesCommision)
    }
    async AccountName() {
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-283']")
        await this.page.selectOption("//div[@role='listbox']", {
            value: "Anil"
        })
    }
    async SalesorderStreet(salesorderstreet: string) {
        await this.page.locator("#street").fill(salesorderstreet)
    }
    async SalesorderCity(salesordercity: string) {
        await this.page.locator("#city").fill(salesordercity)
    }
    async SalesorderState(salesorderstate: string) {
        await this.page.locator("#state").fill(salesorderstate)
    }
    async SalesorderPincode(salesorderpincode: string) {
        await this.page.locator("#pincode").fill(salesorderpincode.toString())
    }
    async SalesorderCountry(salesordercountry: string) {
        await this.page.locator("#country").fill(salesordercountry)
    }
    async SalesorderClickCopyAddress() {
       await this.page.click("//button[normalize-space()='Copy Address']")
        await this.page.selectOption("//ul[@class='dropdown-menu show']", {
            value: "  Billing to Shipping  "
        })
    }
    async ClickAProductInSalesorder() {
        await this.page.click("//a[@class='btn btn-primary form-plus-btn mb-2']")
    }
    async SalesorderClickAddProduct(salesorderquantity: string) {
       await this.page.click("//div[@id='mat-select-value-13']")
        await this.page.selectOption("//div[@id='mat-select-12-panel']", {
            value: "  OnePlus 13   "
        })
        await this.page.locator("//div[@id='product_details']//div[3]//div[1]//input[1]").fill(salesorderquantity)

    }
    async SalesorderClickDiscount(salesorderdiscount: string) {
         await this.page.locator("input[placeholder='Enter Discount'][type='text']").fill(salesorderdiscount.toString())
        await this.page.click("//button[@data-bs-dismiss='modal'][normalize-space()='Create']")
    }
    async SalesorderTermsandConditions(salesordertermsandconditions: string) {
        await this.page.locator("(//textarea[contains(@class,'form-control ng-untouched')])[1]").fill(salesordertermsandconditions)
    }
    async SalesorderDescription(salesorderdescription: string) {
        await this.page.locator("(//textarea[contains(@class,'form-control ng-untouched')])[2]").fill(salesorderdescription)
    }
    async CreatedSalesorderSumbit() {
        await this.page.click("(//button[contains(@class,'btn btn-primary')])[2]")
    }

}
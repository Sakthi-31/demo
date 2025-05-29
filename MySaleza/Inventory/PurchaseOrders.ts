import { Page } from "@playwright/test";


export default class purchaseorder {

    constructor(public page: Page) { }

    async ClickPurchaseOrder() {
        await this.page.click("//span[text()='Purchase Order']")
    }
    async ClickaddPurchaseorder() {
        await this.page.click("//a[@class='btn btn-primary']")
    }
    async PoOwner() {
        await this.page.click("(//mat-select[contains(@class,'mat-mdc-select select')])[1]")
        await this.page.selectOption("//div[@role='listbox']", {
            value: " Shakthi "

        })
    }
    async Subject(subject: string) {
        await this.page.locator("(//input[contains(@class,'form-control ng-untouched')])[1]").fill(subject)
    }
    async SupplierName() {
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-6']")
        await this.page.selectOption("//div[@role='listbox']", {
            value: " chandrus "
        })
    }
    async RequisitionNumber(requisitionnumber: string) {
        await this.page.locator("//input[contains(@class,'form-control ng-pristine')]").fill(requisitionnumber.toString())
    }
    async TrackingNumber(trackingnumber: string) {
        await this.page.locator("(//input[contains(@class,'form-control ng-pristine')])[2]").fill(trackingnumber.toString())
    }
    async MoblieNumber(moblienumber: string) {
        await this.page.locator("(//input[contains(@class,'form-control ng-untouched')])[2]").fill(moblienumber.toString())
    }
    // async PurchaseOrderDate(purchaseorderdate: string) {
    //     await this.page.locator("").fill(purchaseorderdate)
    // }
    async DueDate(duedate: string) {
        await this.page.locator("(//input[contains(@class,'datetimepicker form-control')])[2]").fill(duedate)
    }
    async Carrier() {
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-7']")
        await this.page.selectOption("//div[@role='listbox']", {
            value: "USPS"
        })
    }
    async Tax() {
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-8']")
        await this.page.selectOption("//div[@role='listbox']", {
            index: 1
        })
    }
    async SalesCommission(salescommission: string) {
        await this.page.locator("#salesCommission").fill(salescommission.toString())
    }
    async Status() {
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-9']")
        await this.page.selectOption("//div[@role='listbox']", {
            value: "Delivered"
        })
    }
    async Street(purchasestreet: string) {
        await this.page.locator("//input[@formcontrolname='street']").fill(purchasestreet)
    }
    async City(purchasecity: string) {
        await this.page.locator("//input[@formcontrolname='city']").fill(purchasecity)
    }
    async State(purchasestate: string) {
        await this.page.locator("//input[@formcontrolname='state']").fill(purchasestate)
    }
    async Pincode(purchasepincode: string) {
        await this.page.locator("//input[@formcontrolname='pincode']").fill(purchasepincode.toString())
    }
    async Country(purchasecountry: string) {
        await this.page.locator("//input[@formcontrolname='country']").fill(purchasecountry)
    }
    async ClickCopyAddress() {
        await this.page.click("(//button[contains(@class,'btn btn-primary')])[1]")
        await this.page.selectOption("'Billing to Shipping'", {
            value: " Billing to Shipping "
        })
    }
    async ClickAProductInPurchase(){
        await this.page.click("//i[@class='fas fa-plus-circle']")
    }
    async ClickAddProduct(quantity: string) {
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-16']")
        await this.page.selectOption("//div[@role='listbox']", {
            value: " Xiaomi 15 Ultra "
        })
        await this.page.locator("//input[@formcontrolname='quantity']").fill(quantity)
        
    }
    async ClickDiscount(discount:string){
        await this.page.locator("//input[@formcontrolname='discount']").fill(discount.toString())
        await this.page.click("(//button[contains(@class,'btn btn-primary')])[3]")
    }
    async TermsandConditions(termsandconditions: string) {
        await this.page.locator("//textarea[contains(@class,'form-control ng-pristine')]").fill(termsandconditions)
    }
    async Description(purdescription: string) {
        await this.page.locator("(//textarea[@name='description'])[1]").fill(purdescription)
    }
    async CreatedPurchaseorderSumbit() {
        await this.page.click("(//button[contains(@class,'btn btn-primary')])[2]")
    }

}
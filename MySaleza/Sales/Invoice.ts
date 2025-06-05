import{Page} from "@playwright/test"

export default class Invoice{

    constructor(public page:Page){}

    async ClickInvoice() {
        await this.page.click("//span[text()='Invoices']")
    }
    async ClickAddInvoice() {
        await this.page.click("//a[@class='btn btn-primary']")
    }
    async OrderNo() {
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-309']")
        await this.page.selectOption("//div[@role='listbox']", {
            value: "80008"
        })
    }
    async InvoiceOwner() {
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-310']")
        await this.page.selectOption("//div[@role='listbox']", {
            value: " thangavel "
        })
    }
    async PurchaseOrder(PurchaseOrder: string) {
        await this.page.locator("(//input[contains(@class,'form-control ng-untouched')])[1]").fill(PurchaseOrder)
    }
    async SalesCommision(SalesCommision: string) {
        await this.page.locator("(//input[contains(@class,'form-control ng-untouched')])[1]").fill(SalesCommision)
    }
    async Status() {
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-311']")
        await this.page.selectOption("//div[@role='listbox']", {
            value: "Approved"
        })
    }
    async AccountName(accountname: string) {
        await this.page.locator("//input[contains(@class,'form-control ng-pristine')]").fill(accountname)
    }
    async ContactName(contactname: string) {
        await this.page.locator("//input[@formcontrolname='contactName']").fill(contactname)
    }
    async DealName(dealname: string) {
        await this.page.locator("").fill(dealname)
    }
    async Subject(subject: string) {
        await this.page.locator("").fill(subject)
    }
    async DueDate(duedate: string) {
        await this.page.locator("").fill(duedate)
    }
    async InvoiceStreet(invoicestreet: string) {
        await this.page.locator("//input[@formcontrolname='street']").fill(invoicestreet)
    }
    async InvoiceCity(invoicecity: string) {
        await this.page.locator("//input[@formcontrolname='city']").fill(invoicecity)
    }
    async InvoiceState(invoicestate: string) {
        await this.page.locator("//input[@formcontrolname='state']").fill(invoicestate)
    }
    async InvoicePincode(invoicepincode: string) {
        await this.page.locator("//input[@formcontrolname='pincode']").fill(invoicepincode.toString())
    }
    async InvoiceCountry(invoicecountry: string) {
        await this.page.locator("//input[@formcontrolname='country']").fill(invoicecountry)
    }
    async InvoiceClickCopyAddress() {
        await this.page.click("(//button[contains(@class,'btn btn-primary')])[1]")
        await this.page.selectOption("'Billing to Shipping'", {
            value: " Billing to Shipping "
        })
    }
    async ClickAProductInInvoice() {
        await this.page.click("//i[@class='fas fa-plus-circle']")
    }
    async InvoiceClickAddProduct(invoicequantity: string) {
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-16']")
        await this.page.selectOption("//div[@role='listbox']", {
            value: " Xiaomi 15 Ultra "
        })
        await this.page.locator("//input[@formcontrolname='quantity']").fill(invoicequantity)

    }
    async InvoiceClickDiscount(invoicediscount: string) {
        await this.page.locator("//input[@formcontrolname='discount']").fill(invoicediscount.toString())
        await this.page.click("(//button[contains(@class,'btn btn-primary')])[3]")
    }
    async InvoiceTermsandConditions(invoicetermsandconditions: string) {
        await this.page.locator("//textarea[contains(@class,'form-control ng-pristine')]").fill(invoicetermsandconditions)
    }
    async InvoiceDescription(invoicedescription: string) {
        await this.page.locator("(//textarea[@name='description'])[1]").fill(invoicedescription)
    }
    async CreatedInvoiceSumbit() {
        await this.page.click("(//button[contains(@class,'btn btn-primary')])[2]")
    }


}
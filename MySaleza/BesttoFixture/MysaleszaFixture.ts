import{test as base} from "@playwright/test"
import Login from "../Inventory/Login"
import Product from "../Inventory/Product"
import ManageAccesses from "../SuperAdmin/ManageAccesses"
import ManagePrivileges from "../SuperAdmin/ManagePrivileges"
import Roles from "../SuperAdmin/Roles"
import RolesPermission from "../SuperAdmin/RolesPermission"
import Companies from "../SuperAdmin/Companies"
import Users from "../SuperAdmin/Users"
import vendor from "../Inventory/Vendors"
import purchaseorder from "../Inventory/PurchaseOrders"
import pricebook from "../Inventory/PriceBook"
import campaign from "../PreSales/Campaign"
import leadscompany from "../PreSales/Lead/Company"
import leadsindividual from "../PreSales/Lead/Individual"
import account from "../PreSales/Account"
import contact from "../PreSales/Contacts"
import opportunitycompany from "../PreSales/Opportunity/Company"
import opportunityindividual from "../PreSales/Opportunity/Individual"




type pages ={
    login:Login
    products:Product
    manageaccess:ManageAccesses
    manageprivilege:ManagePrivileges
    roles:Roles
    rolespermission:RolesPermission
    company:Companies
    users:Users
    vendors:vendor
    purchaseorders:purchaseorder
    pricebook:pricebook
    campaign:campaign
    leadscompany:leadscompany
    leadsindividual:leadsindividual
    account:account
    contact:contact
    opportunitycompany:opportunitycompany
    opportunityindividual:opportunityindividual

}

const testmysaleza=base.extend<pages>({

    login:async({page},use)=>{
        await use(new Login(page))
    },
    products:async({page},use)=>{
        await use(new Product(page))
    },
    manageaccess:async({page},use)=>{
        await use(new ManageAccesses(page))
    },manageprivilege:async({page},use)=>{
        await use(new ManagePrivileges(page))
    },roles:async({page},use)=>{
        await use(new Roles(page))
    },rolespermission:async({page},use)=>{
        await use(new RolesPermission(page))
    },company:async({page},use)=>{
        await use(new Companies(page))
    },users:async({page},use)=>{
        await use(new Users(page))
    },vendors:async({page},use)=>{
        await use(new vendor(page))
    },purchaseorders:async({page},use)=>{
        await use(new purchaseorder(page))
    },pricebook:async({page},use)=>{
        await use(new pricebook(page))
    },campaign:async({page},use)=>{
        await use(new campaign(page))
    },leadscompany:async({page},use)=>{
        await use(new leadscompany(page))
    },leadsindividual:async({page},use)=>{
        await use(new leadsindividual(page))
    },account:async({page},use)=>{
        await use(new account(page))
    },contact:async({page},use)=>{
        await use(new contact(page))
    },opportunitycompany:async({page},use)=>{
        await use(new opportunitycompany(page))
    },opportunityindividual:async({page},use)=>{
        await use(new opportunityindividual(page))
    }
    




})

export const test=testmysaleza
export const expext=testmysaleza.expect
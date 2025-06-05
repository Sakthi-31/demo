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
import Invoice from "../Sales/Invoice"
import Quotations from "../Sales/Quotations"
import Salesorder from "../Sales/Salesorder"
import invoicecheck from "../PostSales/InvoiceCheck"
import solution from "../PostSales/Solution"
import CreateCase from "../PostSales/Case"
import Task from "../TaskManagement/Task"
import WorkItem from "../TaskManagement/WorkItem"
import SLA from "../TaskManagement/Sla"
import Skills from "../TaskManagement/Skills"
import WorkItemSkills from "../TaskManagement/WorkItemSkills"
import EntityManagement from "../TaskManagement/EntityManagement"
import WorkItemSLA from "../TaskManagement/WorkItemSLA"



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
    invoice:Invoice
    quotation:Quotations
    salesorder:Salesorder
    invoicecheck:invoicecheck
    createcase:CreateCase
    solution:solution
    task:Task
    workitem:WorkItem
    sla:SLA
    skills:Skills
    workitemskills:WorkItemSkills
    entitymanagement:EntityManagement
    workitemsla:WorkItemSLA

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
    },invoice:async({page},use)=>{
        await use(new Invoice(page))
    },quotation:async({page},use)=>{
        await use(new Quotations(page))
    },salesorder:async({page},use)=>{
        await use(new Salesorder(page))
    },invoicecheck:async({page},use)=>{
        await use(new invoicecheck(page))
    },createcase:async({page},use)=>{
        await use(new CreateCase(page))
    },solution:async({page},use)=>{
        await use(new solution(page))
    },task:async({page},use)=>{
        await use(new Task(page))
    },workitem:async({page},use)=>{
        await use(new WorkItem(page))
    },sla:async({page},use)=>{
        await use(new SLA(page))
    },skills:async({page},use)=>{
        await use(new Skills(page))
    },workitemskills:async({page},use)=>{
        await use(new WorkItemSkills(page))
    },entitymanagement:async({page},use)=>{
        await use(new EntityManagement(page))
    },workitemsla:async({page},use)=>{
        await use(new WorkItemSLA(page))
    }

    




})

export const test=testmysaleza
export const expext=testmysaleza.expect
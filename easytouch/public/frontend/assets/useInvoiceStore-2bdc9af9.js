import{v as i,o as t}from"./index-e43e3799.js";const o=i("InvoiceStore",{actions:{fetchInvoices(e){return t.get("apps/invoices",{params:e})},fetchInvoice(e){return t.get(`/apps/invoices/${e}`)},fetchClients(){return t.get("/apps/invoice/clients")},deleteInvoice(e){return t.delete(`/apps/invoices/${e}`)}}});export{o as u};
//# sourceMappingURL=useInvoiceStore-2bdc9af9.js.map

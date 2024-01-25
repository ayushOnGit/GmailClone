export const API_URLS= {
    saveSentEmail:{
        method : 'POST',
        endpoint : 'save',
    },
     getEmailFromTypes:{
        endpoint : 'emails',
        method   : 'GET'
    },
    saveDraftEmail:{
        endpoint:'save-draft',
        method:'POST',
    },
   moveEmailsToBin : {
           endpoint:'bin',
           method:'POST'
   },
   toggleStarredEmail:{
    endpoint:'starred',
    method: 'POST'
   },
   deleteEmails :{
    endpoint : 'delete',
    method:'DELETE',
   }
}
// email-controller.js

const { response } = require("express");
const Email = require("../model/email");

const saveSentEmail = (request, response) => {
    try {
        const email = new Email(request.body);
        email.save();
        response.status(200).json('email saved successfully');
    } catch (error) {
        response.status(500).json(error.message);
    }
};



const saveDraftEmail = (request, response) => {
    try {
        const email = new Email(request.body);
        email.save();
        response.status(200).json('email Drafted successfully');
    } catch (error) {
        response.status(500).json(error.message);
    }
};


const getEmails = async (request, response) => {
    try {
        let emails;
        if (request.params.types === 'bin') {
            emails = await Email.find({bin:true})
        }else if(request.params.types === 'allmail'){
            emails = await Email.find({});
        }else if(request.params.types === 'starred'){
                    emails = await Email.find({starred:true,bin:false})
        }
        else{
            emails = await Email.find({ type: request.params.types });
        }
        return response.status(200).json(emails);
    } catch (error) {
        console.log(error);
        response.status(500).json(error.message);
    }
};



const deleteEmails = async(request , response)=>{
    try{
        await Email.deleteMany({_id : {$in : request.body}})
        return response.status(200).json('emails deleted succesfully')
    }catch(error){
        response.status()
    }
}


 

const moveEmailsToBin = async(request,response)=>{
    try{  
        await Email.updateMany({_id:{$in:request.body}} , {$set:{bin:true, starred:false,type:''}})
        return response.status(200).json('email deleted Succesfully');
    
    }catch(error){
        console.log(error);
        response.status(500).json(error.message);
    }
}

const toggleStarredEmails= async(request , response) =>{
    try{
              await Email.updateOne({_id : request.body.id} , {$set:{starred : request.body.value}})
              return response.status(200).json("email is marked")
    }catch(error){
        console.log(error);
        response.status(500).json(error.message);
    }
}

module.exports = {
    saveSentEmail,
    getEmails,
    saveDraftEmail,
    moveEmailsToBin,
    toggleStarredEmails,
    deleteEmails,
};

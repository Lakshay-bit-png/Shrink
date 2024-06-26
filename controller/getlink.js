const Mapping = require('../model/link');

exports.getMapping= async(req,res)=>{
    if(req.method=="POST"){
        try{
            const {from } = req.body;
            const mapping = await Mapping.findOne({from :from});
            if(mapping){
                if (!mapping.to.startsWith('http://') && !mapping.to.startsWith('https://')) {
                    mapping.to = `https://${mapping.to}`;
                  }
          
                  console.log(mapping);
          
                  res.status(200).json({ success: true, message: "Fetched Successfully", data: mapping });
            }
            else{
                res.status(400).json({success:false,message:"Error Occured Some"})
            }
        }
        catch(error){
            console.log(error);
            res.status(400).json({success:false,message:"Error Occured Some"})
        }
    }
    else{
        res.status(400).json({success:false,message:"Method Not Allowed"})
    }
}



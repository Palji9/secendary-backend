import {v2 as cloudinary} from "cloudinary"

import fs from "fs" 


    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_API_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRECT
    });

    // Upload an image
     
    const uploadOnCloudinary = async (localFilePath) =>{
        try{
            if(!localFilePath){
                return null
            }
            const reponse = await cloudinary.uploader.upload(localFilePath,{
              resource_type : "auto"
            })

            console.log("fi",reponse.url);
            return reponse;

        }catch(error){
            fs.unlinkSync(localFilePath) // remove the locally saved temprarary
            return null
        }
    }

    


    cloudinary.v2.uploader.upload("", {
        public_id: ""
    },
    function(error, result) {
        console.log(result);
    })
   



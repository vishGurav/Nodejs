const nodemiler=require("nodemailer")


let tras=nodemiler.createTransport({


    service:"gmail",
    auth:{
        user:"vish01092001@gmail.com",
        pass:"lxiwxfliqewfptpo"
    }
    
})
let mailInfo=tras.sendMail(
    {
        from:"vish01092001@gmail.com",
        to:"sureshshete89.com",
        subject:"Testing mail..!",
        text:"welcome to node js send mail..",
        html:"<h1>welcome to node js send mail",
        attachments:[
            {
                filename:"VISH_RESUME.pdf",
                path:"C:\Users\vish\Downloads\VISH_RESUME.pdf"
            }
        ]
        
    },()=>
    {
        console.log("mail send successfully..");
    }
)
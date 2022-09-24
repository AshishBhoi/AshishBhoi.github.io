import mail from "@sendgrid/mail";

const API_KEY = process.env.SENDGRID_API_KEY

export default function handler(req, res) {
    mail.setApiKey(API_KEY)
    if (req.method === "POST") {
        try {
            const body = req.body
            const message = `
            Name: ${body.first_name} ${body.middle_name} ${body.last_name}rn
            Email: ${body.email_id}rn
            Message: ${body.message}
            `
            const message_subject = body.subject
            const message_email = body.email_id

            // console.log(message)
            // res.status(200).json({status: 'success', message: 'Contact message sent'})


            mail.send({
                to: 'ashish@ashishbhoi.com',
                cc: message_email,
                from: 'no-reply@ashishbhoi.com',
                subject: message_subject,
                text: message,
                html: message.replace(/rn/g, '<br />')
            }).then(() => {
                res.status(200).json({status: 'Ok', message: 'Contact message sent'})
            }, error => {
                res.status(404).json({status: 'NotOk', message: error.response.body})
            })
        } catch (e) {
            res.status(405).json({status: 'NotOk', message: "Unable to send mail"})
        }
    } else {
        res.status(405).json({status: 'NotOk', message: "Not a post Method"})
    }
}
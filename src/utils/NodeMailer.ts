import * as nodeMailer from 'nodemailer';
import * as SendGrid from 'nodemailer-sendgrid-transport'


export class NodeMailer {

    private static initializeTransport() {
        return nodeMailer.createTransport(SendGrid({
            auth: {
                api_key: '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'
            }
        }))
    }


    static sendEmail(data: { to: [string], subject: string, html: string }) {
       NodeMailer.initializeTransport().sendMail({
           from:'kavishsoam1@gmail.com',
           to:['kavishsoam1@gmail.com'],
           subject:data.subject,
           html:data.html
       })
    }

}
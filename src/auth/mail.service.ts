import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.mailgun.org',
      port: 587,
      secure: false, // Set it to true for SSL/TLS connections
      auth: {
        user: 'postmaster@sandbox05f5d0d9ea9341a7b52781e61f078aee.mailgun.org',
        pass: 'db2609a4a02dbd9d88d77621642c71ac-6d1c649a-5fa2e945',
      },
    });
  }

  async sendVerificationEmail(to: string, verificationCode: string) {
    await this.transporter.sendMail({
      from: 'dybysbayd@gmail.com',
      to,
      subject: 'Email Verification',
      text: `Your verification code is: ${verificationCode}`,
    });
  }
}

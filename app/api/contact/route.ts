import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, email, company, phone, message } = body

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        const fromEmail = process.env.SENDGRID_FROM_EMAIL || 'no-reply@em7070.nizsoft.cloud'
        const toEmail = process.env.SENDGRID_TO_EMAIL || 'badushahussain1@gmail.com'

        // Email to admin with demo request details
        const adminEmail = {
            to: toEmail,
            from: fromEmail,
            subject: `New Demo Request from ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0066ff;">New Demo Request</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px;">
            Received on ${new Date().toLocaleString()}
          </p>
        </div>
      `,
        }

        // Confirmation email to user
        const userEmail = {
            to: email,
            from: fromEmail,
            subject: 'Thank you for your interest in NIZSOFT',
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0066ff;">Thank You for Contacting NIZSOFT</h2>
          <p>Hi ${name},</p>
          <p>Thank you for your interest in NIZSOFT's insurance platform. We've received your demo request and our team will get back to you shortly.</p>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Your Request Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          <p>In the meantime, feel free to explore our platform features and documentation.</p>
          
          <p>Best regards,<br/>
          <strong>The NIZSOFT Team</strong></p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
          <p style="color: #666; font-size: 12px;">
            NIZSOFT Technology LLC<br/>
            Production-ready insurance platform<br/>
            Built in Abu Dhabi for global insurers
          </p>
        </div>
      `,
        }

        // Send both emails
        await sgMail.send(adminEmail)
        await sgMail.send(userEmail)

        return NextResponse.json(
            { message: 'Emails sent successfully' },
            { status: 200 }
        )
    } catch (error: any) {
        console.error('SendGrid Error:', error)

        return NextResponse.json(
            {
                error: 'Failed to send email',
                details: error.message
            },
            { status: 500 }
        )
    }
}

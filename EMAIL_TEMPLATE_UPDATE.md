# Updated Email Template - No Emojis

## Replace the email template in your Google Apps Script with this clean version:

### HTML Email Template (createConfirmationEmailHTML function):

```javascript
function createConfirmationEmailHTML(name) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
      <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #1f2937; margin: 0; font-size: 24px;">AWS Cloud Training</h1>
          <p style="color: #6b7280; margin: 5px 0 0 0;">Registration Confirmed</p>
        </div>
        
        <h2 style="color: #1f2937; margin-bottom: 20px;">Dear ${name},</h2>
        
        <p style="color: #4b5563; line-height: 1.6; margin-bottom: 20px;">
          We're thrilled to inform you that your registration has been successfully confirmed for the AWS Cloud Enablement Training!
        </p>
        
        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f97316;">
          <h3 style="margin: 0 0 10px 0; color: #1f2937;">Training Schedule</h3>
          <p style="margin: 0; color: #4b5563; font-weight: 500;">
            The training sessions will officially begin from <strong>1st September 2025, evening 7:00 PM onwards</strong>.
          </p>
          <p style="margin: 10px 0 0 0; color: #4b5563;">
            Please ensure you're available and ready to kick-start this transformative journey.
          </p>
        </div>
        
        <div style="background: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
          <h3 style="margin: 0 0 10px 0; color: #1f2937;">WhatsApp Group</h3>
          <p style="margin: 0 0 15px 0; color: #4b5563;">
            To keep you informed and connected, we've created an official WhatsApp group exclusively for registered participants. 
            All important updates, announcements, and support will be shared there.
          </p>
          <div style="text-align: center;">
            <p style="margin: 0 0 10px 0; color: #4b5563; font-weight: 500;">Join the group now:</p>
            <a href="${CONFIG.WHATSAPP_LINK}" 
               style="display: inline-block; background: linear-gradient(135deg, #25d366, #128c7e); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 10px 0;">
              Join WhatsApp Group
            </a>
            <p style="margin: 10px 0 0 0; color: #6b7280; font-size: 14px;">
              <strong>Note:</strong> This group is strictly for confirmed participants. Please do not share the link externally.
            </p>
          </div>
        </div>
        
        <p style="color: #4b5563; line-height: 1.6; margin-bottom: 20px;">
          We look forward to learning and building together with AWS!
        </p>
        
        <p style="color: #4b5563; line-height: 1.6; margin-bottom: 20px;">
          If you have any questions, feel free to reply to this email.
        </p>
        
        <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px;">
          <p style="margin: 0; color: #6b7280; font-size: 14px;">
            Warm regards,<br>
            <strong>${CONFIG.SENDER_NAME}</strong><br>
            <span style="color: #f97316;">${CONFIG.SENDER_EMAIL}</span>
          </p>
        </div>
      </div>
    </div>
  `;
}
```

### Plain Text Email Template (createConfirmationEmailPlainText function):

```javascript
function createConfirmationEmailPlainText(name) {
  return `Dear ${name},

We're thrilled to inform you that your registration has been successfully confirmed for the AWS Cloud Enablement Training!

Training Schedule:
The training sessions will officially begin from 1st September 2025, evening 7:00 PM onwards.
Please ensure you're available and ready to kick-start this transformative journey.

WhatsApp Group:
To keep you informed and connected, we've created an official WhatsApp group exclusively for registered participants. All important updates, announcements, and support will be shared there.

Join the group now:
WhatsApp Group Link - ${CONFIG.WHATSAPP_LINK}

Note: This group is strictly for confirmed participants. Please do not share the link externally.

We look forward to learning and building together with AWS!
If you have any questions, feel free to reply to this email.

Warm regards,
${CONFIG.SENDER_NAME}
${CONFIG.SENDER_EMAIL}`;
}
```

## Key Changes Made:

1. **Removed all emojis** from the email template
2. **Replaced emojis with plain text** alternatives:
   - 🎓 → "AWS Cloud Training"
   - 🚀 → "Training Schedule"
   - 📱 → "WhatsApp Group"
   - 🔗 → "Join WhatsApp Group"
   - 📧 → Removed completely

3. **Maintained professional formatting** with clean HTML structure
4. **Preserved all functionality** and links
5. **Kept consistent styling** and branding

## How to Update:

1. Go to your Google Apps Script project
2. Find the `createConfirmationEmailHTML` function
3. Replace it with the code above
4. Find the `createConfirmationEmailPlainText` function
5. Replace it with the code above
6. Save and redeploy your script

This will ensure that emails are sent without any emoji characters that might display as question marks or boxes in email clients. 
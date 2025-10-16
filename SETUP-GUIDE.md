# Wolf City Website - Setup Guide

## 📸 Part 1: Adding Team Member Photos

### How to Add Photos:

1. **Prepare your photos:**
   - Get professional headshots of your team members
   - Recommended size: 400x400 pixels (square format)
   - Save as JPG or PNG
   - Keep file size under 500KB

2. **Name your photos:**
   - `person1.jpg` - Jennifer Martinez (or your actual team member)
   - `person2.jpg` - David Patterson
   - `person3.jpg` - Sarah Kim
   - `person4.jpg` - Robert Williams
   - `person5.jpg` - Lisa Chen
   - `person6.jpg` - Michael Johnson

3. **Upload photos:**
   - Place all photos in the `images/team/` folder
   - Upload to GitHub:
     - Go to your repository: https://github.com/Jasurbek-Sharofiddinov/wolf-city-website
     - Navigate to `images/team/` folder
     - Click "Add file" → "Upload files"
     - Drag your photos and commit

4. **Update team member information:**
   - Open `index.html`
   - Find the "Experts Section" (around line 309)
   - Change names, titles, and descriptions to match your real team

**Note:** If you don't add photos, the website will show initials in colored circles (which looks professional too!).

---

## 📋 Part 2: Setting Up Google Forms for Contact Submissions

### Step-by-Step Instructions:

### **Step 1: Create Your Google Form**

1. Go to [https://forms.google.com](https://forms.google.com)
2. Click **"+ Blank"** to create a new form
3. Name it: "Wolf City Contact Form"

### **Step 2: Add Form Fields**

Add these questions in **SHORT ANSWER** format:

1. **Full Name** (Required)
2. **Email Address** (Required)
3. **Phone Number** (Required)
4. **Company Name** (Required)
5. **Fleet Size** (Dropdown with options):
   - 1-3 trucks
   - 4-10 trucks
   - 11-25 trucks
   - 26-50 trucks
   - 50+ trucks
6. **Services Interested In** (Dropdown with options):
   - Full Service Package
   - Bookkeeping Only
   - Payroll Services
   - IFTA Reporting
   - Tax Preparation
   - Other / Not Sure
7. **Additional Information** (PARAGRAPH format - optional)

### **Step 3: Get Form Entry IDs**

1. Click the **three dots** (⋮) in top right
2. Select **"Get pre-filled link"**
3. Fill out the form with test data (e.g., "test", "test@email.com", etc.)
4. Click **"Get Link"** at the bottom
5. Copy the entire URL - it will look like:
   ```
   https://docs.google.com/forms/d/e/FORM_ID/viewform?usp=pp_url&entry.123456789=test&entry.987654321=test@email.com...
   ```

6. From this URL, extract the entry IDs:
   - Find `entry.XXXXXXXXX` numbers
   - You'll have 7 entry IDs (one for each field)

### **Step 4: Update Your Website**

1. Open `index.html` in your project
2. Find line ~630: `<form id="contactForm" class="contact-form" data-google-form-url="">`
3. Replace the URL with your Google Form action URL:
   ```html
   data-google-form-url="https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse"
   ```

   **How to get the formResponse URL:**
   - Take your form URL: `https://docs.google.com/forms/d/e/FORM_ID/viewform`
   - Change `/viewform` to `/formResponse`

4. Open `script.js`
5. Find the `sendToGoogleForms` function (around line 205)
6. Replace the entry IDs with YOUR actual entry IDs:

```javascript
formDataObj.append('entry.YOUR_NAME_ID', formData.name);
formDataObj.append('entry.YOUR_EMAIL_ID', formData.email);
formDataObj.append('entry.YOUR_PHONE_ID', formData.phone);
formDataObj.append('entry.YOUR_COMPANY_ID', formData.company);
formDataObj.append('entry.YOUR_FLEET_ID', formData.fleetSize);
formDataObj.append('entry.YOUR_SERVICE_ID', formData.service);
formDataObj.append('entry.YOUR_MESSAGE_ID', formData.message);
```

### **Example:**

If your pre-filled URL looks like this:
```
...&entry.123456=John&entry.789012=john@email.com&entry.345678=555-1234...
```

Then update your code like this:
```javascript
formDataObj.append('entry.123456', formData.name);        // Name field
formDataObj.append('entry.789012', formData.email);       // Email field
formDataObj.append('entry.345678', formData.phone);       // Phone field
// ... and so on for all fields
```

### **Step 5: Link to Google Sheets**

1. In your Google Form, click "Responses" tab
2. Click the Google Sheets icon (📊)
3. Click "Create" - this creates a spreadsheet with all submissions
4. You'll get real-time updates whenever someone submits the form!

### **Step 6: Set Up Email Notifications (Optional)**

1. Open your Google Sheet (responses)
2. Go to **Extensions** → **Apps Script**
3. Paste this code:

```javascript
function onFormSubmit(e) {
  var email = "jasurbeksharofiddinov62@gmail.com";
  var subject = "New Wolf City Contact Form Submission";

  var name = e.values[1];        // Column B (adjust if needed)
  var emailFrom = e.values[2];   // Column C
  var phone = e.values[3];       // Column D
  var company = e.values[4];     // Column E
  var fleet = e.values[5];       // Column F
  var service = e.values[6];     // Column G
  var message = e.values[7];     // Column H

  var body = "New contact form submission:\n\n" +
             "Name: " + name + "\n" +
             "Email: " + emailFrom + "\n" +
             "Phone: " + phone + "\n" +
             "Company: " + company + "\n" +
             "Fleet Size: " + fleet + "\n" +
             "Service: " + service + "\n" +
             "Message: " + message;

  MailApp.sendEmail(email, subject, body);
}
```

4. Click the clock icon (⏰) "Triggers"
5. Click "+ Add Trigger"
6. Set:
   - Function: `onFormSubmit`
   - Event source: "From spreadsheet"
   - Event type: "On form submit"
7. Save and authorize

Now you'll get an email every time someone fills out the form!

---

## 🚀 Part 3: Deploying Updates to GitHub Pages

After making changes:

```bash
cd C:/Users/user/trucking-accounting-website
git add .
git commit -m "Update team photos and Google Forms integration"
git push origin main
```

Your live website will update automatically in 1-2 minutes!

---

## ✅ Testing Your Setup

1. **Test locally first:**
   - Open `index.html` in your browser
   - Fill out the contact form
   - Check your Google Sheet for the submission

2. **Test live:**
   - Visit: https://jasurbek-sharofiddinov.github.io/wolf-city-website/
   - Fill out the form
   - Check your Google Sheet

---

## 🆘 Troubleshooting

### Form not submitting to Google Sheets?
- Double-check your entry IDs in `script.js`
- Make sure you used `/formResponse` not `/viewform`
- Check browser console for errors (F12)

### Photos not showing?
- Make sure photos are named exactly: `person1.jpg`, `person2.jpg`, etc.
- Check they're in the `images/team/` folder
- Clear browser cache (Ctrl+F5)

### Website not updating?
- Wait 2-3 minutes after pushing to GitHub
- Clear cache and refresh
- Check GitHub Actions tab for build status

---

## 📞 Need Help?

Your website is at: **https://jasurbek-sharofiddinov.github.io/wolf-city-website/**

If you have issues, check:
1. Google Form is published and accepting responses
2. Entry IDs match exactly (case-sensitive)
3. Photos are in correct folder with correct names

---

## 🎉 You're All Set!

Once configured:
- ✅ Team photos will display (or initials if no photo)
- ✅ Form submissions go to Google Sheets
- ✅ You get email notifications (if configured)
- ✅ Website is live and professional!

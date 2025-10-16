# TruckBooks Pro - Trucking Accounting Website

A professional, modern website for an accounting company that serves US trucking companies. Features a clean design, responsive layout, and interactive contact form.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Service Showcase**: Detailed information about all accounting services
- **Transparent Pricing**: Three pricing tiers with clear feature lists
- **Client Testimonials**: Real testimonials from satisfied trucking company clients
- **Contact Form**: Fully validated contact form with real-time error checking
- **Interactive Elements**: Hover effects, smooth scrolling, and engaging animations

## Services Highlighted

1. Profit & Loss Reports
2. Cash Flow Management
3. Financial Statements
4. Payroll Services
5. IFTA Reporting
6. Tax Preparation

## File Structure

```
trucking-accounting-website/
├── index.html          # Main HTML file
├── styles.css          # All styling and responsive design
├── script.js           # Interactive features and form validation
└── README.md           # This file
```

## How to Use

### Local Development

1. Simply open `index.html` in any modern web browser
2. No build process or dependencies required
3. All files are standalone HTML, CSS, and JavaScript

### Customization

#### Update Company Information

Edit `index.html` and update:
- Company name (search for "TruckBooks Pro")
- Phone number: `(800) 555-BOOK`
- Email: `info@truckbookspro.com`
- Location: `Chicago, IL`

#### Change Colors

Edit `styles.css` and modify the CSS variables in the `:root` section:

```css
:root {
    --primary-color: #2563EB;     /* Main brand color */
    --primary-dark: #1E40AF;      /* Darker shade */
    --secondary-color: #0F172A;   /* Secondary color */
    /* ... more variables */
}
```

#### Modify Pricing

Edit the pricing section in `index.html`:
- Change prices
- Add/remove features
- Modify plan names

#### Update Services

Edit the services section in `index.html`:
- Add new services
- Modify descriptions
- Change icons (using emoji or add custom icons)

#### Customize Testimonials

Edit testimonials in `index.html`:
- Change client names and companies
- Update testimonial text
- Modify ratings

### Form Submission

The contact form currently logs data to the browser console. To connect it to a backend:

1. Open `script.js`
2. Find the `sendFormData()` function
3. Uncomment and modify the fetch API call to point to your server endpoint

Example:
```javascript
fetch('https://your-api.com/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
```

### Deployment

#### GitHub Pages
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://yourusername.github.io/repository-name`

#### Netlify
1. Create account at netlify.com
2. Drag and drop the entire folder
3. Site will be live immediately

#### Traditional Hosting
1. Upload all files to your web hosting via FTP
2. Ensure `index.html` is in the root directory
3. Visit your domain

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Form Validation

The contact form includes validation for:
- Required fields
- Email format
- Phone number format (US formats)
- Real-time error messages
- Auto-formatting phone numbers

## Animations

- Smooth scroll navigation
- Fade-in animations for cards
- Hover effects on buttons and cards
- Animated statistics counter
- Button ripple effects
- Floating hero card animation

## Customization Tips

1. **Add Your Logo**: Replace the SVG logo in the navbar with your company logo
2. **Add Images**: Replace emoji icons with real images for a more professional look
3. **Connect Analytics**: Add Google Analytics or similar tracking code
4. **Add Chat Widget**: Integrate live chat support
5. **SEO**: Add meta tags for better search engine optimization

## Support

For questions or issues with this website template, please refer to standard HTML/CSS/JavaScript documentation.

## License

This template is provided as-is for your use. Feel free to modify and customize as needed.

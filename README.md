# Man on Adventure Safari Website

A premium safari tourism website for Man on Adventure Safari, showcasing Tanzania's most spectacular wildlife experiences and safari packages.

## 🌍 About

Man on Adventure Safari is a professional tourism website featuring:
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Modern Animations**: Smooth scroll reveals, parallax effects, and interactive elements
- **Safari Theme**: Earth-tone colors inspired by African landscapes
- **Premium Features**: Gallery lightbox, testimonial carousel, booking forms, and more

## 🦁 Features

### Navigation
- Sticky navigation bar with smooth scrolling
- Mobile-responsive hamburger menu
- Active section highlighting

### Hero Section
- Full-screen safari background with parallax effect
- Animated headline text with fade-in effects
- Call-to-action button with hover animations

### Safari Packages
- Interactive cards for Serengeti, Ngorongoro, Tarangire, and Kilimanjaro
- Hover animations and smooth transitions
- Direct booking integration

### Wildlife Gallery
- Grid layout with zoom effects
- Lightbox popup for full-size viewing
- Responsive image gallery

### Testimonials
- Auto-sliding carousel
- Client reviews with ratings
- Touch-enabled for mobile devices

### Booking System
- Comprehensive booking form
- Form validation and error handling
- Success/error messaging

### Contact Section
- Company information and location
- WhatsApp integration
- Embedded Google Maps

## 🎨 Design Elements

### Color Palette
- **Primary Gold**: #d4af37
- **Safari Green**: #2d5016
- **Earth Brown**: #8b4513
- **Sand**: #f4e4c1
- **Charcoal**: #2c2c2c

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Animations
- Scroll reveal animations
- Parallax hero background
- Hover effects on cards and buttons
- Smooth transitions throughout

## 📁 Project Structure

```
man-on-adventure/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Complete styling with animations
├── js/
│   └── script.js       # Interactive features and functionality
├── images/             # Image assets
└── README.md          # This file
```

## 🚀 Getting Started

### Option 1: Direct File Access
Simply open `index.html` in your web browser to view the website.

### Option 2: Local Server (Recommended)
For the best experience, serve the files through a local web server:

#### Using Python:
```bash
cd man-on-adventure
python -m http.server 3000
```

#### Using Node.js:
```bash
cd man-on-adventure
npx serve .
```

#### Using PHP:
```bash
cd man-on-adventure
php -S localhost:3000
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and accessibility
- **CSS3**: Modern styling with animations and transitions
- **Vanilla JavaScript**: Interactive features and functionality
- **Font Awesome**: Icon library
- **Google Fonts**: Typography (Playfair Display & Inter)
- **Unsplash**: High-quality placeholder images

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 767px and below

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## ⚡ Performance Features

- Lazy loading for images
- Debounced scroll events
- Optimized animations
- Minimal external dependencies
- Clean, well-structured code

## 🔧 Customization

### Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary-gold: #d4af37;
    --safari-green: #2d5016;
    /* ... other colors */
}
```

### Content
Update the HTML content in `index.html`:
- Company information
- Safari package details
- Contact information
- Testimonials

### Images
Replace placeholder images in the `images/` folder and update image paths in `index.html`.

## 📞 Contact Information

Update the contact details in the HTML:
- Phone numbers
- Email addresses
- Physical address
- Social media links

## 🗺️ Google Maps

Replace the Google Maps iframe in the contact section with your actual location:
```html
<iframe src="YOUR_GOOGLE_MAPS_EMBED_URL"></iframe>
```

## 📸 WhatsApp Integration

Update the WhatsApp button with your actual phone number:
```html
<a href="https://wa.me/YOUR_PHONE_NUMBER"></a>
```

## 🎯 SEO Optimization

The website includes:
- Semantic HTML5 structure
- Meta descriptions and titles
- Alt text for images
- Proper heading hierarchy
- Clean URL structure

## 🔒 Security Considerations

- No sensitive information in client-side code
- Form validation on both client and server side (when implementing backend)
- HTTPS recommended for production

## 🚀 Deployment

### Static Hosting Options:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting

### Steps:
1. Upload all files to your hosting provider
2. Ensure the server serves `index.html` as the default page
3. Test all functionality
4. Update domain and SSL settings

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Created with ❤️ for Man on Adventure Safari**
*Experience the wild heart of Africa*

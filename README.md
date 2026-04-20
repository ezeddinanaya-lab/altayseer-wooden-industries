# Al Tayseer Wooden Industries — Website

A professional, luxury-aesthetic website for **Al Tayseer Wooden Industries**, built with pure HTML, CSS, and JavaScript — no frameworks, no build tools, fully ready to deploy.

---

## 📁 File Structure

```
altayseer-wooden-industries/
├── index.html          ← Main HTML (all sections)
├── css/
│   └── style.css       ← Full stylesheet (variables, layout, animations)
├── js/
│   └── main.js         ← Interactions, slider, form, cursor, reveals
├── images/             ← Add your images here (see list below)
└── README.md
```

---

## 🖼️ Images to Add

Place your own images in the `/images/` folder with these filenames:

| Filename                   | Used In                        | Recommended Size |
|---------------------------|--------------------------------|-----------------|
| `about-workshop.jpg`       | About section                 | 800×600         |
| `product-living.jpg`       | Living Room product card      | 800×500         |
| `product-bedroom.jpg`      | Bedroom product card          | 600×400         |
| `product-decor.jpg`        | Décor product card            | 600×400         |
| `product-kitchen.jpg`      | Kitchen product card          | 600×400         |
| `product-office.jpg`       | Office product card           | 600×400         |
| `product-flooring.jpg`     | Flooring product card         | 600×400         |
| `gallery-1.jpg`            | Gallery (tall)                | 600×800         |
| `gallery-2.jpg`            | Gallery                       | 600×400         |
| `gallery-3.jpg`            | Gallery                       | 600×400         |
| `gallery-4.jpg`            | Gallery (wide)                | 900×400         |
| `gallery-5.jpg`            | Gallery                       | 600×400         |
| `gallery-6.jpg`            | Gallery                       | 600×400         |
| `favicon.ico`              | Browser tab icon              | 32×32           |

> 💡 **Tips:** Use royalty-free wood/furniture photos from [Unsplash](https://unsplash.com/s/photos/wood-furniture), [Pexels](https://pexels.com), or your own photography. Compress all images with [TinyPNG](https://tinypng.com) before uploading.

---

## ✏️ Customization Guide

### Update Contact Details
In `index.html`, find the **Contact** section and update:
```html
<span>Industrial Area, Abu Dhabi, UAE</span>   ← Your address
<span>+971 XX XXX XXXX</span>                  ← Your phone
<span>info@altayseer.ae</span>                 ← Your email
<span>Sun – Thu: 8:00 AM – 6:00 PM</span>     ← Your hours
```

### Update Social Links
In `index.html`, footer section:
```html
<li><a href="#">Instagram</a></li>   ← Replace # with your profile URLs
<li><a href="#">Facebook</a></li>
```

### Change Colors
In `css/style.css`, edit the `:root` variables:
```css
:root {
  --cream:  #F5F0E8;   /* Page background */
  --bark:   #2A1F14;   /* Dark sections */
  --gold:   #C4956A;   /* Accent / brand color */
}
```

### Connect the Contact Form
The form currently simulates a send. To make it real, use one of:

**Option A — Formspree (easiest, free):**
1. Sign up at https://formspree.io
2. Create a form, get your endpoint URL
3. In `index.html`, change `<form class="contact-form" id="contactForm" novalidate>` to:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_ID" method="POST" novalidate>
   ```
4. In `js/main.js`, replace the `setTimeout` block inside the submit handler with an actual fetch call.

**Option B — EmailJS (client-side email):**
See https://www.emailjs.com/docs/

---

## 🚀 Deploy to GitHub Pages

```bash
# 1. Clone your repository
git clone https://github.com/ezeddinanaya-lab/altayseer-wooden-industries.git
cd altayseer-wooden-industries

# 2. Copy all website files into the repo
#    (copy index.html, css/, js/, images/ into this folder)

# 3. Add all files
git add .

# 4. Commit
git commit -m "Initial website launch 🪵"

# 5. Push to main branch
git push origin main

# 6. Enable GitHub Pages:
#    → Go to your repo on GitHub
#    → Settings → Pages
#    → Source: Deploy from branch → main → / (root)
#    → Save

# Your site will be live at:
# https://ezeddinanaya-lab.github.io/altayseer-wooden-industries/
```

---

## 🌐 Custom Domain (Optional)

If you have a domain (e.g. `altayseer.ae`):
1. In your repo, create a file called `CNAME` with just your domain inside:
   ```
   altayseer.ae
   ```
2. In your domain DNS settings, add a CNAME record:
   - Name: `www`
   - Value: `ezeddinanaya-lab.github.io`
3. Add an A record pointing to GitHub Pages IPs.

---

## 🛠️ Sections Overview

| Section          | ID              | Description                                     |
|-----------------|-----------------|------------------------------------------------|
| Hero            | `#home`         | Full-screen dark hero with animated rings      |
| About           | `#about`        | Story, stats, and USPs                         |
| Products        | `#products`     | 6-card grid (furniture, décor, flooring)       |
| Craftsmanship   | `#craftsmanship`| Dark section with 4-step process               |
| Gallery         | `#gallery`      | 6-image masonry-style portfolio grid           |
| Testimonials    | Auto-slides     | 3 client quotes with auto-advance slider       |
| Contact         | `#contact`      | Info + enquiry form                            |

---

## ✅ Features Included

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Custom animated cursor (desktop)
- ✅ Page loader with progress bar
- ✅ Sticky nav with scroll-aware active states
- ✅ Mobile hamburger menu
- ✅ Scroll reveal animations on all elements
- ✅ Parallax hero rings
- ✅ Auto-advancing testimonials slider (touch swipe on mobile)
- ✅ Contact form with success state
- ✅ Back-to-top button
- ✅ Animated ticker banner
- ✅ Zero dependencies (pure HTML/CSS/JS)
- ✅ Google Fonts (Cormorant Garamond + Jost)

---

Built for Al Tayseer Wooden Industries © 2025

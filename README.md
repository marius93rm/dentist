# Dentist Website Template

A responsive single-page dental and healthcare landing page built with static HTML, CSS, and JavaScript. The template showcases services, team members, pricing, testimonials, FAQs, and blog teasers, making it suitable for clinics, medical practices, and appointment-driven businesses.

## Preview

Open `index.html` in a browser to explore the live template:

```bash
# From the project root
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows
```

> The template relies on local assets only, so no build step is required.

## Features

- **Hero and booking CTA** with appointment button and contact details prominently displayed.
- **Services highlights** featuring icons, descriptions, and pricing details for multiple medical specialties.
- **Doctor profiles** with social links, schedules, and specialization tags.
- **Testimonials slider** powered by Chocolat and custom JavaScript for patient reviews.
- **FAQ accordion** leveraging Bootstrap's collapse behavior.
- **Blog/news section** with thumbnail cards and metadata.
- **Newsletter subscription form** and footer with quick links and contact information.

## Technology Stack

- **HTML5** for layout and semantic structure (`index.html`).
- **CSS3** via `style.css`, `css/bootstrap.min.css`, and vendor styles for theming and responsive design.
- **JavaScript** with `js/script.js`, jQuery, Bootstrap bundle, Modernizr, and Chocolat for interactivity and component behavior.
- **Assets** served from the `images/` directory and plugin bundles under `plugins/`.

## Project Structure

```
.
├── index.html          # Main landing page
├── style.css           # Custom theme styles
├── css/                # Bootstrap and vendor CSS
├── js/                 # jQuery, Bootstrap bundle, custom scripts
├── images/             # Site imagery and icons
└── plugins/            # Third-party libraries (Bootstrap, Chocolat)
```

## Customization

1. **Branding**: Replace logos in `images/` and update colors/typography in `style.css`.
2. **Content**: Edit the relevant sections inside `index.html` to adjust copy, service listings, schedules, pricing, and FAQs.
3. **Images**: Swap out hero, service, and testimonial images in `images/` to reflect your brand.
4. **Scripts**: Modify `js/script.js` if you need to tweak interactive behaviors (e.g., sliders, accordions).

## License

The template is provided as-is without an explicit license. Verify the original author's terms (TemplatesJungle) before using it in production.

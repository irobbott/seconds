# Seconds Pixels  
Website for Seconds Pixels Photography brand

🔒 This project is proprietary. Please do not use or copy any part of the code without permission. See LICENSE for details.

## Project Overview
A minimalistic black-and-white photography website featuring:
- Fullscreen landing page layout
- Clean URLs via `.htaccess` (no `.php` or `.html` extensions)
- Responsive design with custom fonts
- Lazy-loading of images
- SEO-optimized metadata and structured data
- Integration with Cloudinary for image delivery (optional)
- Contact form using PHP (server-side handling)

## Development Notes

### Directory
- Project lives under:  
  `http://localhost/secondspixels/` (for local development)

### Fonts
- Custom font used: `Gallery`
- Formats included: `.woff`, `.woff2`
- Defined using `@font-face` in CSS

### URL Rewriting (`.htaccess`)
- Clean URLs are implemented with Apache’s `mod_rewrite`.
- File extensions `.php` and `.html` are removed from URLs.
- `.php` or `.html` visits redirect to extensionless paths (e.g., `/home.php` ➜ `/home`).

**Important:**  
If moving from local development (`/secondspixels/`) to production (root domain), update this line in `.htaccess`:

```apache
# Local (in XAMPP)
RewriteBase /secondspixels/

# Production (live domain)
RewriteBase /
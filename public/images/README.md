# Images Directory

This directory contains all static images for the portfolio website.

## Directory Structure

```
images/
├── projects/           # Project preview images
│   ├── order-management.png
│   ├── url-shortener.png
│   ├── notification-service.png
│   ├── auth-service.png
│   ├── data-pipeline.png
│   └── api-gateway.png
├── badges/             # Certification badges
│   ├── oracle-java-certified.png
│   └── aws-cloud-practitioner.png
├── og-image.png        # Open Graph image for social sharing
└── profile/            # Profile photos (optional)
```

## Project Images Guidelines

For best results, project images should be:
- **Dimensions**: 1200x630px (16:9 ratio) or 1200x800px
- **Format**: PNG or WebP for transparency, JPG for photos
- **File size**: Under 200KB for optimal loading
- **Content suggestions**:
  - Architecture diagrams
  - Application screenshots
  - Dashboard previews
  - Code snippets with syntax highlighting
  - System flow diagrams

## Adding New Project Images

1. Create or capture your project screenshot/diagram
2. Optimize the image (use tools like TinyPNG or Squoosh)
3. Save with descriptive kebab-case filename
4. Add the image path to the project data in `src/data/projects.ts`

## Tools for Creating Project Images

- **Architecture diagrams**: draw.io, Excalidraw, Lucidchart
- **Screenshots**: Cleanshot, Shottr
- **Code images**: Carbon.now.sh, Ray.so
- **Image optimization**: TinyPNG, Squoosh

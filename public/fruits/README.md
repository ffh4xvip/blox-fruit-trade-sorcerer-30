# Fruit Images Directory

This directory contains all the fruit images for the application.
Images should be named exactly as the fruit name (case-sensitive) with .webp extension.

Example:
- Rocket.webp
- Spin.webp
- Blade.webp

## How to add new fruits

1. Add the new fruit entry to `/public/fruits.json` with the following properties:
   - name: The name of the fruit (case-sensitive)
   - physicalValue: The physical value of the fruit
   - permanentValue: The permanent value of the fruit
   - category: One of "Common", "Uncommon", "Rare", "Legendary", or "Mythical"

2. Add the corresponding fruit image to this directory:
   - Image must be in WebP format
   - Filename must match the fruit name exactly (case-sensitive) with .webp extension
   - Example: If your fruit is named "Dragon", the image should be "Dragon.webp"

The application will automatically load the new fruit and its image once both files are in place.
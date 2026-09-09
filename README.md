# ROOT CRUNCH — Natural Vegetable Chips

> **Rooted in Nature, Made for You.**  
> *Official Brand Website & Interactive Digital Showcase*

---

## 🌿 Brand Overview

**ROOT CRUNCH** is a premium Sri Lankan snack brand producing wholesome, oven-baked natural vegetable chips. Harvested directly from island-grown family farms, our root vegetables—**Carrot**, **Lotus Root (Nelum Ala)**, **Kohila Ala (Elephant Foot Yam)**, and **Sweet Potato**—are sliced to thin perfection, lightly seasoned with sea salt and natural spices, and baked to crunchy goodness.

This repository contains the static web platform built to showcase the product's nutritional transparency, craft story, interactive packaging viewer, and brand identity.

---

## ⚡ Core Value Pillars

- 🥕 **100% Real Vegetables**: Whole tropical root crops, free from re-constituted vegetable pastes or fillers.
- 🔥 **Baked, Not Fried**: Oven-roasted with premium rice bran oil for a delicate crisp snap with 70% less grease than traditional potato chips.
- 🌾 **High Dietary Fibre**: Packed with 7.6g of natural prebiotic fibre per 100g to support gut wellness.
- 🌱 **Clean Label Guarantee**: Zero synthetic preservatives, artificial colours, or MSG.
- 🇱🇰 **Proudly Sri Lankan**: Directly supporting local agricultural communities and eco-friendly farming practices.

---

## 🚀 Website Features & User Experience

1. **Interactive Packaging Inspector**
   - Toggle between **Front of Pack** pouch view and **Chips Close-Up** bowl view.
   - Interactive packaging hotspots (`1: Carrot`, `2: Lotus Root`, `3: Kohila Ala`, `4: Sweet Potato`) navigating directly to detailed crop nutrition cards.

2. **Dynamic FDA Nutrition Information Calculator**
   - Portion switcher recalculates nutritional values instantly for:
     - `Per 100g` (450 kcal | 6g Protein | 18g Fat | 8g Fibre)
     - `Per 50g` (Small Pack) (225 kcal | 3g Protein | 9g Fat | 4g Fibre)
     - `Per 150g` (Large Pack) (675 kcal | 9g Protein | 27g Fat | 12g Fibre)

3. **Artisanal Design System**
   - Color palette extracted directly from physical kraft paper packaging:
     - `--bg-kraft`: `#F4EFE6` (Warm Paper Texture)
     - `--brand-green`: `#264D2B` (Botanical Forest Green)
     - `--accent-carrot`: `#D86528` (Terracotta Amber)
     - `--accent-purple`: `#8C2D43` (Lotus & Beet Red)
     - `--accent-sweetpotato`: `#D99A29` (Golden Sweet Potato)
   - Custom linocut vector stamps for feature badges.

4. **Community & Business Integration**
   - Instagram feed grid (`@rootcrunch.lk`).
   - Newsletter subscription ("Crunch Club") with toast notification feedback.
   - Official product barcode (`4 796032 880152`) & Eco pledge badge (`KEEP OUR CITY CLEAN ♻️`).

---

## 📁 Repository Structure

```
Root-Crunch/
├── assets/
│   ├── root_crunch_logo2.jpeg  # Primary brand logo graphic
│   ├── root_crunch_hero.jpg    # Packaging hero showcase image
│   └── root_chips_bowl.jpg     # Baked chips close-up photograph
├── index.html                  # Semantic HTML5 website markup & SVG linework
├── styles.css                  # CSS custom properties, kraft paper styling & layout
├── app.js                      # Vanilla JS interactivity & portion calculator
└── README.md                   # Brand & Technical documentation
```

---

## 💻 Local Development & Deployment

The site is built with pure **HTML5, Vanilla CSS, and JavaScript**, requiring zero complex build chains or node compilation dependencies.

### Option 1: Direct File Access
Simply double-click or open `index.html` in any web browser.

### Option 2: Dev Server
Launch a lightweight local server:
```bash
# Using npx serve
npx serve -l 3000

# Using Python builtin server
python -m http.server 3000
```
Then navigate to `http://localhost:3000`.

---

## 🏬 Product Specifications

| Spec | Value |
| :--- | :--- |
| **Brand Name** | ROOT CRUNCH |
| **Net Weight** | 50g (Small) / 150g (Large) |
| **Origin** | Made in Sri Lanka 🇱🇰 |
| **Barcode** | `4 796032 880152` |
| **Social Handle** | `@rootcrunch.lk` |
| **Storage** | Store in a cool, dry place away from direct sunlight |

### Available Varieties
- **Large Packet (Mix)** - 150g | Rs. 300
- **Small Packet (Mix)** - 50g | Rs. 150
- **Kohila Small Packet** - 50g | Rs. 170

---

© 2026 **ROOT CRUNCH (Pvt) Ltd.** All rights reserved.
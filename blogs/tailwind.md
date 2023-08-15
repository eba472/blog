---
title: 'Learning tailwind fundamentals'
date: '2023-08-12'
---

### Tailwind
**Motto**: Rapidly build modern websites without ever leaving your HTML.
**Usage**: A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

### Advantages:
1. An API for your design system: easy to be consistent
2. Because Tailwind is so low-level, it never encourages you to design the same site twice.
3. Tailwind automatically removes all unused CSS when building for production, which means your final CSS bundle is the smallest it could possibly be.
4. Mobile first, Responsive everything.
5. Hover and focus states? They got ’em.
6. Component-driven: Worried about duplication? Don’t be.
7. Built in dark mode
8. Customize everything inside tailwind.config.js
9. The Tailwind CSS IntelliSense extension for VS Code has you covered.
10. Ready-made components (Expensive)

### Common knowledge
- **Size**:1rem = 16px, 1.125rem = 18px, 1.5rem = 24px
- **Scale** xs, sm, base, lg, xl, 2xl, 3xl, ..., 9xl
- **Arbitrary values**: text-[14px]
- **Single side**: {t|r|b|l,x,y,none}-{size}  top, right, bottom, left, horizontal, vertical, all sides
- **Negative value**: `-mt-8`  prefix the class name with a dash
- **Tailwind scale**: 1 is 0.25rem. ex: m-1
- **Responsive design**: sm:640px, md:768px lg:1024px, xl:1280px, 2xl:1536px, 
  - `md:w-32`: width is 32 for all screen size higher than 768px. Default value for others


### Common classNames
- [font-size](https://tailwindcss.com/docs/font-size)
  - **text-base**: font-size: 1rem, line-height: 1.5rem.     
  - Other values: text-xl etc
  - Setting the custom line-height: `text-base/loose`, 
- [Line height](https://tailwindcss.com/docs/line-height)
  - leading-normal: line-height: 1.5; leading-relaxed	line-height: 1.625;
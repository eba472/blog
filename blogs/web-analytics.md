---
title: 'Web analytics'
date: '2023-08-16'
tags: FrontEnd, Web, Software
---

### FrontEnd important analytics
- Time to First Byte (TTFB): Time between the browser requesting a page and when it receives the first byte of information from the server.
  - Includes: DNS lookup, TCP connection, SSL handshake and HTTPS request.
  - TTFB = responseStart - navigationStart
  - Under **800ms** is good.
- First Contentful Paint (FCP): When the browser renders the first bit of content from the DOM. 
  - First feedback to the user that the page is actually loading
  - Under **1.8s** is good.
- Largest Contentful Paint (LCP): Perceived load speed.
  - Accurate way to measure when the main content of a page is loaded is to look at when the largest element was rendered.
  - Under **2.5s** is good.
- First Input Delay (FID): how much it takes to process after the click etc.
  - Under **100ms** is good.
  - Click and nothing happens is frustrating for users.
- Cumulative Layout Shift (CLS): Layout shift is annoying to users
  - **0.1** or less is good
  - layout shift score = impact fraction * distance fraction
- Interaction to Next Paint (INP): Replace FID in 2024/03
  - INP observes the latency of all interactions a user has made with the page, and reports a single value
  - Under **200ms** is good responsiveness.

### Reference 
- [NextJS Analytics](https://nextjs.org/docs/app/building-your-application/optimizing/analytics)
- [Vercel web analytics quick start](https://vercel.com/docs/concepts/analytics/quickstart)
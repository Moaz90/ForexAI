// public/gtag.js
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
gtag('js', new Date());

// ضع هنا الـ Measurement ID من Google Analytics
gtag('config', 'G-1DW61HRHDL', {
  page_path: window.location.pathname,
});

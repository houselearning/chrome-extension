// Random promo image
const promoImage = document.getElementById("promoImage");
const totalPromos = 4;
let promoIndex = Math.floor(Math.random() * totalPromos) + 1;
promoImage.src = `images/promo${promoIndex}.png`;

// Open all external links in new tab via Chrome
document.querySelectorAll('a[target="_blank"]').forEach(a => {
  a.addEventListener('click', e => {
    chrome.tabs.create({ url: a.href });
    e.preventDefault();
  });
});

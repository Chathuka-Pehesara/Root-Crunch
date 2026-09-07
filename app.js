/**
 * ROOT CRUNCH - Interactive Website Script
 * Modern, responsive functionality for static brand site
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Element References ---
  const toggleFront = document.getElementById('toggle-front');
  const toggleBack = document.getElementById('toggle-back');
  const packImage = document.getElementById('pack-image');
  const hotspotContainer = document.getElementById('hotspot-container');
  const packViewTitle = document.getElementById('pack-view-title');

  // Serving calculation elements
  const btn100g = document.getElementById('btn-100g');
  const btn40g = document.getElementById('btn-40g');
  const btn80g = document.getElementById('btn-80g');

  const valEnergy = document.getElementById('val-energy');
  const valProtein = document.getElementById('val-protein');
  const valFat = document.getElementById('val-fat');
  const valSatFat = document.getElementById('val-satfat');
  const valCarbs = document.getElementById('val-carbs');
  const valFibre = document.getElementById('val-fibre');
  const valSugars = document.getElementById('val-sugars');
  const valSodium = document.getElementById('val-sodium');

  // Newsletter form
  const newsletterForm = document.getElementById('newsletter-form');
  const toast = document.getElementById('toast');

  // --- Front / Back Packaging Switcher ---
  if (toggleFront && toggleBack && packImage) {
    toggleFront.addEventListener('click', () => {
      toggleFront.classList.add('active');
      toggleBack.classList.remove('active');
      packImage.src = 'assets/root_crunch_hero.jpg';
      packImage.alt = 'Root Crunch Packaging Front View';
      if (hotspotContainer) hotspotContainer.style.display = 'block';
      if (packViewTitle) packViewTitle.textContent = 'FRONT OF PACK';
    });

    toggleBack.addEventListener('click', () => {
      toggleBack.classList.add('active');
      toggleFront.classList.remove('active');
      packImage.src = 'assets/root_chips_bowl.jpg';
      packImage.alt = 'Root Crunch Baked Vegetable Chips Bowl';
      if (hotspotContainer) hotspotContainer.style.display = 'none';
      if (packViewTitle) packViewTitle.textContent = 'SERVING SUGGESTION & CHIPS CLOSE-UP';
    });
  }

  // --- Hotspot Clicks (Scroll to Vegetable Details) ---
  const hotspots = document.querySelectorAll('.pack-hotspot');
  hotspots.forEach(spot => {
    spot.addEventListener('click', () => {
      const targetId = spot.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetEl.classList.add('highlight-pulse');
        setTimeout(() => targetEl.classList.remove('highlight-pulse'), 1500);
      }
    });
  });

  // --- Nutrition Facts Serving Switcher ---
  const nutritionData = {
    '100g': {
      energy: '484 kcal',
      protein: '6.2 g',
      fat: '20.1 g',
      satfat: '2.3 g',
      carbs: '67.4 g',
      fibre: '7.6 g',
      sugars: '9.1 g',
      sodium: '210 mg'
    },
    '40g': {
      energy: '194 kcal',
      protein: '2.5 g',
      fat: '8.0 g',
      satfat: '0.9 g',
      carbs: '27.0 g',
      fibre: '3.0 g',
      sugars: '3.6 g',
      sodium: '84 mg'
    },
    '80g': {
      energy: '387 kcal',
      protein: '5.0 g',
      fat: '16.1 g',
      satfat: '1.8 g',
      carbs: '53.9 g',
      fibre: '6.1 g',
      sugars: '7.3 g',
      sodium: '168 mg'
    }
  };

  function updateNutrition(servingKey) {
    const data = nutritionData[servingKey];
    if (!data) return;

    valEnergy.textContent = data.energy;
    valProtein.textContent = data.protein;
    valFat.textContent = data.fat;
    valSatFat.textContent = data.satfat;
    valCarbs.textContent = data.carbs;
    valFibre.textContent = data.fibre;
    valSugars.textContent = data.sugars;
    valSodium.textContent = data.sodium;

    [btn100g, btn40g, btn80g].forEach(btn => {
      if (btn) btn.classList.remove('active');
    });

    if (servingKey === '100g' && btn100g) btn100g.classList.add('active');
    if (servingKey === '40g' && btn40g) btn40g.classList.add('active');
    if (servingKey === '80g' && btn80g) btn80g.classList.add('active');
  }

  if (btn100g) btn100g.addEventListener('click', () => updateNutrition('100g'));
  if (btn40g) btn40g.addEventListener('click', () => updateNutrition('40g'));
  if (btn80g) btn80g.addEventListener('click', () => updateNutrition('80g'));

  // --- Newsletter Form Submission ---
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        showToast(`🌱 Thank you! ${emailInput.value} has been added to the Crunch Club.`);
        emailInput.value = '';
      }
    });
  }

  function showToast(message) {
    if (!toast) return;
    toast.querySelector('.toast-msg').textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }
});

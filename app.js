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
  const btn150g = document.getElementById('btn-150g');
  const btn50g = document.getElementById('btn-50g');
  const btnKohila = document.getElementById('btn-kohila');

  const nutritionDataWrapper = document.getElementById('nutrition-data-wrapper');

  const valEnergy = document.getElementById('val-energy');
  const valFat = document.getElementById('val-fat');
  const valFatDv = document.getElementById('val-fat-dv');
  const valSatFat = document.getElementById('val-satfat');
  const valSatFatDv = document.getElementById('val-satfat-dv');
  const valSodium = document.getElementById('val-sodium');
  const valSodiumDv = document.getElementById('val-sodium-dv');
  const valCarbs = document.getElementById('val-carbs');
  const valCarbsDv = document.getElementById('val-carbs-dv');
  const valFibre = document.getElementById('val-fibre');
  const valFibreDv = document.getElementById('val-fibre-dv');
  const valProtein = document.getElementById('val-protein');
  const valProteinDv = document.getElementById('val-protein-dv');
  const valVita = document.getElementById('val-vita');
  const valVitaDv = document.getElementById('val-vita-dv');
  const valVitc = document.getElementById('val-vitc');
  const valVitcDv = document.getElementById('val-vitc-dv');
  const valCalcium = document.getElementById('val-calcium');
  const valCalciumDv = document.getElementById('val-calcium-dv');
  const valIron = document.getElementById('val-iron');
  const valIronDv = document.getElementById('val-iron-dv');

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
    '150g': {
      energy: '675 kcal',
      fat: '27g', fat_dv: '34.5%',
      satfat: '4.5g', satfat_dv: '22.5%',
      sodium: '375mg', sodium_dv: '16.5%',
      carbs: '97.5g', carbs_dv: '36%',
      fibre: '12g', fibre_dv: '43.5%',
      protein: '9g', protein_dv: '18%',
      vita: '675µg', vita_dv: '75%',
      vitc: '22.5mg', vitc_dv: '25.5%',
      calcium: '90mg', calcium_dv: '7.5%',
      iron: '2.25mg', iron_dv: '12%'
    },
    '50g': {
      energy: '225 kcal',
      fat: '9g', fat_dv: '11.5%',
      satfat: '1.5g', satfat_dv: '7.5%',
      sodium: '125mg', sodium_dv: '5.5%',
      carbs: '32.5g', carbs_dv: '12%',
      fibre: '4g', fibre_dv: '14.5%',
      protein: '3g', protein_dv: '6%',
      vita: '225µg', vita_dv: '25%',
      vitc: '7.5mg', vitc_dv: '8.5%',
      calcium: '30mg', calcium_dv: '2.5%',
      iron: '0.75mg', iron_dv: '4%'
    },
    'kohila': {
      energy: '225 kcal',
      fat: '9g', fat_dv: '11.5%',
      satfat: '1.5g', satfat_dv: '7.5%',
      sodium: '125mg', sodium_dv: '5.5%',
      carbs: '32.5g', carbs_dv: '12%',
      fibre: '4g', fibre_dv: '14.5%',
      protein: '3g', protein_dv: '6%',
      vita: '225µg', vita_dv: '25%',
      vitc: '7.5mg', vitc_dv: '8.5%',
      calcium: '30mg', calcium_dv: '2.5%',
      iron: '0.75mg', iron_dv: '4%'
    }
  };
      energy: '225 kcal',
      fat: '9g', fat_dv: '11.5%',
      satfat: '1.5g', satfat_dv: '7.5%',
      sodium: '125mg', sodium_dv: '5.5%',
      carbs: '32.5g', carbs_dv: '12%',
      fibre: '4g', fibre_dv: '14.5%',
      protein: '3g', protein_dv: '6%',
      vita: '225µg', vita_dv: '25%',
      vitc: '7.5mg', vitc_dv: '8.5%',
      calcium: '30mg', calcium_dv: '2.5%',
      iron: '0.75mg', iron_dv: '4%'
    },
    '150g': {
      energy: '675 kcal',
      fat: '27g', fat_dv: '34.5%',
      satfat: '4.5g', satfat_dv: '22.5%',
      sodium: '375mg', sodium_dv: '16.5%',
      carbs: '97.5g', carbs_dv: '36%',
      fibre: '12g', fibre_dv: '43.5%',
      protein: '9g', protein_dv: '18%',
      vita: '675µg', vita_dv: '75%',
      vitc: '22.5mg', vitc_dv: '25.5%',
      calcium: '90mg', calcium_dv: '7.5%',
      iron: '2.25mg', iron_dv: '12%'
    }
  };

  function updateNutrition(servingKey) {
    const data = nutritionData[servingKey];
    if (!data) return;

    if (nutritionDataWrapper) {
      nutritionDataWrapper.classList.remove('fade-in-content');
      // Trigger reflow
      void nutritionDataWrapper.offsetWidth;
      nutritionDataWrapper.classList.add('fade-in-content');
    }

    setTimeout(() => {
      valEnergy.textContent = data.energy;
      valFat.textContent = data.fat;
      valFatDv.textContent = data.fat_dv;
      valSatFat.textContent = data.satfat;
      valSatFatDv.textContent = data.satfat_dv;
      valSodium.textContent = data.sodium;
      valSodiumDv.textContent = data.sodium_dv;
      valCarbs.textContent = data.carbs;
      valCarbsDv.textContent = data.carbs_dv;
      valFibre.textContent = data.fibre;
      valFibreDv.textContent = data.fibre_dv;
      valProtein.textContent = data.protein;
      valProteinDv.textContent = data.protein_dv;
      valVita.textContent = data.vita;
      valVitaDv.textContent = data.vita_dv;
      valVitc.textContent = data.vitc;
      valVitcDv.textContent = data.vitc_dv;
      valCalcium.textContent = data.calcium;
      valCalciumDv.textContent = data.calcium_dv;
      valIron.textContent = data.iron;
      valIronDv.textContent = data.iron_dv;
    }, 150); // Small delay to sync with fade out part of animation

    [btn150g, btn50g, btnKohila].forEach(btn => {
      if (btn) btn.classList.remove('active');
    });

    if (servingKey === '150g' && btn150g) btn150g.classList.add('active');
    if (servingKey === '50g' && btn50g) btn50g.classList.add('active');
    if (servingKey === 'kohila' && btnKohila) btnKohila.classList.add('active');
  }

  if (btn150g) btn150g.addEventListener('click', () => updateNutrition('150g'));
  if (btn50g) btn50g.addEventListener('click', () => updateNutrition('50g'));
  if (btnKohila) btnKohila.addEventListener('click', () => updateNutrition('kohila'));

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

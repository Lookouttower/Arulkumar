const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

function copyText(text) {
  if (!text) return;
  const finish = () => showToast();
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(finish).catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const area = document.createElement('textarea');
  area.value = text;
  area.style.position = 'fixed';
  area.style.opacity = '0';
  document.body.appendChild(area);
  area.select();
  document.execCommand('copy');
  area.remove();
  showToast();
}

let toastTimer;
function showToast() {
  const toast = $('#toast');
  clearTimeout(toastTimer);
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), 1700);
}

const menu = $('#menu');
const nav = $('#nav');
menu.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(isOpen));
});
$$('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}));

function renderFeatures() {
  $('#featureGrid').innerHTML = features.map(feature => `
    <article class="feature-card">
      <div class="feature-icon"><img src="${escapeHtml(feature[0])}" alt="" aria-hidden="true"></div>
      <h3>${escapeHtml(feature[1])}</h3>
      <p>${escapeHtml(feature[2])}</p>
    </article>
  `).join('');
}

function renderWorkflow() {
  $('#workflowGrid').innerHTML = workflowSteps.map((step, index) => `
    <article class="step">
      <div class="step-icon"><img src="${escapeHtml(workflowIcons[index])}" alt="" aria-hidden="true"></div>
      <h3>${escapeHtml(step[0])}</h3>
      <p>${escapeHtml(step[1])}</p>
    </article>
  `).join('');
}

function renderPrompts() {
  $('#promptGrid').innerHTML = DATA.prompts.map((prompt, index) => {
    const hasNegative = Boolean(prompt.negativePrompt && prompt.negativePrompt.trim());
    return `
      <article class="prompt-card" data-id="${escapeHtml(prompt.id)}" tabindex="0" aria-label="Open ${escapeHtml(prompt.title)}">
        <div class="card-img">
          <span class="card-sequence">${String(index + 1).padStart(2, '0')}</span>
          <img src="${escapeHtml(prompt.image)}" alt="${escapeHtml(prompt.title)}" loading="lazy">
        </div>
        <div class="card-body">
          <div><span class="pill">${escapeHtml(prompt.category)}</span></div>
          <h3>${escapeHtml(prompt.title)}</h3>
          <p class="use-case">${escapeHtml(prompt.useCase)}</p>
          <div class="prompt-meta-line"><span>Ratio <strong>${escapeHtml(prompt.ratio || 'Flexible')}</strong></span><span>Prompt <strong>${String(index + 1).padStart(2, '0')}</strong></span></div>
          <div class="card-tags">${(prompt.tags || []).slice(0, 4).map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}</div>
          <span class="view-link">View full prompt</span>
          <div class="small-actions">
            <button class="btn primary" data-copy="prompt">Copy Prompt</button>
            <button class="btn ghost" data-copy="negative" ${hasNegative ? '' : 'disabled'}>${hasNegative ? 'Copy Negative Prompt' : 'No Negative Prompt'}</button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

const modal = $('#modal');
let activePrompt = null;

function setNegativeButtonState(hasNegative) {
  ['#modalCopyNegative', '#modalCopyNegativeInline'].forEach(selector => {
    const button = $(selector);
    button.disabled = !hasNegative;
    button.setAttribute('aria-disabled', String(!hasNegative));
  });
}

function openPrompt(prompt) {
  const index = DATA.prompts.indexOf(prompt);
  const negativeText = prompt.negativePrompt && prompt.negativePrompt.trim()
    ? prompt.negativePrompt
    : 'No dedicated negative prompt was supplied for this card.';
  const hasNegative = Boolean(prompt.negativePrompt && prompt.negativePrompt.trim());

  activePrompt = prompt;
  $('#modalImg').src = prompt.image;
  $('#modalImg').alt = prompt.title;
  $('#modalCat').textContent = prompt.category;
  $('#modalIndex').textContent = `${String(index + 1).padStart(2, '0')} / ${String(DATA.prompts.length).padStart(2, '0')}`;
  $('#modalTitle').textContent = prompt.title;
  $('#modalTags').innerHTML = (prompt.tags || []).map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('');
  $('#modalUse').textContent = prompt.useCase;
  $('#modalInput').textContent = prompt.requiredInput || 'Use the most accurate approved reference image.';
  $('#modalVariables').textContent = prompt.editableVariables || 'Adjust only the variables permitted by the prompt.';
  $('#modalRatio').textContent = prompt.ratio || 'Flexible';
  $('#modalPrompt').textContent = prompt.prompt;
  $('#modalNegative').textContent = negativeText;
  setNegativeButtonState(hasNegative);

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  $('#modalClose').focus();
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  activePrompt = null;
}

$('#promptGrid').addEventListener('click', event => {
  const card = event.target.closest('.prompt-card');
  if (!card) return;
  const prompt = DATA.prompts.find(item => item.id === card.dataset.id);
  if (!prompt) return;

  const copyType = event.target.dataset.copy;
  if (copyType === 'prompt') {
    event.stopPropagation();
    copyText(prompt.prompt);
    return;
  }
  if (copyType === 'negative') {
    event.stopPropagation();
    copyText(prompt.negativePrompt);
    return;
  }
  openPrompt(prompt);
});

$('#promptGrid').addEventListener('keydown', event => {
  if (!['Enter', ' '].includes(event.key) || event.target.tagName === 'BUTTON') return;
  const card = event.target.closest('.prompt-card');
  if (!card) return;
  event.preventDefault();
  const prompt = DATA.prompts.find(item => item.id === card.dataset.id);
  if (prompt) openPrompt(prompt);
});

$('#modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', event => {
  if (event.target === modal) closeModal();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && modal.classList.contains('open')) closeModal();
});
$('#modalVideoLink').addEventListener('click', closeModal);

['#modalCopy', '#modalCopyInline'].forEach(selector => {
  $(selector).addEventListener('click', () => activePrompt && copyText(activePrompt.prompt));
});
['#modalCopyNegative', '#modalCopyNegativeInline'].forEach(selector => {
  $(selector).addEventListener('click', () => activePrompt && copyText(activePrompt.negativePrompt));
});

function renderRules() {
  $('#dosList').innerHTML = dos.map(item => `<li>✓ ${escapeHtml(item)}</li>`).join('');
  $('#dontsList').innerHTML = donts.map(item => `<li>× ${escapeHtml(item)}</li>`).join('');
}

function renderMovements() {
  const grid = $('#movementGrid');
  grid.innerHTML = DATA.movementCards.map(card => `
    <article class="move-card">
      <h3>${escapeHtml(card.title)}</h3>
      <p><strong>Best Use:</strong> ${escapeHtml(card.bestUse)}</p>
      <p>${escapeHtml(card.description)}</p>
      <button class="btn primary" data-snippet="${encodeURIComponent(card.snippet)}">Copy Snippet</button>
    </article>
  `).join('');
  grid.addEventListener('click', event => {
    if (event.target.dataset.snippet) copyText(decodeURIComponent(event.target.dataset.snippet));
  });
}

function renderPalette() {
  $('#paletteGrid').innerHTML = palette.map(item => {
    const labelBg   = item[3] || item[1];
    const labelText = item[4] || '#ffffff';
    return `
    <div class="swatch">
      <div class="swatch-color" style="background:${escapeHtml(item[1])}"></div>
      <div class="swatch-label" style="background:${escapeHtml(labelBg)};color:${escapeHtml(labelText)}">
        <strong>${escapeHtml(item[0])}</strong>
        <span>${escapeHtml(item[1])}</span>
        <span>${escapeHtml(item[2])}</span>
      </div>
    </div>`;
  }).join('');
}

function renderResources() {
  const grid = $('#resourceGrid');
  if (!grid) return;
  grid.innerHTML = displayResources.map(resource => `
    <article class="resource-card">
      <h3>${escapeHtml(resource[0])}</h3>
      <p>${escapeHtml(resource[1])}</p>
      <a href="${escapeHtml(resource[2])}">Open Resource →</a>
    </article>
  `).join('');
}

function renderFaq() {
  const list = $('#faqList');
  list.innerHTML = DATA.faqs.map(item => `
    <div class="faq-item">
      <button class="faq-q" aria-expanded="false"><span>${escapeHtml(item[0])}</span><b>+</b></button>
      <div class="faq-a"><div>${escapeHtml(item[1])}</div></div>
    </div>
  `).join('');
  list.addEventListener('click', event => {
    const button = event.target.closest('.faq-q');
    if (!button) return;
    const item = button.parentElement;
    const isOpen = item.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
  });
}

$('[data-copy-master]').addEventListener('click', () => {
  const master = DATA.prompts.map(prompt => {
    const negative = prompt.negativePrompt && prompt.negativePrompt.trim()
      ? `\n\nNegative Prompt:\n${prompt.negativePrompt}`
      : '';
    return `${prompt.title}\n\n${prompt.prompt}${negative}`;
  }).join('\n\n---\n\n');
  copyText(master);
});

renderFeatures();
renderWorkflow();
renderPrompts();
renderRules();
renderMovements();
renderPalette();
renderResources();
renderFaq();

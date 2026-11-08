// ==========================================================================
// UI ENCYCLOPEDIA - CORE APPLICATION CONTROLLER
// Handles dynamic rendering, filters, chameleon morpher, modals, and toasts
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // State variables
  let currentFilter = "all";
  let searchQuery = "";
  let activeChameleonStyle = "neobrutalism";
  let activeChameleonComponent = "profile";
  let activeModalTab = "html";
  let currentInspectingStyle = null;

  // DOM Elements
  const stylesGrid = document.getElementById("stylesGrid");
  const filterChips = document.querySelectorAll(".filter-chip");
  const searchInput = document.getElementById("searchInput");
  const chameleonStage = document.getElementById("chameleonStage");
  const chameleonStyleBtnsContainer = document.getElementById("chameleonStyleBtns");
  const chameleonCompBtns = document.querySelectorAll(".btn-chameleon-comp");
  const bgDots = document.querySelectorAll(".bg-dot");
  
  // Modal Elements
  const modalOverlay = document.getElementById("codeModal");
  const modalClose = document.getElementById("modalClose");
  const modalTitle = document.getElementById("modalTitle");
  const modalBadge = document.getElementById("modalBadge");
  const modalTabBtns = document.querySelectorAll(".modal-tab-btn");
  const modalContentArea = document.getElementById("modalContentArea");
  const btnCopyModal = document.getElementById("btnCopyModal");

  // Toast Container
  const toastContainer = document.getElementById("toastContainer");

  // Toast Notification Helper
  function showToast(message, icon = "✓") {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  // Copy to clipboard helper
  function copyText(text, successMsg = "Copied to clipboard!") {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg);
    }).catch(() => {
      // Fallback
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      showToast(successMsg);
    });
  }

  // Render Chameleon Morpher Style Buttons
  function renderChameleonButtons() {
    chameleonStyleBtnsContainer.innerHTML = UI_STYLES_DATA.map(style => `
      <button class="btn-chameleon-style ${style.id === activeChameleonStyle ? 'active' : ''}" data-style="${style.id}">
        ${style.name.split(" ")[0]}
      </button>
    `).join("");

    chameleonStyleBtnsContainer.querySelectorAll(".btn-chameleon-style").forEach(btn => {
      btn.addEventListener("click", () => {
        chameleonStyleBtnsContainer.querySelectorAll(".btn-chameleon-style").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeChameleonStyle = btn.dataset.style;
        renderChameleonStage();
      });
    });
  }

  // Render Chameleon Morpher Stage
  function renderChameleonStage() {
    const compData = CHAMELEON_COMPONENTS[activeChameleonComponent];
    chameleonStage.className = `chameleon-stage style-${activeChameleonStyle}`;
    chameleonStage.innerHTML = compData.render(activeChameleonStyle);

    // Attach toggle interaction
    const toggles = chameleonStage.querySelectorAll(".demo-toggle");
    toggles.forEach(t => {
      t.addEventListener("click", () => t.classList.toggle("active"));
    });
  }

  // Render Grid of Styles
  function renderStylesGrid() {
    const filtered = UI_STYLES_DATA.filter(item => {
      const matchesFilter = currentFilter === "all" || item.category === currentFilter;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery) ||
                            item.description.toLowerCase().includes(searchQuery) ||
                            item.keyTraits.some(t => t.toLowerCase().includes(searchQuery));
      return matchesFilter && matchesSearch;
    });

    if (filtered.length === 0) {
      stylesGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <h3>No styles found matching "${searchQuery}"</h3>
          <p style="margin-top: 0.5rem; font-size: 0.875rem;">Try searching for "Glass", "Brutal", "Retro" or "3D"</p>
        </div>
      `;
      return;
    }

    stylesGrid.innerHTML = filtered.map(style => `
      <div class="style-card" data-id="${style.id}">
        <div class="style-card-header">
          <div class="style-badge-wrap">
            <h3 class="style-name">${style.name}</h3>
          </div>
          <span class="style-tag">${style.badge}</span>
        </div>

        <div class="style-preview-canvas style-${style.id}">
          ${style.codeHtml}
        </div>

        <div class="style-card-body">
          <p class="style-description">${style.description}</p>
          <div class="style-traits">
            ${style.keyTraits.slice(0, 3).map(trait => `<span class="trait-tag">${trait}</span>`).join("")}
          </div>
          <div class="style-card-actions">
            <button class="btn-inspect" data-id="${style.id}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              Inspect & Copy Code
            </button>
            <button class="btn-copy-css" title="Copy Raw CSS" data-id="${style.id}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            </button>
          </div>
        </div>
      </div>
    `).join("");

    // Attach interactive demo listeners
    stylesGrid.querySelectorAll(".demo-toggle").forEach(toggle => {
      toggle.addEventListener("click", () => toggle.classList.toggle("active"));
    });

    // Attach inspect buttons
    stylesGrid.querySelectorAll(".btn-inspect").forEach(btn => {
      btn.addEventListener("click", () => openModal(btn.dataset.id));
    });

    // Attach quick copy CSS buttons
    stylesGrid.querySelectorAll(".btn-copy-css").forEach(btn => {
      btn.addEventListener("click", () => {
        const style = UI_STYLES_DATA.find(s => s.id === btn.dataset.id);
        if (style) {
          copyText(style.codeCss, `${style.name} CSS copied!`);
        }
      });
    });
  }

  // Modal Inspector Handler
  function openModal(styleId) {
    currentInspectingStyle = UI_STYLES_DATA.find(s => s.id === styleId);
    if (!currentInspectingStyle) return;

    modalTitle.textContent = currentInspectingStyle.name;
    modalBadge.textContent = currentInspectingStyle.badge;
    renderModalContent();

    modalOverlay.classList.add("open");
  }

  function closeModal() {
    modalOverlay.classList.remove("open");
  }

  function renderModalContent() {
    if (!currentInspectingStyle) return;

    if (activeModalTab === "html") {
      modalContentArea.innerHTML = `
        <div class="code-block-wrap">
          <pre><code>${escapeHtml(currentInspectingStyle.codeHtml)}</code></pre>
          <button class="btn-code-copy" id="btnCopySnippet">Copy HTML</button>
        </div>
      `;
      document.getElementById("btnCopySnippet").addEventListener("click", () => {
        copyText(currentInspectingStyle.codeHtml, "HTML snippet copied!");
      });
    } else if (activeModalTab === "css") {
      modalContentArea.innerHTML = `
        <div class="code-block-wrap">
          <pre><code>${escapeHtml(currentInspectingStyle.codeCss)}</code></pre>
          <button class="btn-code-copy" id="btnCopySnippet">Copy CSS</button>
        </div>
      `;
      document.getElementById("btnCopySnippet").addEventListener("click", () => {
        copyText(currentInspectingStyle.codeCss, "CSS rules copied!");
      });
    } else if (activeModalTab === "palette") {
      modalContentArea.innerHTML = `
        <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1rem;">
          Click any color swatch to copy its exact HEX color value:
        </p>
        <div class="palette-grid">
          ${currentInspectingStyle.colorPalette.map(color => `
            <div class="swatch-item" data-hex="${color.hex}">
              <div class="swatch-color" style="background: ${color.hex};"></div>
              <div class="swatch-info">
                <div class="swatch-name">${color.name}</div>
                <div class="swatch-hex">${color.hex}</div>
              </div>
            </div>
          `).join("")}
        </div>
      `;

      modalContentArea.querySelectorAll(".swatch-item").forEach(item => {
        item.addEventListener("click", () => {
          copyText(item.dataset.hex, `Copied ${item.dataset.hex}`);
        });
      });
    } else if (activeModalTab === "rules") {
      modalContentArea.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 1.25rem; font-size: 0.9rem;">
          <div style="background: rgba(255,255,255,0.04); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-color);">
            <h4 style="color: var(--accent-cyan); margin-bottom: 0.5rem; font-size: 0.95rem;">Key Design Formula & Secret Sauce</h4>
            <ul style="padding-left: 1.25rem; color: #cbd5e1; line-height: 1.7;">
              ${currentInspectingStyle.keyTraits.map(t => `<li><code>${t}</code></li>`).join("")}
            </ul>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 1rem; border-radius: 8px;">
              <h5 style="color: #34d399; margin-bottom: 0.4rem; font-size: 0.85rem; font-weight: 700;">✓ BEST USE CASES</h5>
              <p style="font-size: 0.825rem; color: #e2e8f0; line-height: 1.5;">${currentInspectingStyle.bestFor}</p>
            </div>
            <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 1rem; border-radius: 8px;">
              <h5 style="color: #f87171; margin-bottom: 0.4rem; font-size: 0.85rem; font-weight: 700;">✕ WHEN TO AVOID</h5>
              <p style="font-size: 0.825rem; color: #e2e8f0; line-height: 1.5;">${currentInspectingStyle.avoidFor}</p>
            </div>
          </div>
        </div>
      `;
    }
  }

  function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // Filter Bar click
  filterChips.forEach(chip => {
    chip.addEventListener("click", () => {
      filterChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentFilter = chip.dataset.category;
      renderStylesGrid();
    });
  });

  // Search input change
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderStylesGrid();
  });

  // Chameleon Component Buttons
  chameleonCompBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      chameleonCompBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeChameleonComponent = btn.dataset.comp;
      renderChameleonStage();
    });
  });

  // Background Switchers
  bgDots.forEach(dot => {
    dot.addEventListener("click", () => {
      bgDots.forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
      const bg = dot.dataset.bg;
      chameleonStage.classList.remove("stage-bg-dark", "stage-bg-light", "stage-bg-mesh", "stage-bg-grid");
      chameleonStage.classList.add(`stage-bg-${bg}`);
    });
  });

  // Modal Tabs
  modalTabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      modalTabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeModalTab = btn.dataset.tab;
      renderModalContent();
    });
  });

  // Modal Close
  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // Comparison Matrix Rendering
  function renderComparisonMatrix() {
    const tbody = document.getElementById("matrixTbody");
    if (!tbody) return;

    tbody.innerHTML = UI_STYLES_DATA.map(style => `
      <tr>
        <td class="matrix-style-name">
          <span style="width: 8px; height: 8px; border-radius: 50%; background: ${style.colorPalette[1].hex};"></span>
          ${style.name}
        </td>
        <td><code>${style.keyTraits[0] || "Custom"}</code></td>
        <td><code>${style.keyTraits[1] || "None"}</code></td>
        <td>${style.badge}</td>
        <td>${style.bestFor}</td>
      </tr>
    `).join("");
  }

  // Initialize
  renderChameleonButtons();
  renderChameleonStage();
  renderStylesGrid();
  renderComparisonMatrix();
});

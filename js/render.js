/**
 * render.js
 * ---------
 * Pure functions that take data and return HTML strings.
 * No DOM side effects — all rendering is done by main.js.
 */

function renderExperience(items) {
  return items.map((item) => `
    <div class="exp-item">
      <div class="exp-date">${item.date}</div>
      <div class="exp-body">
        <p class="exp-role">${item.role}</p>
        <p class="exp-org">${item.org}</p>
        <ul class="exp-bullets">
          ${item.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

function renderProjects(items) {
  return items.map(item => {
    const tagsHTML = item.tags
      .map(t => `<span class="project-tag">${t}</span>`)
      .join('');

    const githubTag = item.link
      ? `<a href="${item.link}" target="_blank" rel="noopener" class="project-tag">${item.linkLabel || 'GitHub →'}</a>`
      : '';

    const demoTag = item.demo
      ? `<a href="${item.demo}" target="_blank" rel="noopener" class="project-tag" style="background:var(--teal-100); color:var(--teal-800);">↗ Live Demo</a>`
      : '';

    return `
      <div class="project-card">
        <div class="project-card-header">
          <p class="project-title">${item.title}</p>
          <span class="project-status status-${item.status}">${item.statusLabel}</span>
        </div>
        <p class="project-desc">${item.desc}</p>
        ${item.image ? `
          <div class="project-img-wrap" onclick="openLightbox('${item.image}', '${item.imageAlt || ''}')">
            <img src="${item.image}" alt="${item.imageAlt || ''}" class="project-img">
            <div class="project-img-overlay">Click to expand</div>
          </div>` : ''}
        <div class="project-tags">
          ${tagsHTML}
          ${githubTag}
          ${demoTag}
        </div>
      </div>
    `;
  }).join('');
}

function renderPresentations(items) {
  return items.map(item => `
    <div class="pres-item">
      <span class="pres-year">${item.year}</span>
      <div>
        <p class="pres-title">${item.title}</p>
        <p class="pres-venue">${item.venue}</p>
      </div>
    </div>
  `).join('');
}

function renderEducation(items) {
  return items.map(item => `
    <div class="edu-card">
      <p class="edu-degree">${item.degree}</p>
      <p class="edu-school">${item.school}</p>
      <p class="edu-meta">${item.meta}</p>
      <p class="edu-courses">${item.courses}</p>
    </div>
  `).join('');
}
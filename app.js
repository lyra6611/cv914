import { portfolioData } from './content.js';

const app = document.querySelector('#app');

const projectCategories = ['all', ...new Set(portfolioData.projects.items.map((item) => item.category))];
let activeCategory = 'all';

const renderHeader = () => `
  <header class="site-header">
    <div class="container header-inner">
      <a href="#home" class="brand" aria-label="返回首页">
        <span class="brand-mark">L</span>
        <span>${portfolioData.site.title}</span>
      </a>
      <nav class="nav" aria-label="主导航">
        ${portfolioData.nav
          .map(
            (item) => `
              <a href="${item.href}">${item.label}</a>
            `
          )
          .join('')}
      </nav>
      <a class="header-cta" href="${portfolioData.site.resumeLink}">${portfolioData.site.cvText}</a>
    </div>
  </header>
`;

const renderHero = () => `
  <section id="home" class="hero">
    <div class="container hero-grid">
      <div>
        <div class="eyebrow">${portfolioData.hero.tag}</div>
        <h1>
          Hi, I'm <span class="highlight">${portfolioData.hero.name}</span><br />
          ${portfolioData.hero.role}
        </h1>
        <p>${portfolioData.hero.intro}</p>
        <div class="hero-actions">
          <a class="primary-btn" href="${portfolioData.hero.primaryAction.href}">${portfolioData.hero.primaryAction.label}</a>
          <a class="secondary-btn" href="${portfolioData.hero.secondaryAction.href}">${portfolioData.hero.secondaryAction.label}</a>
        </div>
        <div class="hero-stats">
          ${portfolioData.hero.stats
            .map(
              (stat) => `
                <div class="stat-card">
                  <strong>${stat.value}</strong>
                  <span>${stat.label}</span>
                </div>
              `
            )
            .join('')}
        </div>
      </div>
      <div class="profile-panel">
        <div class="profile-visual" aria-hidden="true"></div>
        <div class="profile-meta">
          <h3>${portfolioData.hero.name}</h3>
          <p>${portfolioData.hero.role}</p>
          <ul class="profile-list">
            <li><span>城市</span><span>${portfolioData.site.location}</span></li>
            <li><span>邮箱</span><span>${portfolioData.site.email}</span></li>
            <li><span>电话</span><span>${portfolioData.site.phone}</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
`;

const renderStickySection = () => `
  <section class="story-genesis">
    <div class="sticky-wrap">
      <div class="circle-ripple ripple1"></div>
      <div class="circle-ripple ripple2"></div>

      <div class="text title1">In The Beginning</div>
      <div class="subtext sub1">God Created the Heavens</div>

      <div class="light-glow light1"></div>
      <div class="text title2">Let There Be Light</div>

      <div class="land-shape land1"></div>
      <div class="text title3">Dry Land</div>

      <div class="moon-glow moon1"></div>
      <div class="text title4">Moon &amp; Stars</div>
    </div>
  </section>
`;

const renderAbout = () => `
  <section id="about" class="section">
    <div class="container">
      <div class="section-title">
        <h2>${portfolioData.about.heading}</h2>
        <p>${portfolioData.site.subtitle}</p>
      </div>
      <div class="about-grid">
        <div class="panel about-copy">
          <p>${portfolioData.about.summary}</p>
          ${portfolioData.about.details
            .map(
              (item) => `
                <p>${item}</p>
              `
            )
            .join('')}
          <div class="highlight-list">
            ${portfolioData.about.highlights
              .map(
                (item) => `
                  <span>${item}</span>
                `
              )
              .join('')}
          </div>
        </div>
        <div class="panel">
          <div class="mini-block">
            <div class="mini-block-title">我的核心价值</div>
            <ul class="value-list">
              <li>把复杂产品需求拆解成清晰的交付目标。</li>
              <li>兼顾设计表达与前端实现，让方案更容易落地。</li>
              <li>持续收集用户反馈，推动版本迭代与业务成长。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

const renderResume = () => `
  <section id="resume" class="section">
    <div class="container">
      <div class="section-title">
        <h2>${portfolioData.resume.heading}</h2>
        <p>${portfolioData.resume.intro}</p>
      </div>
      <div class="resume-layout">
        <div class="panel">
          <h3>工作经历</h3>
          <div class="timeline">
            ${portfolioData.resume.experience
              .map(
                (item) => `
                  <div class="timeline-item">
                    <div class="period">${item.period}</div>
                    <h3>${item.title}</h3>
                    <div class="company">${item.company}</div>
                    <p>${item.description}</p>
                  </div>
                `
              )
              .join('')}
          </div>
        </div>
        <div class="panel">
          <h3>教育背景</h3>
          <div class="timeline">
            ${portfolioData.resume.education
              .map(
                (item) => `
                  <div class="timeline-item">
                    <div class="period">${item.period}</div>
                    <h3>${item.title}</h3>
                    <div class="company">${item.school}</div>
                    <p>${item.description}</p>
                  </div>
                `
              )
              .join('')}
          </div>
        </div>
      </div>
    </div>
  </section>
`;

const renderSkills = () => `
  <section id="skills" class="section">
    <div class="container">
      <div class="section-title">
        <h2>${portfolioData.skills.heading}</h2>
      </div>
      <div class="skills-grid">
        ${portfolioData.skills.categories
          .map(
            (category) => `
              <div class="skill-card">
                <h3>${category.title}</h3>
                <ul class="skill-list">
                  ${category.items
                    .map(
                      (skill) => `
                        <li>${skill}</li>
                      `
                    )
                    .join('')}
                </ul>
              </div>
            `
          )
          .join('')}
      </div>
    </div>
  </section>
`;

const renderServices = () => `
  <section id="services" class="section">
    <div class="container">
      <div class="section-title">
        <h2>${portfolioData.services.heading}</h2>
        <p>${portfolioData.services.intro}</p>
      </div>
      <div class="services-grid">
        ${portfolioData.services.items
          .map(
            (service) => `
              <article class="service-card">
                <div class="service-icon" aria-hidden="true">✦</div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <div class="service-tags">
                  ${service.tags
                    .map(
                      (tag) => `
                        <span>${tag}</span>
                      `
                    )
                    .join('')}
                </div>
              </article>
            `
          )
          .join('')}
      </div>
    </div>
  </section>
`;

const renderProjects = () => {
  const filteredProjects =
    activeCategory === 'all'
      ? portfolioData.projects.items
      : portfolioData.projects.items.filter((item) => item.category === activeCategory);

  return `
    <section id="projects" class="section">
      <div class="container">
        <div class="section-title">
          <h2>${portfolioData.projects.heading}</h2>
          <p>${portfolioData.projects.intro}</p>
        </div>

        <div class="projects-toolbar">
          <div class="filters" aria-label="作品筛选">
            ${projectCategories
              .map(
                (category) => `
                  <button
                    class="filter-btn ${category === activeCategory ? 'active' : ''}"
                    data-category="${category}"
                    type="button"
                  >
                    ${category === 'all' ? '全部' : category}
                  </button>
                `
              )
              .join('')}
          </div>
        </div>

        <div class="projects-grid">
          ${filteredProjects
            .map(
              (project) => `
                <article class="project-card">
                  <div class="project-cover" aria-hidden="true"></div>
                  <div class="project-body">
                    <span class="project-tag">${project.category}</span>
                    <h3>${project.title}</h3>
                    <p>${project.summary}</p>
                    <div class="project-meta">
                      ${project.metrics
                        .map(
                          (item) => `
                            <span>${item}</span>
                          `
                        )
                        .join('')}
                    </div>
                    <div class="project-tags">
                      ${project.tags
                        .map(
                          (tag) => `
                            <span>${tag}</span>
                          `
                        )
                        .join('')}
                    </div>
                    <a class="project-link" href="${project.link}">查看详情 →</a>
                  </div>
                </article>
              `
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
};

const renderAchievements = () => `
  <section id="highlights" class="section">
    <div class="container">
      <div class="section-title">
        <h2>${portfolioData.achievements.heading}</h2>
        <p>${portfolioData.achievements.intro}</p>
      </div>
      <ul class="achievements-list">
        ${portfolioData.achievements.items
          .map(
            (item) => `
              <li>${item}</li>
            `
          )
          .join('')}
      </ul>
    </div>
  </section>
`;

const renderContact = () => `
  <section id="contact" class="contact-section">
    <div class="container contact-grid">
      <div class="contact-card">
        <div class="section-title">
          <h2>${portfolioData.contact.heading}</h2>
        </div>
        <p>${portfolioData.contact.text}</p>
      </div>
      <div class="contact-card">
        <ul class="contact-list">
          ${portfolioData.contact.channels
            .map(
              (channel) => `
                <li>
                  <a href="${channel.href}" target="_blank" rel="noreferrer">
                    <span>${channel.label}</span>
                    <span>${channel.value}</span>
                  </a>
                </li>
              `
            )
            .join('')}
        </ul>
      </div>
    </div>
  </section>
`;

const renderFooter = () => `
  <footer class="site-footer">
    <div class="container">© 2026 ${portfolioData.site.title}. All rights reserved.</div>
  </footer>
`;

const setupScrollAnimations = () => {
  if (!window.gsap || !window.ScrollTrigger) {
    return;
  }

  window.gsap.registerPlugin(window.ScrollTrigger);
  window.ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

  const stickySection = window.gsap.timeline({
    scrollTrigger: {
      trigger: '.story-genesis',
      pin: '.sticky-wrap',
      scrub: 1,
      start: 'top top',
      end: 'bottom bottom'
    }
  });

  stickySection
    .to('.ripple1', { scale: 3, opacity: 0.4, duration: 1 }, 0)
    .to('.ripple2', { scale: 4, opacity: 0.2, duration: 1 }, 0.2)
    .to('.title1', { opacity: 1, y: -30 }, 0)
    .to('.sub1', { opacity: 1 }, 0.05)
    .to(['.title1', '.sub1', '.ripple1', '.ripple2'], { opacity: 0 }, 0.15)
    .to('.light1', { scale: 1.3, opacity: 0.8 }, 0.18)
    .to('.title2', { opacity: 1 }, 0.2)
    .to(['.light1', '.title2'], { opacity: 0 }, 0.3)
    .to('.land1', { scale: 1, opacity: 0.7 }, 0.32)
    .to('.title3', { opacity: 1 }, 0.35)
    .to(['.land1', '.title3'], { opacity: 0 }, 0.45)
    .to('.moon1', { scale: 1.2, opacity: 0.7 }, 0.48)
    .to('.title4', { opacity: 1 }, 0.5);
};

const renderApp = () => {
  app.innerHTML = `
    ${renderHeader()}
    <main>
      ${renderHero()}
      ${renderStickySection()}
      ${renderAbout()}
      ${renderResume()}
      ${renderSkills()}
      ${renderServices()}
      ${renderProjects()}
      ${renderAchievements()}
      ${renderContact()}
    </main>
    ${renderFooter()}
  `;

  document.querySelectorAll('.filter-btn').forEach((button) => {
    button.addEventListener('click', () => {
      activeCategory = button.dataset.category;
      renderApp();
    });
  });

  setupScrollAnimations();
};

renderApp();

export const portfolioData = {
  site: {
    title: '刘怡冉 · 个人简历',
    subtitle: '产品设计 / 交互设计 / 前端开发',
    email: 'yiranliu5@ln.hk',
    phone: '+852 56173934',
    location: '佛山',
    resumeLink: '#resume',
    cvText: '查看简历'
  },
  nav: [
    { label: '关于我', href: '#about' },
    { label: '经历', href: '#resume' },
    { label: '作品', href: '#projects' },
    { label: '能力', href: '#skills' },
    { label: '其他', href: '#highlights' },
    { label: '联系', href: '#contact' }
  ],
  hero: {
    tag: '产品与体验设计 · 前端落地',
    name: '刘怡冉',
    role: '产品设计师 / 前端开发者',
    intro:
      '我专注于将复杂业务需求转化为清晰、可用、可迭代的产品体验，兼具用户研究、交互设计、视觉表达与前端实现能力，能够从 0 到 1 参与完整产品流程。',
    primaryAction: { label: '查看作品', href: '#projects' },
    secondaryAction: { label: '联系我', href: '#contact' },
    stats: [
      { value: '1+', label: '年工作经验' },
      { value: '24', label: '个项目经验' },
      { value: '5', label: '个行业方向' },
      { value: '90%', label: '用户满意度' }
    ]
  },
  about: {
    heading: '关于我',
    summary:
      '热爱设计和技术的结合，始终相信优秀产品来自对用户需求与业务目标的深度理解。过去几年我在 SaaS、教育、电商与品牌运营相关项目中参与设计与前端实现，负责从用户研究、信息架构、原型设计到视觉落地与数据优化的完整闭环。',
    details: [
      '具备较强的产品分析与需求拆解能力，能够把模糊需求转化为具备实施价值的方案与流程。',
      '熟悉 Figma、Axure、Notion、HTML/CSS/JavaScript、Vue/React 等工具，能够在设计和前端实现之间建立高效协同。',
      '在工作中注重可用性提升、迭代效率和业务结果，持续推动用户体验与产品增长的协同优化。'
    ],
    highlights: ['需求分析', '交互设计', '前端实现', '设计系统', '用户研究']
  },
  resume: {
    heading: '工作经历',
    intro: '从产品方案到界面实现，我持续参与从研究、设计到上线的完整交付流程。',
    experience: [
      {
        period: '2022 - 至今',
        title: '高级产品设计师',
        company: '青橙科技 · SaaS 平台组',
        description:
          '负责企业管理后台与运营系统的产品设计与迭代，主导用户旅程优化、需求评审、设计规范建设和数据指标跟踪；同时参与前端交互样式实现，提升产品可用性与团队协作效率。'
      },
      {
        period: '2020 - 2022',
        title: 'UI/UX 设计师',
        company: '云栖教育 · 在线学习平台',
        description:
          '负责课程平台的交互设计与界面升级，优化教师端和学员端的学习路径；通过用户调研和 A/B 测试，提升报名转化率和课程留存，推动平台整体体验提升。'
      },
      {
        period: '2018 - 2020',
        title: '视觉设计师 / 前端支持',
        company: '星禾广告 · 品牌与营销团队',
        description:
          '负责品牌视觉、活动页面和营销素材设计，并配合前端开发实现高质量落地页，支持活动传播与品牌曝光增长。'
      }
    ],
    education: [
      {
        period: '2014 - 2018',
        title: '数字媒体技术',
        school: '广东工业大学',
        description: '本科，主修视觉设计、交互设计与前端开发相关课程。'
      }
    ]
  },
  skills: {
    heading: '能力与服务',
    categories: [
      {
        title: '设计能力',
        items: ['用户研究', '信息架构', '交互设计', '原型设计', '设计规范']
      },
      {
        title: '前端能力',
        items: ['HTML / CSS', 'JavaScript', 'Vue / React', '响应式开发', '前端可视化']
      },
      {
        title: '项目能力',
        items: ['需求梳理', '项目推进', '数据分析', '持续迭代', '跨团队协作']
      }
    ]
  },
  services: {
    heading: '我能提供的服务',
    intro: '根据项目阶段和目标，我可以为团队提供从研究到落地的一站式设计支持。',
    items: [
      {
        title: '产品设计与原型',
        description: '结合业务目标和用户需求，梳理流程与信息架构，输出高保真原型和有效的交互方案。',
        tags: ['研究', '原型', '交互设计']
      },
      {
        title: '前端实现与界面落地',
        description: '基于设计稿和交互方案，负责页面实现、组件拆分和视觉细节优化，保证方案可执行且一致。',
        tags: ['HTML', 'CSS', 'JavaScript']
      },
      {
        title: '品牌与内容表达',
        description: '从视觉语言、页面叙事到品牌传播内容，帮助产品建立清晰、统一且有辨识度的表达。',
        tags: ['品牌', '视觉', '内容']
      }
    ]
  },
  projects: {
    heading: '作品展示',
    intro: '以下项目覆盖产品设计、交互优化、品牌传播及前端实现，均为我在真实场景中的实践成果。',
    items: [
      {
        title: '企业运营后台重构',
        category: '产品设计',
        summary:
          '面向中后台管理场景的整体升级方案，优化流程结构和信息层级，提升团队日常运营效率与后台使用体验。',
        tags: ['UX', 'Figma', '设计系统'],
        metrics: ['操作效率提升 28%', '培训成本下降 35%'],
        link: '#'
      },
      {
        title: '在线课程平台体验升级',
        category: '交互设计',
        summary:
          '重新梳理课程浏览、报名、学习和反馈闭环，关注用户认知成本与参与成长，提升学习路径的清晰度与留存。',
        tags: ['用户研究', '原型', 'A/B 测试'],
        metrics: ['报名转化 +18%', '留存率提升 12%'],
        link: '#'
      },
      {
        title: '品牌传播落地页设计',
        category: '视觉设计',
        summary:
          '结合品牌故事和活动目标设计视觉系统与落地页，强化传播效果并保障内容表达的统一性与可读性。',
        tags: ['品牌', '页面设计', '视觉系统'],
        metrics: ['曝光增长 40%', '报名量翻倍'],
        link: '#'
      },
      {
        title: '个人作品集与简历站点',
        category: '前端开发',
        summary:
          '基于模块化数据结构构建的个人展示站点，便于内容更新、项目维护和统一展示，适合作品集与简历场景。',
        tags: ['HTML', 'CSS', 'JavaScript'],
        metrics: ['维护成本降低 60%', '内容更新效率提升 3x'],
        link: '#'
      }
    ]
  },
  achievements: {
    heading: '其他内容与成就',
    intro: '我不仅关注界面效果，也始终关注设计背后的业务价值与协作效率提升。',
    items: [
      '连续三年参与团队设计规范建设，推动跨部门协作效率提升与体验一致性增强。',
      '负责多个核心功能模块的端到端设计与迭代，覆盖需求梳理、原型验证、视觉落地与上线跟踪。',
      '擅长通过数据反馈和用户观察优化产品方向，提高用户参与度与转化效果。',
      '在团队中承担知识沉淀与项目文档输出，帮助长期迭代和协作保质保量。'
    ]
  },
  contact: {
    heading: '联系我',
    text:
      '如果你正在寻找一位兼顾产品思维、设计能力与前端实现能力的伙伴，欢迎联系我交流合作机会与项目方向。',
    channels: [
      { label: '邮箱', value: 'yiranliu5@ln.hk', href: 'mailto:yiranliu5@ln.hk' },
      { label: '电话', value: '+852 56173934', href: 'tel:+85256173934' },
      { label: 'GitHub', value: 'github.com/liuyiran', href: 'https://github.com/' },
      { label: 'LinkedIn', value: 'linkedin.com/in/liuyiran', href: 'https://www.linkedin.com/' }
    ]
  }
};

export const portfolioData = {
  site: {
    title: '刘怡冉 · 作品集',
    subtitle: '产品设计 / 前端开发 / 视觉表达',
    email: 'yiranliu5@ln.hk',
    phone: '+852 56173934',
    location: '佛山',
    resumeLink: '#resume',
    cvText: '下载简历'
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
    tag: '可持续设计与产品思维',
    name: '刘怡冉',
    role: '产品设计师 / 前端开发者',
    intro:
      '我专注于把复杂的产品需求转化为清晰的体验与可持续发展的交付方案，目前擅长产品原型、交互设计、前端实现与数据驱动优化。',
    primaryAction: { label: '查看作品', href: '#projects' },
    secondaryAction: { label: '联系我', href: '#contact' },
    stats: [
      { value: '0', label: '年工作经验' },
      { value: '18', label: '个项目完成' },
      { value: '4', label: '个行业方向' },
      { value: '92%', label: '客户复购率' }
    ]
  },
  about: {
    heading: '关于我',
    summary:
      '我热爱构建有温度、可理解、可迭代的数字产品。过去几年在 SaaS、教育与电商方向工作，参与过从研究到落地的完整产品流程，并负责前端可视化和交互实现。',
    details: [
      '拥有较强的产品分析能力与跨团队沟通能力，能够把用户诉求转换成具体功能方案。',
      '熟悉 Figma、Axure、Notion、HTML/CSS/JavaScript 等工具，能够在设计与实现之间建立高效闭环。',
      '在项目中更关注数据反馈与持续迭代，始终把用户价值放在第一位。'
    ],
    highlights: [
      '设计系统建设',
      '跨端体验设计',
      '需求分析与原型',
      '前端页面实现'
    ]
  },
  resume: {
    heading: '简历与经历',
    intro: '从设计到落地的完整工作经历，覆盖产品、交互、视觉与前端实现。',
    experience: [
      {
        period: '2022 - 至今',
        title: '高级产品设计师',
        company: '青橙科技',
        description:
          '负责企业管理后台的产品设计与迭代，推动设计规范、用户旅程优化与数据指标建设。'
      },
      {
        period: '2020 - 2022',
        title: 'UI/UX 设计师',
        company: '云栖教育',
        description:
          '主导在线教育平台的交互界面升级，提升课程转化率并优化教师端与学生端体验。'
      },
      {
        period: '2018 - 2020',
        title: '视觉设计师',
        company: '星禾广告',
        description:
          '负责品牌视觉与活动页面设计，协同前端实现高质量落地页与营销工具。'
      }
    ],
    education: [
      {
        period: '2014 - 2018',
        title: '计算机科学与技术',
        school: '某某大学',
        description: '本科，主修交互设计与前端技术。'
      }
    ]
  },
  skills: {
    heading: '能力与服务',
    categories: [
      {
        title: '设计能力',
        items: ['用户研究', '交互设计', '原型设计', '设计规范']
      },
      {
        title: '前端能力',
        items: ['HTML / CSS', 'JavaScript', 'Vue / React', '响应式开发']
      },
      {
        title: '项目能力',
        items: ['需求梳理', '项目推进', '数据分析', '持续迭代']
      }
    ]
  },
  services: {
    heading: '我能提供的内容服务',
    intro: '根据项目阶段与目标，可以提供从研究、设计到落地的定制化支持。',
    items: [
      {
        title: '产品设计与原型',
        description: '通过用户研究与原型评审，帮助团队明确需求边界并快速验证方案方向。',
        tags: ['研究', '原型', '交互设计']
      },
      {
        title: '前端实现与可视化',
        description: '基于设计稿与交互方案，输出高质量页面实现，保障体验一致性与迭代效率。',
        tags: ['HTML', 'CSS', 'JavaScript']
      },
      {
        title: '品牌与内容表达',
        description: '从视觉语言到宣传内容，构建统一的品牌识别与信息传达方案。',
        tags: ['品牌', '视觉', '内容']
      }
    ]
  },
  projects: {
    heading: '作品展示',
    intro: '以下作品涵盖产品设计、前端实现与品牌表达，均为我在真实项目中的代表成果。',
    items: [
      {
        title: '企业运营后台 redesign',
        category: '产品设计',
        summary:
          '面向 SaaS 用户的后台管理系统重构方案，提升操作效率并降低培训成本。',
        tags: ['UX', 'Figma', '设计系统'],
        metrics: ['效率提升 28%', '培训成本下降 35%'],
        link: '#'
      },
      {
        title: '在线课程平台体验升级',
        category: '交互设计',
        summary:
          '重新设计课程浏览、报名与学习过程，提高参与度与留存率。',
        tags: ['用户研究', '原型', 'A/B 测试'],
        metrics: ['报名转化 +18%', '留存率提升 12%'],
        link: '#'
      },
      {
        title: '品牌视觉落地页',
        category: '视觉设计',
        summary:
          '结合品牌故事与活动目标，打造统一的视觉语言与可落地页面。',
        tags: ['品牌', '页面设计', '前端实现'],
        metrics: ['曝光增长 40%', '活动报名翻倍'],
        link: '#'
      },
      {
        title: '动态作品集站点',
        category: '前端开发',
        summary:
          '基于模块化数据结构搭建的个人网站，方便后期更新内容与维护。',
        tags: ['HTML', 'CSS', 'JavaScript'],
        metrics: ['维护成本降低 60%', '内容更新效率提升 3x'],
        link: '#'
      }
    ]
  },
  achievements: {
    heading: '其他内容与成就',
    intro: '除了作品和设计能力，我也持续关注项目协作、沟通效率与长期价值提升。',
    items: [
      '连续三年参与公司设计规范建设，推动跨团队协作效率提升。',
      '负责过多条核心功能链路，从需求分析到发布运营的完整闭环。',
      '擅长通过可视化方案提升现有产品的理解度与运营效果。',
      '在团队中承担知识沉淀与文档输出，帮助项目长期稳定迭代。'
    ]
  },
  contact: {
    heading: '联系我',
    text:
      '如果你正在寻找一个能够兼顾设计思维与实现能力的伙伴，欢迎联系我交流项目与合作机会。',
    channels: [
      { label: '邮箱', value: 'hello@example.com', href: 'mailto:hello@example.com' },
      { label: '电话', value: '+86 138 0000 0000', href: 'tel:+8613800000000' },
      { label: 'GitHub', value: 'github.com/yourname', href: 'https://github.com/' },
      { label: 'LinkedIn', value: 'linkedin.com/in/yourname', href: 'https://www.linkedin.com/' }
    ]
  }
};

import { defineConfig } from 'vitepress'

const base = '/sglang/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'SGLang 源码深度解读',
  titleTemplate: '从入门到进阶',
  description:
    '面向 AI 基础设施工程师的 SGLang 代码库深入分析文档，基于本仓库 main 分支 (dd6ddc053) 编写。',

  base,
  lastUpdated: true,
  cleanUrls: true,
  srcExclude: ['README.md'],
  ignoreDeadLinks: [/^\/appendix\//],

  markdown: {
    // shiki 3.x 不再内置 cuda 语法, 用 cpp 高亮兜底
    languageAlias: { cuda: 'cpp' },
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg` }],
    ['meta', { name: 'theme-color', content: '#2e7d5b', media: '(prefers-color-scheme: light)' }],
    ['meta', { name: 'theme-color', content: '#18191c', media: '(prefers-color-scheme: dark)' }],
    ['meta', { property: 'og:title', content: 'SGLang 源码深度解读：从入门到进阶' }],
    [
      'meta',
      {
        property: 'og:description',
        content:
          '面向 AI 基础设施工程师的 SGLang 代码库深入分析文档：从入门直觉、核心代码走读，到生产部署与二次开发。',
      },
    ],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    // 学习笔记悬浮组件（localStorage），VitePress SPA 路由切换由 theme/index.ts 通知其重挂载
    ['script', { src: `${base}notes.js` }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: '前言', link: '/intro' },
      { text: '入门', link: '/part1-basics/ch01-what-is-sglang' },
      { text: '进阶', link: '/part2-intermediate/ch07-scheduler' },
      { text: '生产实践', link: '/part3-advanced/ch13-pd-disaggregation' },
    ],

    sidebar: [
      { text: '前言：这份文档怎么读', link: '/intro' },
      {
        text: '第一部分：入门 —— 先建立直觉，再学会使用',
        collapsed: false,
        items: [
          { text: '第 1 章 从零理解：LLM 推理服务在干什么', link: '/part1-basics/ch01-what-is-sglang' },
          { text: '第 2 章 第一次启动：把服务跑起来', link: '/part1-basics/ch02-first-run' },
          { text: '第 3 章 服务端是一座分工明确的餐厅（心智模型）', link: '/part1-basics/ch03-mental-model' },
          { text: '第 4 章 用 Python 调用服务：Engine、Runtime 和编程原语', link: '/part1-basics/ch04-python-client' },
          { text: '第 5 章 对外 API 入门：OpenAI 兼容接口怎么用', link: '/part1-basics/ch05-http-api-basics' },
          { text: '第 6 章 一次请求的完整旅程（入门版）', link: '/part1-basics/ch06-request-lifecycle' },
        ],
      },
      {
        text: '第二部分：进阶 —— 读懂核心代码',
        collapsed: false,
        items: [
          { text: '第 7 章 调度器代码走读：下一批跑什么、为什么', link: '/part2-intermediate/ch07-scheduler' },
          { text: '第 8 章 KV Cache 与 RadixAttention 代码走读', link: '/part2-intermediate/ch08-memory-kv-cache' },
          { text: '第 9 章 模型执行代码走读：ForwardBatch、Attention Backend 与 CUDA Graph', link: '/part2-intermediate/ch09-model-execution' },
          { text: '第 10 章 并行策略代码走读：TP / EP / DP / PP', link: '/part2-intermediate/ch10-parallelism' },
          { text: '第 11 章 采样与结构化输出代码走读', link: '/part2-intermediate/ch11-sampling-structured-output' },
          { text: '第 12 章 多模态实现走读：图像如何变成 token', link: '/part2-intermediate/ch12-multimodal' },
        ],
      },
      {
        text: '第三部分：进阶级 —— 理解权衡，面向生产',
        collapsed: false,
        items: [
          { text: '第 13 章 Prefill/Decode 分离：为什么、怎么传、什么坑', link: '/part3-advanced/ch13-pd-disaggregation' },
          { text: '第 14 章 投机解码：原理、收益、工程代价', link: '/part3-advanced/ch14-speculative-decoding' },
          { text: '第 15 章 多 LoRA：显存账、动态加载与踩坑', link: '/part3-advanced/ch15-lora' },
          { text: '第 16 章 Rust 组件：架构决策与演进逻辑', link: '/part3-advanced/ch16-rust-components' },
          { text: '第 17 章 集群路由与容量规划：从单机到多实例', link: '/part3-advanced/ch17-router-and-scaling' },
          { text: '第 18 章 性能调优实战：从指标到案例', link: '/part3-advanced/ch18-performance-tuning' },
          { text: '第 19 章 可观测性与故障排查：从指标到定位', link: '/part3-advanced/ch19-observability-debugging' },
          { text: '第 20 章 RL 与后训练：推理引擎的第二战场', link: '/part3-advanced/ch20-rl-and-posttraining' },
          { text: '第 21 章 二次开发与贡献：从改文档到改内核', link: '/part3-advanced/ch21-contributing' },
        ],
      },
      {
        text: '附录',
        collapsed: true,
        items: [
          { text: '附录 A：术语表', link: '/appendix/appx-terms' },
          { text: '附录 B：关键文件索引', link: '/appendix/appx-file-index' },
          { text: '附录 C：SM89/L40S 生产部署实录', link: '/appendix/appx-sm89-l40s-deployment' },
          { text: '附录 D：SM89/L40S 生产性能分析与优化建议', link: '/appendix/appx-sm89-l40s-performance-tuning' },
          { text: '附录 F：Qwen3.6-27B 旧版推理乱码根因分析', link: '/appendix/appx-qwen36-garbled-version-analysis' },
          { text: '附录 G：SGLang 生产监控（Prometheus + Grafana）设计', link: '/appendix/appx-sglang-prometheus-monitoring' },
          { text: '附录 H：Qwen3.8-27B 迁移预研', link: '/appendix/qwen38-migration' },
          { text: '附录 I：Qwen3.8-27B-FP8 生产部署方案', link: '/appendix/Qwen3.8-27B' },
          { text: 'Qwen3.6-27B-FP8 生产部署数据分析报告', link: '/appendix/Qwen3.6-27B' },
          { text: 'sgl-kernel load_utils.py SM89 路由修复（脱敏存档）', link: '/appendix/sm89-load-routing-fix' },
        ],
      },
    ],

    outline: {
      level: [2, 3],
      label: '本页大纲',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },

    editLink: {
      pattern: 'https://github.com/Atituiset/sglang/edit/main/docs-vitepress/:path',
      text: '在 GitHub 上编辑此页',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/Atituiset/sglang' }],

    docFooter: { prev: '上一页', next: '下一页' },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: { dateStyle: 'short', timeStyle: 'short' },
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',

    footer: {
      message: 'SGLang 源码深度解读：从入门到进阶',
      copyright: 'SGLang Study Notes',
    },
  },
})

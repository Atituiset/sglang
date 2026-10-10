---
layout: home

hero:
  name: SGLang
  text: 源码深度解读
  tagline: 面向 AI 基础设施工程师——从"能跑起来"走到"能读懂调度器、能定位性能问题、能做二次开发"的三级递进知识地图
  actions:
    - theme: brand
      text: 开始阅读
      link: /intro
    - theme: alt
      text: 直接上手
      link: /part1-basics/ch01-what-is-sglang

features:
  - title: 第一部分：入门
    details: 先建立直觉，再学会使用——LLM 推理服务在干什么、第一次启动、心智模型、Python 与 HTTP 调用、请求生命周期。
    link: /part1-basics/ch01-what-is-sglang
  - title: 第二部分：进阶
    details: 读懂核心代码——调度器、KV Cache 与 RadixAttention、模型执行、TP/EP/DP/PP 并行、采样与结构化输出、多模态。
    link: /part2-intermediate/ch07-scheduler
  - title: 第三部分：进阶级
    details: 理解权衡，面向生产——PD 分离、投机解码、多 LoRA、Rust 组件、集群路由、性能调优、可观测性、RL 与二次开发。
    link: /part3-advanced/ch13-pd-disaggregation
  - title: 附录
    details: 术语表、关键文件索引、SM89/L40S 生产部署实录与性能分析、Qwen3.6/3.8-27B 生产部署案例、监控设计。
    link: /appendix/appx-terms
---

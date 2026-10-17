// ============================================================
// Agent Use Cases - 数据文件
// 想新增一个用例？复制下面任意一个 {...} 块，改掉内容即可。
// AI 智能体后续也是改这个文件并自动提交到 GitHub。
// ============================================================

window.AGENT_USE_CASES = [
  {
    id: 1,
    title: "AI Customer Support Agents",
    category: "Customer Support",
    summary: "用大模型自动读取帮助文档、回答用户问题并直接处理工单，只在复杂情况才转人工。Intercom 的 Fin 与 Zendesk 的 AI Agent 是这一类代表产品。",
    tools: ["Intercom Fin", "Zendesk AI"],
    url: "https://www.intercom.com/fin",
    tags: ["support", "helpdesk", "automation"]
  },
  {
    id: 2,
    title: "Autonomous Coding Agents",
    category: "Software Engineering",
    summary: "能读懂代码库、按自然语言指令修改文件、跑测试并提 PR 的编程智能体。GitHub Copilot 负责补全与对话，Cursor 提供 Agent 模式，Devin 主打端到端任务执行。",
    tools: ["GitHub Copilot", "Cursor", "Devin"],
    url: "https://github.com/features/copilot",
    tags: ["coding", "developer", "agent"]
  },
  {
    id: 3,
    title: "Research & Citation Agents",
    category: "Research",
    summary: "面向开放问题的联网研究智能体，会检索网页、给出带引用的答案并整理来源。Perplexity 以答案引擎形态落地，ChatGPT 的联网模式也具备类似能力。",
    tools: ["Perplexity", "ChatGPT"],
    url: "https://www.perplexity.ai",
    tags: ["research", "search", "citations"]
  },
  {
    id: 4,
    title: "Sales Prospecting Agents",
    category: "Sales & Marketing",
    summary: "自动筛选潜在客户、研究其公司背景、生成个性化触达邮件并安排外联节奏的智能体。11x.ai 的 Alice 与 Lyne.ai 是这一方向的早期产品。",
    tools: ["11x.ai", "Lyne.ai"],
    url: "https://www.11x.ai",
    tags: ["sales", "outreach", "leads"]
  },
  {
    id: 5,
    title: "Document & Invoice Extraction",
    category: "Document Automation",
    summary: "从发票、合同、表单等非结构化文档中自动抽取关键字段并写入系统，替代人工录入。Nanonets 与 Docparser 提供这类抽取工作流。",
    tools: ["Nanonets", "Docparser"],
    url: "https://nanonets.com",
    tags: ["documents", "ocr", "rpa"]
  },
  {
    id: 6,
    title: "Marketing Copy Generators",
    category: "Content & Marketing",
    summary: "根据品牌 brief 批量生成广告文案、社媒帖子和产品描述，并可按渠道微调语气。Jasper 与 Copy.ai 是面向营销团队的生成式写作工具。",
    tools: ["Jasper", "Copy.ai"],
    url: "https://www.jasper.ai",
    tags: ["copywriting", "marketing", "content"]
  },
  {
    id: 7,
    title: "Meeting Notes & CRM Sync",
    category: "Productivity",
    summary: "实时转录会议、提炼行动项并自动同步到 CRM 或任务工具，减少会后整理负担。Fireflies.ai 与 Otter.ai 提供会议记录与摘要能力。",
    tools: ["Fireflies.ai", "Otter.ai"],
    url: "https://fireflies.ai",
    tags: ["meetings", "notes", "crm"]
  },
  {
    id: 8,
    title: "Text-to-SQL Data Agents",
    category: "Data Analysis",
    summary: "用自然语言直接查询数据库、生成图表与洞察，让非技术同事也能自助取数。Defog 与 SeekAI 等工具把大模型接到了企业数据源上。",
    tools: ["Defog", "SeekAI"],
    url: "https://defog.ai",
    tags: ["sql", "analytics", "data"]
  }
];

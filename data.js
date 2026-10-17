// ============================================================
// Agent Use Cases - Data File
// To add a new use case: copy any {...} block and edit the fields.
// The AI agent will also edit this file and push updates to GitHub.
// ============================================================

window.AGENT_USE_CASES = [
  {
    id: 1,
    title: "AI Customer Support Agents",
    category: "Customer Support",
    summary: "AI agents that read your help docs, answer customer questions, and resolve tickets end-to-end — escalating to humans only for complex cases. Intercom's Fin and Zendesk AI Agent are the leading products in this category.",
    tools: ["Intercom Fin", "Zendesk AI"],
    url: "https://www.intercom.com/fin",
    tags: ["support", "helpdesk", "automation"]
  },
  {
    id: 2,
    title: "Autonomous Coding Agents",
    category: "Software Engineering",
    summary: "Coding agents that understand your codebase, edit files from natural-language instructions, run tests, and open pull requests. GitHub Copilot handles completion and chat, Cursor offers an Agent mode, and Devin focuses on end-to-end task execution.",
    tools: ["GitHub Copilot", "Cursor", "Devin"],
    url: "https://github.com/features/copilot",
    tags: ["coding", "developer", "agent"]
  },
  {
    id: 3,
    title: "Research & Citation Agents",
    category: "Research",
    summary: "Web-connected research agents that answer open questions by searching the web, citing sources, and organizing references. Perplexity ships this as an answer engine, and ChatGPT's browsing mode offers similar capabilities.",
    tools: ["Perplexity", "ChatGPT"],
    url: "https://www.perplexity.ai",
    tags: ["research", "search", "citations"]
  },
  {
    id: 4,
    title: "Sales Prospecting Agents",
    category: "Sales & Marketing",
    summary: "Agents that qualify prospects, research target companies, draft personalized outreach emails, and schedule follow-up sequences. 11x.ai's Alice and Lyne.ai were early products in this space.",
    tools: ["11x.ai", "Lyne.ai"],
    url: "https://www.11x.ai",
    tags: ["sales", "outreach", "leads"]
  },
  {
    id: 5,
    title: "Document & Invoice Extraction",
    category: "Document Automation",
    summary: "Agents that pull key fields from unstructured documents — invoices, contracts, forms — and write them straight into your systems, replacing manual data entry. Nanonets and Docparser provide these extraction workflows.",
    tools: ["Nanonets", "Docparser"],
    url: "https://nanonets.com",
    tags: ["documents", "ocr", "rpa"]
  },
  {
    id: 6,
    title: "Marketing Copy Generators",
    category: "Content & Marketing",
    summary: "Agents that generate ad copy, social posts, and product descriptions in bulk from a brand brief, tuning tone per channel. Jasper and Copy.ai are the go-to generative writing tools for marketing teams.",
    tools: ["Jasper", "Copy.ai"],
    url: "https://www.jasper.ai",
    tags: ["copywriting", "marketing", "content"]
  },
  {
    id: 7,
    title: "Meeting Notes & CRM Sync",
    category: "Productivity",
    summary: "Agents that transcribe meetings in real time, extract action items, and sync them to your CRM or task tools — cutting post-meeting busywork. Fireflies.ai and Otter.ai lead this category.",
    tools: ["Fireflies.ai", "Otter.ai"],
    url: "https://fireflies.ai",
    tags: ["meetings", "notes", "crm"]
  },
  {
    id: 8,
    title: "Text-to-SQL Data Agents",
    category: "Data Analysis",
    summary: "Agents that let anyone query databases in plain English, generating charts and insights without writing SQL. Defog, SeekAI, and similar tools connect large language models to enterprise data sources.",
    tools: ["Defog", "SeekAI"],
    url: "https://defog.ai",
    tags: ["sql", "analytics", "data"]
  }
];

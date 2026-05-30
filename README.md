# PRDForge AI

**Turn product ideas into structured PRDs in seconds.**

PRDForge AI is a polished, beginner-friendly React portfolio project for aspiring AI Product Managers. It helps users transform a rough product idea into a structured Product Requirements Document with MVP scope, user stories, success metrics, roadmap, risks, and PM reasoning.

This is an MVP project. It does not use a backend or real AI API yet. The generation flow is intentionally powered by local mock logic so the project stays easy to understand, run, and extend.

## Project Overview

PRDForge AI is designed to feel like a real AI Product Manager workspace. Users complete a product brief, click Generate PRD, and receive a structured PRD draft in a polished document preview.

The project demonstrates both frontend execution and product thinking. It is suitable for a GitHub portfolio, product management interview preparation, or a beginner-friendly React case study.

## Problem It Solves

Many aspiring product managers can describe a product idea informally, but struggle to turn that idea into a clear PRD.

PRDForge AI helps bridge that gap by guiding users through the key inputs a PM should consider:

- Who the product is for
- What problem the product solves
- Which user pain points matter most
- What belongs in the MVP
- Which metrics define success
- What risks and assumptions need validation
- What should wait until later versions

## Target Users

- Aspiring AI Product Managers
- Junior PMs practicing PRD writing
- Founders shaping early product ideas
- Builders planning MVPs before coding
- Students preparing for product management interviews
- Portfolio builders who want to show product strategy and frontend skills

## Key Features

- Modern SaaS dashboard interface
- Sticky header with GitHub and demo actions
- Strong hero section with portfolio-ready positioning
- Product Brief form for product idea, target users, pain points, platform, business goal, stage, and tone
- Mock AI generation experience with a short loading state
- Tabbed PRD document preview
- Generated sections for:
  - Product Overview
  - Target Users
  - Problem Statement
  - User Pain Points
  - Core Features
  - User Stories
  - MVP Scope
  - Success Metrics
  - Risks & Assumptions
  - Product Roadmap
- PM Reasoning section explaining product tradeoffs
- Empty state with sample preview
- Clear and Copy PRD buttons
- Clipboard fallback for browsers that block direct copy access
- Fully responsive layout for desktop and mobile

## Product Thinking

The project is built around practical PM thinking, not only visual design.

The generated PRD encourages users to reason through:

- Why the product matters
- What should be validated first
- What is included in the first version
- What should be avoided in V1
- Which success metrics indicate real value
- Which assumptions are risky

This makes PRDForge AI useful as both a frontend project and an AI Product Manager portfolio artifact.

## User Workflow

1. Enter a product name and rough product idea.
2. Define target users and their main pain points.
3. Select platform type, product stage, and PRD tone.
4. Add a business goal.
5. Click Generate PRD.
6. Review the generated PRD preview by section.
7. Copy the PRD draft and refine it for a case study, interview, or product plan.

## Tech Stack

- React
- Vite
- Tailwind CSS
- lucide-react
- JavaScript
- No backend
- No real AI API yet

## Screenshots

Screenshots can be added here after the project is deployed or captured locally.

Suggested screenshots:

- Hero section
- Product Brief workspace
- Generated PRD preview
- Mobile responsive layout

## How to Run Locally

Clone the repository:

```bash
git clone https://github.com/your-username/prdforge-ai.git
cd prdforge-ai
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed in your terminal, usually:

```text
http://localhost:5173/
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Folder Structure

```text
prdforge-ai/
├── public/
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── LICENSE
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## Future Improvements

- Connect to a real AI API for dynamic PRD generation
- Add editable PRD sections
- Add saved projects and local history
- Export PRDs to Markdown, PDF, or Google Docs
- Add templates for SaaS, mobile apps, AI agents, internal tools, and e-commerce products
- Add prioritization frameworks such as RICE or MoSCoW
- Add user research prompts and competitive analysis
- Add authentication and cloud storage
- Add deployment instructions for Vercel or Netlify

## Portfolio Value

PRDForge AI is valuable for an AI Product Manager portfolio because it shows the ability to:

- Identify a real workflow problem
- Design a focused MVP
- Translate ambiguous ideas into structured requirements
- Think through users, metrics, risks, and roadmap
- Build a clean, responsive SaaS-style interface
- Communicate product strategy through an interactive tool
- Keep the first version simple while leaving room for AI-powered improvements

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

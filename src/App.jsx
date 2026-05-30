import React, { useMemo, useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clipboard,
  FileText,
  Github,
  Layers3,
  Lightbulb,
  Loader2,
  Map,
  Rocket,
  ShieldAlert,
  Sparkles,
  Target,
  Users,
  Wand2,
  X,
} from 'lucide-react';

const sampleForm = {
  productName: 'StudySprint AI',
  productIdea:
    'An AI study planning app that helps college students break big exam goals into weekly study plans and personalized practice sessions.',
  targetUsers: 'College students preparing for midterms, finals, and certification exams',
  painPoints:
    'Students feel overwhelmed, procrastinate, and struggle to know what to study first.',
  platformType: 'Mobile App',
  businessGoal:
    'Increase paid subscriptions by helping students build consistent study habits.',
  productStage: 'MVP',
  prdTone: 'Interview Portfolio Style',
};

// Empty values are used when the Clear button resets the workspace.
const emptyForm = {
  productName: '',
  productIdea: '',
  targetUsers: '',
  painPoints: '',
  platformType: 'Web App',
  businessGoal: '',
  productStage: 'Idea',
  prdTone: 'Professional',
};

// Tabs keep the generated PRD easy to scan without adding routing.
const tabs = [
  { id: 'overview', label: 'Overview', icon: FileText },
  { id: 'users', label: 'Users & Problems', icon: Users },
  { id: 'features', label: 'Features', icon: Layers3 },
  { id: 'mvp', label: 'MVP Scope', icon: Target },
  { id: 'metrics', label: 'Metrics', icon: BarChart3 },
  { id: 'roadmap', label: 'Roadmap', icon: Map },
  { id: 'risks', label: 'Risks', icon: ShieldAlert },
];

const platformOptions = [
  'Web App',
  'Mobile App',
  'SaaS',
  'Internal Tool',
  'AI Agent',
  'E-commerce Tool',
];

const stageOptions = ['Idea', 'MVP', 'Beta', 'Growth'];

const toneOptions = [
  'Professional',
  'Startup Style',
  'Concise',
  'Interview Portfolio Style',
];

function withFallback(value, fallback) {
  return value.trim() || fallback;
}

// Mock generation logic: this replaces a future AI API call in the MVP.
function buildPrd(form) {
  const productName = withFallback(form.productName, 'Untitled Product');
  const productIdea = withFallback(
    form.productIdea,
    'a product that solves a meaningful user problem',
  );
  const targetUsers = withFallback(form.targetUsers, 'early target users');
  const painPoints = withFallback(
    form.painPoints,
    'users need a faster, clearer way to complete the job they are trying to do',
  );
  const businessGoal = withFallback(
    form.businessGoal,
    'validate demand, improve activation, and create a repeatable user workflow',
  );

  return {
    productName,
    tone: form.prdTone,
    overview: {
      summary: `${productName} is a ${form.platformType.toLowerCase()} in the ${form.productStage.toLowerCase()} stage. It helps ${targetUsers.toLowerCase()} turn a difficult workflow into a clearer, more repeatable experience.`,
      productIdea,
      businessGoal,
      stage: form.productStage,
      platform: form.platformType,
    },
    users: {
      targetUsers,
      problemStatement: `${targetUsers} struggle because ${painPoints.toLowerCase()} The product should reduce uncertainty, shorten the path to value, and make the next best action easy to understand.`,
      painPoints: [
        painPoints,
        'Users may not know which action matters first.',
        'Users need confidence that the product output is useful enough to act on.',
      ],
      stories: [
        `As a ${targetUsers.toLowerCase()}, I want to describe my goal so that ${productName} can create a relevant starting point.`,
        'As a user, I want clear recommendations so that I can move forward without guessing.',
        'As a user, I want to edit generated outputs so that the final result fits my real context.',
        'As a product manager, I want usage signals so that I can learn which outputs create value.',
      ],
    },
    features: [
      'Guided brief intake that captures user, problem, goal, and constraints.',
      'Mock AI generation that converts the brief into a structured PRD draft.',
      'Sectioned document preview for reviewing product overview, users, MVP, metrics, roadmap, and risks.',
      'Copy-ready PRD output for portfolio notes, interview prep, or stakeholder review.',
      'Product thinking prompts that explain what to validate and what to avoid in V1.',
    ],
    mvp: [
      'Product brief form with the minimum fields needed to understand the idea.',
      'Local mock generation logic that produces a realistic PRD structure.',
      'PRD preview with clearly separated sections and practical product language.',
      'Copy and reset actions so users can quickly iterate on multiple ideas.',
    ],
    metrics: [
      'Activation rate: users who generate a first PRD after landing on the page.',
      'Copy rate: generated PRDs copied to the clipboard.',
      'Input completion rate: users who complete product idea, target users, and pain points.',
      `Business impact signal: progress toward "${businessGoal}".`,
    ],
    risks: [
      'The draft may feel too generic until real AI generation or richer templates are added.',
      'Users may over-trust generated PRDs without validating assumptions through interviews.',
      'The MVP should avoid complex collaboration features before the core generation workflow is proven.',
      'Clipboard permissions can vary by browser, so the copy action needs a fallback message.',
    ],
    roadmap: [
      'Phase 1: Validate the product brief, mock output quality, and copy workflow.',
      'Phase 2: Add real AI generation, saved documents, and editable PRD sections.',
      'Phase 3: Add templates for SaaS, mobile apps, internal tools, AI agents, and e-commerce tools.',
      'Phase 4: Add collaboration, export options, and portfolio-ready case study mode.',
    ],
    reasoning: {
      matters: `${productName} matters because it targets a clear workflow gap for ${targetUsers.toLowerCase()} and connects the user problem to a measurable business goal.`,
      validateFirst:
        'Validate whether users trust the generated structure enough to edit, copy, and use it in a real product conversation.',
      included:
        'The MVP includes brief intake, mock generation, structured PRD preview, PM reasoning, clear, and copy actions.',
      avoid:
        'Avoid accounts, team collaboration, complex permissions, payment flows, and real AI costs until the core PRD workflow proves useful.',
    },
  };
}

// Converts the generated PRD object into copy-friendly Markdown text.
function formatPrdText(prd) {
  if (!prd) return '';

  const list = (items) => items.map((item) => `- ${item}`).join('\n');

  return `# ${prd.productName} PRD

Tone: ${prd.tone}
Platform: ${prd.overview.platform}
Product Stage: ${prd.overview.stage}

## Product Overview
${prd.overview.summary}

Product idea: ${prd.overview.productIdea}
Business goal: ${prd.overview.businessGoal}

## Target Users
${prd.users.targetUsers}

## Problem Statement
${prd.users.problemStatement}

## User Pain Points
${list(prd.users.painPoints)}

## Core Features
${list(prd.features)}

## User Stories
${list(prd.users.stories)}

## MVP Scope
${list(prd.mvp)}

## Success Metrics
${list(prd.metrics)}

## Risks & Assumptions
${list(prd.risks)}

## Product Roadmap
${list(prd.roadmap)}

## PM Reasoning
- Why this product matters: ${prd.reasoning.matters}
- What should be validated first: ${prd.reasoning.validateFirst}
- What is included in MVP: ${prd.reasoning.included}
- What should be avoided in V1: ${prd.reasoning.avoid}
`;
}

function Field({ label, helper, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-800">
        {label}
      </span>
      {children}
      {helper && <span className="mt-2 block text-xs text-slate-500">{helper}</span>}
    </label>
  );
}

// Small reusable input components keep styling consistent and beginner-friendly.
function TextInput(props) {
  return (
    <input
      {...props}
      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
    />
  );
}

function TextArea(props) {
  return (
    <textarea
      {...props}
      className="min-h-28 w-full resize-y rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
    />
  );
}

function SelectInput({ children, ...props }) {
  return (
    <select
      {...props}
      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
    >
      {children}
    </select>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-slate-650">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ValueCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-white">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-base font-black text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
    </div>
  );
}

function ResultCard({ title, children }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-3 text-lg font-black text-slate-950">{title}</h3>
      {children}
    </div>
  );
}

export default function App() {
  const [form, setForm] = useState(sampleForm);
  const [prd, setPrd] = useState(null);
  const [message, setMessage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const prdText = useMemo(() => formatPrdText(prd), [prd]);

  function updateField(field, value) {
    setForm((currentForm) => ({ ...currentForm, [field]: value }));
    setMessage('');
  }

  function handleGenerate() {
    if (!form.productIdea.trim()) {
      setPrd(null);
      setMessage('Add a product idea first, then generate your PRD draft.');
      return;
    }

    setMessage('');
    setIsGenerating(true);

    // Simulate an AI generation moment without calling a real API.
    window.setTimeout(() => {
      setPrd(buildPrd(form));
      setActiveTab('overview');
      setIsGenerating(false);
      setMessage('Your AI-generated PRD draft is ready.');
    }, 800);
  }

  function handleClear() {
    setForm(emptyForm);
    setPrd(null);
    setActiveTab('overview');
    setMessage('Workspace cleared. Add a new product brief to start again.');
  }

  async function handleCopy() {
    if (!prdText) {
      setMessage('Generate a PRD first, then you can copy it.');
      return;
    }

    try {
      await navigator.clipboard.writeText(prdText);
      setMessage('PRD copied to clipboard.');
    } catch {
      // Some browsers block navigator.clipboard in local previews, so this is a fallback.
      const textArea = document.createElement('textarea');
      textArea.value = prdText;
      textArea.setAttribute('readonly', '');
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      document.body.appendChild(textArea);
      textArea.select();

      const copied = document.execCommand('copy');
      document.body.removeChild(textArea);
      setMessage(
        copied
          ? 'PRD copied to clipboard.'
          : 'Copy was blocked by the browser. Select the preview text and copy it manually.',
      );
    }
  }

  function renderTabContent() {
    if (!prd) return null;

    // Each tab maps to a focused section of the generated PRD document.
    const content = {
      overview: (
        <div className="grid gap-4">
          <ResultCard title="Product Overview">
            <p className="text-sm leading-7 text-slate-650">{prd.overview.summary}</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  Platform
                </p>
                <p className="mt-1 font-semibold text-slate-900">{prd.overview.platform}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  Stage
                </p>
                <p className="mt-1 font-semibold text-slate-900">{prd.overview.stage}</p>
              </div>
            </div>
          </ResultCard>
          <ResultCard title="PM Reasoning">
            <BulletList
              items={[
                `Why this product matters: ${prd.reasoning.matters}`,
                `What should be validated first: ${prd.reasoning.validateFirst}`,
                `What is included in MVP: ${prd.reasoning.included}`,
                `What should be avoided in V1: ${prd.reasoning.avoid}`,
              ]}
            />
          </ResultCard>
        </div>
      ),
      users: (
        <div className="grid gap-4">
          <ResultCard title="Target Users">
            <p className="text-sm leading-7 text-slate-650">{prd.users.targetUsers}</p>
          </ResultCard>
          <ResultCard title="Problem Statement">
            <p className="text-sm leading-7 text-slate-650">
              {prd.users.problemStatement}
            </p>
          </ResultCard>
          <ResultCard title="User Pain Points">
            <BulletList items={prd.users.painPoints} />
          </ResultCard>
        </div>
      ),
      features: (
        <div className="grid gap-4">
          <ResultCard title="Core Features">
            <BulletList items={prd.features} />
          </ResultCard>
          <ResultCard title="User Stories">
            <BulletList items={prd.users.stories} />
          </ResultCard>
        </div>
      ),
      mvp: (
        <ResultCard title="MVP Scope">
          <BulletList items={prd.mvp} />
        </ResultCard>
      ),
      metrics: (
        <ResultCard title="Success Metrics">
          <BulletList items={prd.metrics} />
        </ResultCard>
      ),
      roadmap: (
        <ResultCard title="Product Roadmap">
          <BulletList items={prd.roadmap} />
        </ResultCard>
      ),
      risks: (
        <ResultCard title="Risks & Assumptions">
          <BulletList items={prd.risks} />
        </ResultCard>
      ),
    };

    return content[activeTab];
  }

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-white shadow-soft">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xl font-black tracking-tight text-slate-950">
                PRDForge AI
              </p>
              <p className="text-sm text-slate-500">
                AI-style PRD workspace for product builders
              </p>
            </div>
            <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700">
              AI Product Manager Tool
            </span>
          </div>

          <div className="flex gap-3">
            <button className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50">
              <Github className="h-4 w-4" />
              GitHub
            </button>
            <a
              href="#workspace"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 text-sm font-bold text-white shadow-sm transition hover:bg-slate-800"
            >
              Demo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-indigo-100 via-emerald-50 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
              <Wand2 className="h-4 w-4 text-indigo-600" />
              Mock AI generation, portfolio-ready output
            </div>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Turn Product Ideas Into Investor-Ready PRDs
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              PRDForge AI helps product managers, founders, and builders
              transform rough ideas into structured product requirement
              documents, MVP scopes, user stories, and success metrics.
            </p>
            <a
              href="#workspace"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-6 text-sm font-black text-white shadow-soft transition hover:bg-indigo-700"
            >
              Generate My PRD
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <ValueCard
              icon={FileText}
              title="Generate PRDs"
              text="Convert a rough product idea into a structured document with clear sections."
            />
            <ValueCard
              icon={Target}
              title="Define MVP Scope"
              text="Separate the first useful version from distracting V1 extras."
            />
            <ValueCard
              icon={Rocket}
              title="Prioritize Product Features"
              text="Frame features around users, problems, success metrics, and roadmap stages."
            />
          </div>
        </div>
      </section>

      <section id="workspace" className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-indigo-600">
              Main Workspace
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
              Product Manager Brief to PRD
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-500">
            This MVP keeps all generation local and mock-based, making the code
            easier to study before adding real AI.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(380px,0.9fr)_minmax(0,1.1fr)]">
          <section className="min-w-0 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft sm:p-7">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-black text-slate-950">
                  Product Brief
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Start with the minimum context a PM needs to shape a useful PRD.
                </p>
              </div>
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-50 text-amber-600">
                <Lightbulb className="h-5 w-5" />
              </div>
            </div>

            <div className="space-y-5">
              <Field label="Product Name">
                <TextInput
                  value={form.productName}
                  onChange={(event) => updateField('productName', event.target.value)}
                  placeholder="Example: StudySprint AI"
                />
              </Field>

              <Field
                label="Product Idea"
                helper="Example: An AI tool that helps junior product managers write better PRDs."
              >
                <TextArea
                  value={form.productIdea}
                  onChange={(event) => updateField('productIdea', event.target.value)}
                  placeholder="Describe the product idea in a few sentences."
                />
              </Field>

              <Field label="Target Users">
                <TextInput
                  value={form.targetUsers}
                  onChange={(event) => updateField('targetUsers', event.target.value)}
                  placeholder="Who is this product built for?"
                />
              </Field>

              <Field label="Main User Pain Points">
                <TextArea
                  value={form.painPoints}
                  onChange={(event) => updateField('painPoints', event.target.value)}
                  placeholder="What are users struggling with today?"
                />
              </Field>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Platform Type">
                  <SelectInput
                    value={form.platformType}
                    onChange={(event) => updateField('platformType', event.target.value)}
                  >
                    {platformOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </SelectInput>
                </Field>

                <Field label="Product Stage">
                  <SelectInput
                    value={form.productStage}
                    onChange={(event) => updateField('productStage', event.target.value)}
                  >
                    {stageOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </SelectInput>
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Business Goal">
                  <TextInput
                    value={form.businessGoal}
                    onChange={(event) => updateField('businessGoal', event.target.value)}
                    placeholder="Example: Improve activation"
                  />
                </Field>

                <Field label="PRD Tone">
                  <SelectInput
                    value={form.prdTone}
                    onChange={(event) => updateField('prdTone', event.target.value)}
                  >
                    {toneOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </SelectInput>
                </Field>
              </div>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-4 text-sm font-black text-white shadow-soft transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-indigo-400"
              >
                {isGenerating ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Wand2 className="h-4 w-4" />
                )}
                {isGenerating ? 'Generating PRD...' : 'Generate PRD'}
              </button>
              <button
                onClick={handleClear}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-black text-slate-700 transition hover:bg-slate-50"
              >
                <X className="h-4 w-4" />
                Clear
              </button>
              <button
                onClick={handleCopy}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-black text-slate-700 transition hover:bg-slate-50"
              >
                <Clipboard className="h-4 w-4" />
                Copy PRD
              </button>
            </div>

            {message && (
              <p className="mt-4 rounded-2xl bg-slate-100 px-4 py-3 text-sm font-bold text-slate-700">
                {message}
              </p>
            )}
          </section>

          <section className="min-w-0 rounded-[2rem] border border-slate-200 bg-slate-50 p-4 shadow-soft sm:p-5">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 sm:p-7">
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-black text-slate-950">
                    PRD Document Preview
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Review the generated draft as a structured PM document.
                  </p>
                </div>
                {prd && (
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">
                    <Sparkles className="h-3.5 w-3.5" />
                    AI-generated draft
                  </span>
                )}
              </div>

              {isGenerating && (
                <div className="grid min-h-[34rem] place-items-center rounded-3xl border border-dashed border-indigo-200 bg-indigo-50/60 p-8 text-center">
                  <div>
                    <Loader2 className="mx-auto mb-4 h-10 w-10 animate-spin text-indigo-600" />
                    <h4 className="text-lg font-black text-slate-950">
                      Generating PRD...
                    </h4>
                    <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                      Organizing the brief into product strategy, MVP scope,
                      metrics, roadmap, and risks.
                    </p>
                  </div>
                </div>
              )}

              {!isGenerating && prd && (
                <div>
                  <div className="mb-5 flex gap-2 overflow-x-auto rounded-2xl bg-slate-100 p-2">
                    {tabs.map((tabItem) => {
                      const Icon = tabItem.icon;
                      const isActive = activeTab === tabItem.id;

                      return (
                        <button
                          key={tabItem.id}
                          onClick={() => setActiveTab(tabItem.id)}
                          className={`inline-flex shrink-0 items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold transition ${
                            isActive
                              ? 'bg-white text-slate-950 shadow-sm'
                              : 'text-slate-500 hover:text-slate-800'
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                          {tabItem.label}
                        </button>
                      );
                    })}
                  </div>

                  <div className="rounded-3xl bg-slate-50 p-3 sm:p-4">
                    {renderTabContent()}
                  </div>
                </div>
              )}

              {!isGenerating && !prd && (
                <div className="grid min-h-[34rem] place-items-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
                  <div className="max-w-md">
                    <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-3xl bg-white text-indigo-600 shadow-sm">
                      <FileText className="h-7 w-7" />
                    </div>
                    <h4 className="text-xl font-black text-slate-950">
                      Your PRD will appear here
                    </h4>
                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      Fill in the product brief and generate a structured PRD draft.
                    </p>
                    <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-4 text-left shadow-sm">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                        <p className="text-xs font-black uppercase tracking-wide text-slate-400">
                          Sample mini preview
                        </p>
                      </div>
                      <p className="font-black text-slate-950">Product Overview</p>
                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        A focused summary of the product idea, target users,
                        problem, MVP scope, and measurable outcomes.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

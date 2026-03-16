import {
  ShieldCheck,
  MessageCircle,
  Database,
  Waves,
  PhoneCall,
  ArrowRight,
  CheckCircle2,
  Building2,
  BookOpen,
  Volume2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

const timelineSteps = [
  {
    step: "Step 1",
    title: "Share or @mention VeriGuard AI",
    subtitle: "將可疑訊息轉傳或標記給 VeriGuard AI",
    description:
      "From WhatsApp, WeChat, Facebook or SMS, seniors or their family members simply forward the suspicious content or @mention the bot in a chat.",
    icon: MessageCircle
  },
  {
    step: "Step 2",
    title: "RightPick’s AI verifies against trusted sources",
    subtitle: "RightPick 專屬 AI 對照權威資料庫",
    description:
      "RightPick Technology’s AI engine cross‑references official health, finance, and public‑sector databases, similar to Douyin’s AI‑Verification, but across platforms.",
    icon: Database
  },
  {
    step: "Step 3",
    title: "Instant, human‑friendly verdict",
    subtitle: "即時、好懂的查核結論",
    description:
      "Users receive a concise summary explaining whether the claim is true, misleading, or false—with clear next‑step guidance they can act on or share.",
    icon: ShieldCheck
  }
];

const chatMessages = [
  {
    from: "relative",
    label: "Forwarded message",
    body: "\"Drink this herbal mixture once to permanently cure diabetes. Doctors hate it – share before it's deleted!\""
  },
  {
    from: "senior",
    label: "Grandma",
    body: "\"Is this real? Should I stop my medication?\""
  },
  {
    from: "ai",
    label: "VeriGuard AI",
    body: "This claim is false and potentially dangerous.\n\n• There is currently no one‑time cure for diabetes.\n• Stopping prescribed medication without a doctor's supervision can cause serious harm.\n\nRecommendation: Do not follow this advice. Speak with your doctor before changing any treatment. Here are reputable sources you can share with your family…"
  }
];

const features = [
  {
    title: "Knowledge Base for Families",
    description:
      "Every verified claim is stored in a browsable \"Truth Library\" so families can revisit answers and spot repeat scams.",
    icon: Database
  },
  {
    title: "Cross‑Platform Protection",
    description:
      "One assistant that follows seniors across WhatsApp, WeChat, Facebook, SMS, and email—wherever misinformation travels.",
    icon: Waves
  },
  {
    title: "Voice‑First for Seniors",
    description:
      "Tap, talk, and listen. Seniors can send voice notes and receive spoken explanations, not just dense text.",
    icon: Volume2
  }
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-emerald-500/25 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pt-8">
        <header className="flex items-center justify-between gap-4 rounded-full border border-slate-800/80 bg-slate-950/70 px-4 py-2 shadow-lg shadow-slate-900/70 backdrop-blur-md sm:px-6">
          <div className="flex items-center gap-2">
            {/* RightPick corporate logo placeholder */}
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-corporateBlue text-white shadow-md shadow-corporateBlue/40">
              <Building2 className="h-5 w-5" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight sm:text-base">
                VeriGuard AI
              </span>
              <span className="text-[11px] text-slate-400 sm:text-xs">
                by RightPick Technology Limited
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-xs font-medium text-slate-300 sm:flex">
            <a href="#how-it-works" className="hover:text-white">
              How it works
            </a>
            <a href="#features" className="hover:text-white">
              Platform
            </a>
            <a href="#demo" className="hover:text-white">
              Live preview
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>

          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="#contact">
              <PhoneCall className="mr-2 h-4 w-4" />
              Request demo
            </a>
          </Button>
        </header>

        <div className="mt-10 grid flex-1 gap-10 lg:mt-14 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-center">
          <section className="space-y-8">
            <div className="badge-soft w-fit">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-safeGreen-500/20 text-[11px] text-safeGreen-300">
                <ShieldCheck className="h-3.5 w-3.5" />
              </span>
              <span className="text-xs uppercase tracking-wide text-slate-300">
                Universal truth guardian for seniors
              </span>
            </div>

            <div className="space-y-4">
              {/* Core product value proposition in bilingual form */}
              <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Empowering Seniors with{" "}
                <span className="gradient-text">
                  Universal AI Fact‑Checking
                </span>
              </h1>
              <p className="text-sm font-medium text-slate-200 sm:text-base">
                A cross‑platform solution by RightPick Technology to bridge the
                digital trust gap for aging populations.
              </p>
              <p className="text-sm font-medium text-slate-200 sm:text-base">
                由 RightPick Technology Limited 打造的跨平台事實查核 AI，幫助長輩與家庭在充滿假消息的數位世界中重建信任。
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <a href="#contact">
                  Request demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#knowledge">
                  Explore VeriGuard Wiki
                </a>
              </Button>
            </div>

            <div className="grid gap-4 text-xs text-slate-300 sm:grid-cols-3 sm:text-sm">
              <Card>
                <CardHeader>
                  <CardTitle>Designed for aging eyes</CardTitle>
                  <CardDescription>
                    專為長輩視力與操作習慣設計的高對比介面與大按鈕。
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  High‑contrast layouts, generous tap targets, and voice‑first
                  flows tuned for seniors and their caregivers.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Evidence, not opinions</CardTitle>
                  <CardDescription>
                    以權威醫療與公共衛生資料為基礎，而非網路流言或個人意見。
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Every verdict is grounded in traceable medical, financial, and
                  public‑sector references your compliance team can audit.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>B2B & B2C ready</CardTitle>
                  <CardDescription>
                    適合保險公司、診所與長照機構導入，成為家庭安心的數位守門員。
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Flexible deployment models for insurers, providers, NGOs, and
                  consumer apps seeking to add digital safety as a feature.
                </CardContent>
              </Card>
            </div>
          </section>

          <section
            id="demo"
            className="glass-panel relative rounded-3xl border border-slate-800/80 bg-slate-950/70 p-4 shadow-2xl shadow-slate-900/80 sm:p-5"
          >
            <div className="mb-3 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-trustBlue/90 text-[13px] text-white">
                  Q
                </span>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-slate-100">
                    Demo: Family Chat
                  </span>
                  <span className="text-[11px] text-slate-400">
                    How VeriGuard AI intervenes in real time
                  </span>
                </div>
              </div>
              <span className="rounded-full bg-slate-900/80 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-safeGreen-300">
                Live preview
              </span>
            </div>

            <div className="space-y-3 rounded-2xl bg-slate-900/80 p-3 text-xs sm:p-4 sm:text-sm">
              {chatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.from === "ai" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl border px-3 py-2 ${
                      msg.from === "ai"
                        ? "border-safeGreen-500/40 bg-slate-900/90 text-slate-50"
                        : "border-slate-700/80 bg-slate-900/80 text-slate-100"
                    }`}
                  >
                    <div className="mb-1 flex items-center gap-2 text-[11px]">
                      <span
                        className={`inline-flex h-4 w-4 items-center justify-center rounded-full text-[10px] ${
                          msg.from === "ai"
                            ? "bg-safeGreen-500/90 text-slate-950"
                            : "bg-slate-700 text-slate-100"
                        }`}
                      >
                        {msg.from === "ai" ? (
                          <ShieldCheck className="h-3 w-3" />
                        ) : (
                          msg.label[0]
                        )}
                      </span>
                      <span className="font-medium text-slate-200">
                        {msg.label}
                      </span>
                    </div>
                    <p className="whitespace-pre-line text-[11px] leading-relaxed text-slate-100 sm:text-xs">
                      {msg.body}
                    </p>
                  </div>
                </div>
              ))}

              <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3 w-3 text-safeGreen-400" />
                  <span>Backed by WHO & CDC guidance templates</span>
                </div>
                <span>For illustration only</span>
              </div>
            </div>
          </section>
        </div>

        <section
          id="features"
          className="mt-16 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
        >
          <div className="space-y-5">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              From one-off fact checks to a living “Truth Database”
            </h2>
            <p className="mt-1 text-sm font-medium text-slate-200">
              從單次查證，進化為可被全家共享的「長輩安心知識庫」
            </p>
            <p className="max-w-2xl text-sm text-slate-300">
              Every interaction feeds a centralized Knowledge Wiki tuned for
              seniors. Families and partners can search past claims, see what
              is trending, and deploy proactive education before the next wave
              of hoaxes hits.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="glass-panel flex flex-col gap-2 rounded-2xl p-4"
                >
                  <div className="flex items-center gap-2">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900/80 text-safeGreen-400">
                      <feature.icon className="h-4 w-4" />
                    </div>
                    <p className="text-sm font-semibold text-slate-100">
                      {feature.title}
                    </p>
                  </div>
                  <p className="text-xs text-slate-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-2 grid gap-4 text-xs text-slate-300 sm:grid-cols-3">
              <div>
                <p className="font-semibold text-slate-200">For families</p>
                <p className="mt-1">
                  Give parents and grandparents a safety net they actually use,
                  without policing every message.
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-200">
                  For healthcare & insurers
                </p>
                <p className="mt-1">
                  Reduce call-center load and misinformation-driven admissions
                  with proactive digital guidance.
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-200">
                  For eldercare providers
                </p>
                <p className="mt-1">
                  Offer a differentiated safety benefit that extends beyond the
                  physical facility.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-panel flex flex-col justify-between rounded-3xl p-5 text-xs text-slate-200 sm:p-6 sm:text-sm">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-safeGreen-300">
                Voice‑to‑Text & Text‑to‑Voice
              </p>
              <h3 className="mt-2 text-lg font-semibold">
                Clear answers seniors can hear, not just read
              </h3>
              <p className="mt-1 text-xs font-medium text-slate-200">
                不只看得懂，也聽得懂的貼心說明。
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Many seniors are more comfortable speaking than typing. VeriGuard
                AI accepts voice notes, transcribes them, and returns both a
                written and spoken explanation.
              </p>
            </div>

            <div className="mt-4 rounded-2xl bg-slate-900/80 p-4">
              <div className="mb-2 flex items-center justify-between text-[11px] text-slate-300">
                <span className="inline-flex items-center gap-1.5">
                  <Volume2 className="h-3.5 w-3.5 text-safeGreen-400" />
                  Senior-friendly audio coaching
                </span>
                <span>Sample response</span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-200 sm:text-xs">
                “This message is trying to scare you into acting quickly. Real
                hospitals and governments do not ask for money or passwords in
                this way. It is safest to ignore this message and, if you are
                worried, call your usual clinic number or ask a trusted family
                member.”
              </p>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="mt-16 space-y-6 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-inner shadow-slate-900/80 sm:p-8"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                How VeriGuard AI works in the wild
              </h2>
              <p className="mt-1 text-sm font-medium text-slate-200">
                從收到訊息，到得到查證結果，只需三個直覺步驟。
              </p>
              <p className="mt-2 max-w-2xl text-sm text-slate-300">
                No new apps to learn. VeriGuard AI quietly integrates into the
                chat platforms seniors already use, powered by RightPick’s
                cross‑platform verification engine.
              </p>
            </div>
          </div>

          {/* Vertical timeline expressing the core workflow */}
          <ol className="relative mt-4 space-y-6 border-l border-slate-700/80 pl-4 sm:space-y-8 sm:pl-6">
            {timelineSteps.map((item) => (
              <li key={item.step} className="ml-2 space-y-2">
                <div className="absolute -left-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-slate-700 bg-slate-950">
                  <item.icon className="h-3.5 w-3.5 text-verificationGreen" />
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                  {item.step}
                </p>
                <p className="text-sm font-semibold text-slate-100">
                  {item.title}
                </p>
                <p className="text-xs font-medium text-slate-200">
                  {item.subtitle}
                </p>
                <p className="max-w-2xl text-xs leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section
          id="knowledge"
          className="mt-16 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
        >
          <Card className="border-slate-800/90 bg-slate-950/80">
            <CardHeader className="border-b-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-verificationGreen/20 text-verificationGreen">
                  <BookOpen className="h-4 w-4" />
                </div>
                <div>
                  <CardTitle>VeriGuard Wiki – Knowledge Archive</CardTitle>
                  <CardDescription>
                    A searchable truth archive curated from every verification
                    event.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <p>
                All debunked rumors and verified claims are organized into a
                structured knowledge base that partners can embed, browse, or
                integrate via API.
              </p>
              <p className="text-xs text-slate-300">
                所有經過查核的內容將累積成 VeriGuard Wiki，可依照主題與族群需求提供長期教育與風險監測。
              </p>
              <div className="grid gap-3 text-xs sm:grid-cols-3">
                <div className="rounded-xl border border-slate-800/80 bg-slate-900/70 p-3">
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                    Health
                  </p>
                  <p className="font-medium text-slate-100">健康與醫療謠言</p>
                  <p className="mt-1 text-[11px] text-slate-300">
                    Miracle cures, vaccine myths, supplement scams.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-800/80 bg-slate-900/70 p-3">
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                    Finance
                  </p>
                  <p className="font-medium text-slate-100">投資與詐騙訊息</p>
                  <p className="mt-1 text-[11px] text-slate-300">
                    High‑yield “guaranteed” schemes, phishing, fake subsidies.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-800/80 bg-slate-900/70 p-3">
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                    Social News
                  </p>
                  <p className="font-medium text-slate-100">社會議題與假新聞</p>
                  <p className="mt-1 text-[11px] text-slate-300">
                    Viral hoaxes, manipulated images, and misleading headlines.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-800/90 bg-slate-950/80">
            <CardHeader className="border-b-slate-800/80">
              <CardTitle>Engineered for impact by RightPick</CardTitle>
              <CardDescription>
                專注於以 AI 解決真實社會問題的技術團隊。
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              {/* About the developer – RightPick positioning */}
              <p>
                RightPick Technology Limited designs AI systems that address
                high‑stakes, real‑world challenges—from digital misinformation
                to elder safety and healthcare navigation.
              </p>
              <p className="text-xs text-slate-300">
                我們結合產品思維、風險控管與社會影響力評估，與醫療機構、保險公司與非營利組織協作，讓 AI
                在資訊過載的環境中成為可靠的守門員。
              </p>
              <ul className="mt-2 space-y-2 text-xs text-slate-300">
                <li className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-verificationGreen" />
                  Privacy‑aware architecture aligned with regional regulations.
                </li>
                <li className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-verificationGreen" />
                  Co‑design with clinicians, caregivers, and seniors.
                </li>
                <li className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-verificationGreen" />
                  Flexible deployment: pilot cohorts, white‑label, or API.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <footer
          id="contact"
          suppressHydrationWarning
          className="mt-16 rounded-3xl border border-slate-800/80 bg-slate-950/90 p-6 shadow-inner shadow-slate-900/80 sm:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Join the VeriGuard AI early partner program
              </h2>
              <p className="text-sm font-medium text-slate-200">
                加入 VeriGuard AI 早期合作夥伴計畫
              </p>
              <p className="max-w-xl text-sm text-slate-300">
                We are partnering with health systems, insurers, and
                elder-focused startups to pilot VeriGuard AI across real
                families. Share a few details and we will reach out with a
                tailored demo.
              </p>
              <ul className="mt-3 grid gap-2 text-xs text-slate-300 sm:grid-cols-2">
                <li className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-safeGreen-400" />
                  Reduce misinformation-driven visits & calls ／
                  降低因假消息造成的看診與諮詢量
                </li>
                <li className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-safeGreen-400" />
                  Strengthen trust with multi-generational families ／
                  強化與多世代家庭之間的信任關係
                </li>
                <li className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-safeGreen-400" />
                  Co-design safety experiences for seniors ／
                  共同打造適合長輩的數位安全體驗
                </li>
                <li className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-safeGreen-400" />
                  Access analytics on recurring myths & scams ／
                  取得長期追蹤常見謠言與詐騙的洞察
                </li>
              </ul>
            </div>

            <div className="glass-panel rounded-2xl p-5">
              <form className="space-y-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-medium text-slate-200"
                    >
                      Full name／姓名
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Dr. Mei Lin"
                      className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:border-safeGreen-400 focus:outline-none focus:ring-2 focus:ring-safeGreen-500/40"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-medium text-slate-200"
                    >
                      Work email／工作信箱
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@organization.com"
                      className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:border-safeGreen-400 focus:outline-none focus:ring-2 focus:ring-safeGreen-500/40"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="org"
                    className="text-xs font-medium text-slate-200"
                  >
                    Organization／機構或公司名稱
                  </label>
                  <input
                    id="org"
                    name="org"
                    type="text"
                    placeholder="Community clinic, insurer, startup…"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:border-safeGreen-400 focus:outline-none focus:ring-2 focus:ring-safeGreen-500/40"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-medium text-slate-200"
                  >
                    What problem are you trying to solve?／
                    您目前最想解決的長輩資訊安全問題是什麼？
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="e.g. Reduce health misinformation in our elder member base, support caregiving families, etc."
                    className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:border-safeGreen-400 focus:outline-none focus:ring-2 focus:ring-safeGreen-500/40"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-trustBlue px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-blue-500/40 transition hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-safeGreen-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  Request early access／申請早鳥試用
                </button>

                <p className="text-[10px] text-slate-400">
                  By submitting this form, you agree to be contacted about
                  VeriGuard AI pilots and research collaborations. No spam, ever.
                  送出表單即代表您同意我們就試辦計畫與研究合作與您聯繫，我們不會發送廣告垃圾郵件。
                </p>
              </form>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-slate-800/80 pt-4 text-[11px] text-slate-500 sm:flex-row">
            <span>© 2026 VeriGuard AI. All rights reserved.</span>
            <div className="flex flex-wrap items-center gap-3">
              <span>Made for families, clinics & eldercare innovators ／ 為家庭、診所與長照創新者打造。</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}


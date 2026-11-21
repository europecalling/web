import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyEnquireButton } from "@/components/ui/StickyEnquireButton";
import {
  BarChart3,
  Target,
  TrendingUp,
  Clock,
  Users,
  Award,
  LayoutDashboard,
  MousePointer,
  ArrowRight,
  BookOpen,
  LineChart,
  CheckCircle2,
} from "lucide-react";

const kpis = [
  {
    icon: TrendingUp,
    title: "Avg Student Growth",
    value: "24.9%",
    description: "Average improvement students achieve under the mentor.",
    status: "On track",
  },
  {
    icon: Clock,
    title: "Feedback Speed",
    value: "93%",
    description: "Timeliness of mentor feedback for student engagement.",
    status: "On track",
  },
  {
    icon: Users,
    title: "Retention Rate",
    value: "100%",
    description: "Percentage of students who continue with the mentor.",
    status: "On track",
  },
  {
    icon: Award,
    title: "Avg Teacher Score",
    value: "96",
    description: "Overall performance or satisfaction score for the mentor.",
    status: "On track",
  },
];

const workflowSteps = [
  { step: 1, label: "Open Mentor Insights", detail: "Navigate via top bar to Mentor Insights." },
  { step: 2, label: "Select a mentor", detail: "Use the SELECT MENTOR dropdown to choose a mentor." },
  { step: 3, label: "Review KPIs", detail: "Check the four KPI cards for high-level performance." },
  { step: 4, label: "Analyse by batch", detail: "Use Target vs Actual chart to compare batches." },
];

export default function MentorInsightsDocs() {
  return (
    <div className="min-h-screen bg-background flex flex-col overflow-x-hidden w-full max-w-full">
      <Header />

      <main className="bg-[#faf4e5] flex-grow overflow-x-hidden w-full max-w-full">
        {/* Hero */}
        <section className="relative py-24 md:py-32 text-center px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#faf4e5] via-[#faf4e5] to-transparent -z-20" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/10 rounded-full blur-3xl -z-10 animate-pulse-gentle" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse-gentle" />
          <div className="max-w-4xl mx-auto">
            <RevealOnScroll animation="fade-up" delay={0}>
              <span className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block">
                Client documentation
              </span>
            </RevealOnScroll>
            <RevealOnScroll animation="fade-up" delay={100}>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary mb-6 leading-tight">
                Mentor Insights
              </h1>
            </RevealOnScroll>
            <RevealOnScroll animation="fade-up" delay={200}>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-light">
                Aggregated performance across assigned batches. This guide explains how the dashboard works,
                what features and analytics it includes, and the recommended workflow.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        <div className="container-narrow mx-auto max-w-5xl px-4 pb-24 space-y-24">
          {/* How it works */}
          <RevealOnScroll animation="fade-up">
            <section className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary transition-transform duration-300 hover:scale-110">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary m-0">
                    How it works
                  </h2>
                  <p className="text-muted-foreground text-sm mt-1 m-0">Overview of the dashboard</p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-elegant space-y-6">
                <p className="text-muted-foreground leading-relaxed m-0">
                  <strong className="text-primary">Mentor Insights</strong> is a dedicated view inside the
                  analytics platform that shows performance data for a single mentor. You see one mentor at a
                  time, selected via the dropdown at the top of the page. The dashboard pulls data from all
                  batches assigned to that mentor and presents it as key metrics (KPIs) and a comparative chart.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Data is <strong className="text-primary">aggregated</strong> across the mentor’s assigned batches.</li>
                  <li>You can <strong className="text-primary">switch mentors</strong> instantly using the &quot;Select mentor&quot; control.</li>
                  <li>The date in the header indicates the <strong className="text-primary">context</strong> for the figures shown.</li>
                </ul>
              </div>
            </section>
          </RevealOnScroll>

          {/* Features */}
          <RevealOnScroll animation="fade-up">
            <section className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary transition-transform duration-300 hover:scale-110">
                  <LayoutDashboard className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary m-0">
                    Features
                  </h2>
                  <p className="text-muted-foreground text-sm mt-1 m-0">What the dashboard includes</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: MousePointer,
                    title: "Mentor selector",
                    text: "Dropdown to choose which mentor’s data is displayed. Shows mentor name and ID for quick identification.",
                  },
                  {
                    icon: BarChart3,
                    title: "KPI cards",
                    text: "Four summary cards: Avg Student Growth, Feedback Speed, Retention Rate, and Avg Teacher Score, each with an “On track” status.",
                  },
                  {
                    icon: LineChart,
                    title: "Target vs Actual chart",
                    text: "Bar chart comparing target growth % with achieved growth % per batch (e.g. HS Physics A, HS Mathematics A).",
                  },
                  {
                    icon: Target,
                    title: "Status indicators",
                    text: "Green “On track” badges on each KPI for at-a-glance health checks and goal attainment.",
                  },
                ].map((item, i) => (
                  <RevealOnScroll key={item.title} animation="scale-up" delay={i * 80}>
                    <div className="group flex gap-4 p-5 rounded-xl border border-border bg-card shadow-card hover:shadow-elevated hover:border-primary/20 transition-all duration-300">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-primary mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground m-0 leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </section>
          </RevealOnScroll>

          {/* Analytics */}
          <RevealOnScroll animation="fade-up">
            <section className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary transition-transform duration-300 hover:scale-110">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary m-0">
                    Analytics
                  </h2>
                  <p className="text-muted-foreground text-sm mt-1 m-0">Metrics and charts explained</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-8 max-w-2xl">
                The dashboard surfaces two levels of analytics: high-level KPIs and batch-level target vs actual growth.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {kpis.map((kpi, i) => (
                  <RevealOnScroll key={kpi.title} animation="fade-up" delay={i * 100}>
                    <div className="relative overflow-hidden rounded-xl border border-border bg-card p-5 shadow-card hover:shadow-elevated transition-all duration-300 group">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                          <kpi.icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-heading text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">
                          {kpi.title}
                        </h3>
                        <p className="text-2xl font-bold text-primary mb-2">{kpi.value}</p>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-700 animate-badge-pulse">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {kpi.status}
                        </span>
                        <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{kpi.description}</p>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
              <RevealOnScroll animation="fade-up">
                <div className="rounded-xl border border-border bg-card p-6 md:p-8 shadow-elegant">
                  <h3 className="font-heading text-lg font-semibold text-primary mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-gold" />
                    Target vs Actual Growth by Batch
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Compare target growth % with achieved growth per batch. Each batch has two bars: target (e.g. dark) and actual (e.g. green).
                  </p>
                  {/* Wireframe chart */}
                  <div className="flex flex-col gap-4 max-w-md">
                    {["HS Physics A", "HS Mathematics A"].map((label, i) => (
                      <div key={label} className="flex items-center gap-3">
                        <span className="w-32 text-sm text-muted-foreground shrink-0">{label}</span>
                        <div className="flex-1 flex items-center gap-2 h-8">
                          <div
                            className="h-full rounded bg-primary/30 origin-bottom animate-bar-grow"
                            style={{ width: "35%", animationDelay: `${i * 0.15}s` }}
                          />
                          <div
                            className="h-full rounded bg-green-500/90 origin-bottom animate-bar-grow"
                            style={{ width: "45%", animationDelay: `${i * 0.15 + 0.1}s` }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground w-16">Target / Actual</span>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            </section>
          </RevealOnScroll>

          {/* Workflow / Wireframe */}
          <RevealOnScroll animation="fade-up">
            <section className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary transition-transform duration-300 hover:scale-110">
                  <ArrowRight className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary m-0">
                    Workflow &amp; wireframe
                  </h2>
                  <p className="text-muted-foreground text-sm mt-1 m-0">Recommended steps to use Mentor Insights</p>
                </div>
              </div>
              <div className="space-y-6">
                {workflowSteps.map((item, i) => (
                  <RevealOnScroll key={item.step} animation="slide-in-right" delay={i * 120}>
                    <div className="flex gap-4 items-start p-5 rounded-xl border border-border bg-card shadow-card hover:border-primary/20 transition-colors duration-300">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold shrink-0">
                        {item.step}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading font-semibold text-primary mb-1">{item.label}</h3>
                        <p className="text-muted-foreground text-sm m-0">{item.detail}</p>
                      </div>
                      {i < workflowSteps.length - 1 && (
                        <ArrowRight className="w-5 h-5 text-muted-foreground/50 shrink-0 hidden sm:block" />
                      )}
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
              {/* Simple wireframe diagram */}
              <RevealOnScroll animation="scale-up" delay={200}>
                <div className="mt-10 rounded-2xl border-2 border-dashed border-border bg-muted/30 p-6 md:p-8">
                  <p className="text-center text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">
                    Page structure (wireframe)
                  </p>
                  <div className="flex flex-col gap-3 max-w-lg mx-auto">
                    <div className="h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-sm font-medium text-primary">
                      [ Top bar: Logo · Dashboard · Grade Management · Mentor Insights · Date · Bookmarks ]
                    </div>
                    <div className="h-14 rounded-lg bg-primary/5 border border-primary/20 flex items-center justify-between px-4 text-sm">
                      <span className="text-primary font-medium">Mentor Insights</span>
                      <span className="text-muted-foreground">[ SELECT MENTOR ▼ ]</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {[1, 2, 3, 4].map((n) => (
                        <div
                          key={n}
                          className="h-20 rounded-lg bg-card border border-border animate-scale-in"
                          style={{ animationDelay: `${n * 0.05}s` }}
                        />
                      ))}
                    </div>
                    <div className="h-32 rounded-lg bg-card border border-border flex items-center justify-center text-sm text-muted-foreground">
                      [ Target vs Actual Growth by Batch — Bar chart ]
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </section>
          </RevealOnScroll>

          {/* CTA */}
          <RevealOnScroll animation="fade-up">
            <section className="text-center py-8">
              <p className="text-muted-foreground text-sm">
                For technical or access support, contact your platform administrator or refer to your contract documentation.
              </p>
            </section>
          </RevealOnScroll>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
      <StickyEnquireButton />
    </div>
  );
}

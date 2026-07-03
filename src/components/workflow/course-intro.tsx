"use client";

import { LessonVideo, type Lesson } from "./lesson-video";
import { lessonsForStep } from "./cookbook-helpers";
import type { StepData } from "./workflow-stepper";
import type { SiteStats } from "@/lib/site-stats";
import type { PromptContributor } from "@/lib/github-prompt-contributor";
import { COOKBOOK_PHASES } from "./cookbook-phases";
import { SlideHeader } from "@/components/layout/slide-ui";

const FOCUS =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]";

export { COOKBOOK_PHASES };

export function CourseIntro({
  step,
  steps,
  onStart,
  onPick,
  stats,
}: {
  step: StepData;
  steps: StepData[];
  onStart: () => void;
  onPick?: (stepId: string) => void;
  stats?: SiteStats | null;
  contributors?: PromptContributor[];
}) {
  const recipeSteps = steps.filter((s) => /^\d+$/.test(s.step));
  const recipes = recipeSteps.length;
  const lessons = steps.reduce((n, s) => n + lessonsForStep(s).length, 0);

  const preview: Lesson | null = step.previewVideo
    ? {
        title: "Cookbook preview",
        youtubeId: step.previewVideo.youtubeId,
        href: step.previewVideo.href,
        duration: step.previewVideo.duration,
      }
    : null;

  return (
    <div className="px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <SlideHeader
          partLabel="Full masterclass"
          title="The Vibe Coding Cookbook"
          subtitle="From shower thought to shipped"
          lede="Build your first real app, idea to live, one recipe at a time. The AI does most of the typing, you make the calls that matter."
        >
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3">
            <button type="button" onClick={onStart} className="btn-primary !rounded-md">
              Start the course
              <span aria-hidden>→</span>
            </button>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[13px] text-[color:var(--ink-faded)]">
              <span><span className="font-semibold tabular-nums text-[color:var(--ink)]">{recipes}</span> recipes</span>
              <span aria-hidden className="h-1 w-1 rounded-full bg-[color:var(--ink-rule)]" />
              <span><span className="font-semibold tabular-nums text-[color:var(--ink)]">{lessons}</span> lessons</span>
              {stats && (
                <>
                  <span aria-hidden className="h-1 w-1 rounded-full bg-[color:var(--ink-rule)]" />
                  <span><span className="font-semibold tabular-nums text-[color:var(--ink)]">{stats.apps}</span> apps shipped</span>
                </>
              )}
              <span aria-hidden className="h-1 w-1 rounded-full bg-[color:var(--ink-rule)]" />
              <span className="font-semibold text-[color:var(--accent)]">Free</span>
            </div>
          </div>
        </SlideHeader>

        <div className="cookbook-slide-split">
          <div className="space-y-6">
            <section>
              <h2 className="slide-section-title">What&apos;s happening?</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--ink-soft)]">
                People who may not write code from scratch but who understand systems architecture, can direct AI agents with precision, and ship production-quality software at unprecedented speed.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--ink-soft)]">
                This cookbook distills a 10-step workflow from real shipped apps: prompts, templates, fixes, and the receipts from when things broke.
              </p>
            </section>

            <section>
              <h2 className="slide-section-title">The curriculum</h2>
              <ul className="mt-3 space-y-2 text-[14.5px] leading-relaxed text-[color:var(--ink-soft)]">
                {COOKBOOK_PHASES.map((phase) => (
                  <li key={phase.name} className="flex gap-2">
                    <span aria-hidden className="shrink-0 text-[color:var(--accent)]">•</span>
                    <span><span className="font-semibold text-[color:var(--ink)]">{phase.name}</span>, {phase.steps.length} {phase.steps.length === 1 ? "recipe" : "recipes"}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {preview && (
            <figure className="overflow-hidden rounded-md border border-[color:var(--ink-rule)] bg-[color:var(--paper)] shadow-sm">
              <LessonVideo lesson={preview} badge="Preview" />
            </figure>
          )}
        </div>

        <div className="mt-10 overflow-hidden rounded-md border border-[color:var(--ink-rule)] bg-[color:var(--paper)]">
          <div className="flex items-center gap-3 border-b border-[color:var(--ink-rule)] bg-[color:var(--paper-soft)] px-4 py-2">
            <span className="text-label">All recipes</span>
            <span className="ml-auto text-label">Time · lessons</span>
          </div>
          {COOKBOOK_PHASES.map((phase, fi) => {
            const items = recipeSteps.filter((s) => phase.steps.includes(s.step));
            if (items.length === 0) return null;
            const phaseLessons = items.reduce((a, s) => a + lessonsForStep(s).length, 0);
            return (
              <details key={phase.name} className={`group/f ${fi > 0 ? "border-t border-[color:var(--ink-rule)]" : ""}`}>
                <summary className="flex cursor-pointer list-none items-center gap-2.5 bg-[color:var(--paper-soft)] px-4 py-2.5 transition-colors hover:bg-[color:var(--sidebar-hover)] [&::-webkit-details-marker]:hidden">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="shrink-0 text-[color:var(--ink-faded)] transition-transform group-open/f:rotate-90">
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                  <span className="text-[13.5px] font-semibold text-[color:var(--ink)]">{phase.name}</span>
                  <span className="ml-auto font-mono text-[11px] tabular-nums text-[color:var(--ink-faded)]">
                    {items.length} {items.length === 1 ? "recipe" : "recipes"} · {phaseLessons} lessons
                  </span>
                </summary>
                <ul>
                  {items.map((s) => {
                    const n = lessonsForStep(s).length;
                    return (
                      <li key={s.step}>
                        <button
                          type="button"
                          onClick={() => onPick?.(s.step)}
                          className={`group/r flex w-full items-center gap-2.5 border-t border-[color:var(--ink-rule)] px-4 py-2.5 text-left transition-colors hover:bg-[color:var(--sidebar-hover)] ${FOCUS}`}
                        >
                          <span className="w-6 shrink-0 font-mono text-[12px] tabular-nums text-[color:var(--ink-faded)]">{s.step}</span>
                          <span className="min-w-0 flex-1 truncate text-[13.5px] font-semibold text-[color:var(--ink)]">{s.title}</span>
                          <span className="ml-auto flex shrink-0 items-center gap-3 whitespace-nowrap font-mono text-[11px] tabular-nums text-[color:var(--ink-faded)]">
                            {s.timeEstimate && <span className="hidden sm:inline">~{s.timeEstimate}</span>}
                            {n > 0 && <span>{n} {n === 1 ? "lesson" : "lessons"}</span>}
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="text-[color:var(--ink-rule)] transition-transform group-hover/r:translate-x-0.5 group-hover/r:text-[color:var(--ink-faded)]">
                              <path d="M9 6l6 6-6 6" />
                            </svg>
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </details>
            );
          })}
        </div>
      </div>
  );
}
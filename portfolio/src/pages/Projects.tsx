import { useEffect, useState } from 'react'
import forkcastGeneratedRecipe from '../assets/projects/forkcast/generated-recipe.jpeg'
import forkcastSavedRecipes from '../assets/projects/forkcast/saved-recipes.jpeg'
import forkcastSearch from '../assets/projects/forkcast/search.jpeg'
import forkcastSignIn from '../assets/projects/forkcast/sign-in.jpeg'
import forkcastTeamPhoto from '../assets/projects/forkcast/team photo.jpeg'
import thinkPinkChatbot from '../assets/projects/thinkpink/chatbot.PNG'
import thinkPinkHome from '../assets/projects/thinkpink/home.PNG'
import thinkPinkLearnTab from '../assets/projects/thinkpink/learn-tab.PNG'
import thinkPinkLog from '../assets/projects/thinkpink/log.PNG'
import thinkPinkMap from '../assets/projects/thinkpink/map.PNG'
import thinkPinkSolanaBadges from '../assets/projects/thinkpink/solana badges.PNG'
import thinkPinkTeamPhoto from '../assets/projects/thinkpink/team photo.JPEG'

type Project = {
  id: number
  title: string
  timeframe: string
  icon: string
  previewImage?: string
  award?: string
  description: string
  longDescription: string
  highlights: string[]
  features: string[]
  techStack: string[]
  gallery: { title: string; caption: string; tone: string; src?: string }[]
  links: {
    github?: string
    devpost?: string
    live?: string
  }
}

const projects: Project[] = [
  {
    id: 1,
    title: 'ForkCast: AI Recipe Application',
    timeframe: 'Sep 2025 - Present',
    icon: '🍳',
    previewImage: forkcastGeneratedRecipe,
    description:
      'Built a full-stack AI recipe app that generates personalized meals from available ingredients using natural-language input and real-time data flows.',
    longDescription:
      'ForkCast is an AI-assisted mobile cooking app designed to reduce decision fatigue and make home cooking faster. Users enter available ingredients in plain language and receive a personalized recipe flow with structured preparation steps.',
    highlights: [
      'Developed with React Native, Firebase Auth/Firestore, and Gemini API',
      'Converted ingredient prompts into structured step-by-step cooking instructions',
      'Implemented authentication and real-time syncing for reliable user sessions',
    ],
    features: [
      'Natural-language ingredient input with AI recipe generation',
      'Authentication and user-specific recipe history',
      'Real-time cloud sync for ingredient and preference updates',
      'Structured instruction formatting for readability on mobile',
    ],
    techStack: ['React Native', 'Firebase', 'Firestore', 'Gemini API', 'TypeScript'],
    gallery: [
      {
        title: 'Sign In Screen',
        caption: 'Authentication entry with Firebase-backed user sessions.',
        tone: 'from-amber-200 to-orange-100',
        src: forkcastSignIn,
      },
      {
        title: 'Ingredient Prompt View',
        caption: 'Quick entry for available ingredients before AI generation.',
        tone: 'from-orange-200 to-amber-100',
        src: forkcastSearch,
      },
      {
        title: 'Generated Recipe Flow',
        caption: 'Step-by-step recipe output optimized for mobile reading.',
        tone: 'from-purple-200 to-pink-100',
        src: forkcastGeneratedRecipe,
      },
      {
        title: 'Saved Recipes',
        caption: 'User-specific saved results synced through Firestore.',
        tone: 'from-blue-200 to-cyan-100',
        src: forkcastSavedRecipes,
      },
      {
        title: 'Team Build Snapshot',
        caption: 'ForkCast team collaboration during product iteration.',
        tone: 'from-rose-200 to-orange-100',
        src: forkcastTeamPhoto,
      },
    ],
    links: {},
  },
  {
    id: 2,
    title: 'Think Pink',
    timeframe: '2026',
    icon: '🎀',
    previewImage: thinkPinkHome,
    award: 'Winner - WingHacks 2026',
    description:
      'Hackathon project built for WingHacks 2026, focused on solving a real user problem with a polished product demo and pitch-ready implementation.',
    longDescription:
      'Think Pink was developed during WingHacks 2026 and awarded as a winning project. The build emphasized practical usability, polished design, and strong end-to-end product storytelling for judges and users.',
    highlights: [
      'Built and presented at WingHacks 2026',
      'Recognized as a winning project',
      'Published on Devpost for judges and public showcase',
    ],
    features: [
      'Rapid prototype-to-demo execution in hackathon timeline',
      'Clear user journey with clean visual flow',
      'Pitch-focused product framing and implementation detail',
      'Public showcase and documentation on Devpost',
    ],
    techStack: ['Hackathon Build', 'UI/UX', 'Rapid Prototyping', 'Product Pitching'],
    gallery: [
      {
        title: 'Landing Experience',
        caption: 'Initial entry flow designed for immediate clarity.',
        tone: 'from-pink-200 to-rose-100',
        src: thinkPinkHome,
      },
      {
        title: 'Learning Hub',
        caption: 'Educational resources and guided user content.',
        tone: 'from-rose-200 to-pink-100',
        src: thinkPinkLearnTab,
      },
      {
        title: 'Activity Log',
        caption: 'Clean tracking of user progress and interactions.',
        tone: 'from-fuchsia-200 to-purple-100',
        src: thinkPinkLog,
      },
      {
        title: 'Map Experience',
        caption: 'Location-informed interface component from the demo flow.',
        tone: 'from-violet-200 to-indigo-100',
        src: thinkPinkMap,
      },
      {
        title: 'Chatbot View',
        caption: 'Conversational support flow integrated into the product.',
        tone: 'from-purple-200 to-fuchsia-100',
        src: thinkPinkChatbot,
      },
      {
        title: 'Solana Badge Section',
        caption: 'On-chain themed reward/achievement visual presentation.',
        tone: 'from-indigo-200 to-violet-100',
        src: thinkPinkSolanaBadges,
      },
      {
        title: 'Team Photo',
        caption: 'WingHacks build team behind Think Pink.',
        tone: 'from-pink-200 to-rose-100',
        src: thinkPinkTeamPhoto,
      },
    ],
    links: {
      devpost: 'https://devpost.com/software/think-pink-m9sv7o',
    },
  },
  {
    id: 3,
    title: 'Readable',
    timeframe: '2026',
    icon: '📘',
    description:
      'Hackathon project focused on improving readability and accessibility through a clean, user-centered product experience.',
    longDescription:
      'Readable is a hackathon project centered on accessibility and comprehension. The product design prioritized simpler interfaces, clearer content hierarchy, and fast interaction loops for users who need lower cognitive load.',
    highlights: [
      'Designed and built for rapid iteration in a competitive hackathon environment',
      'Shipped a polished demo and public project showcase',
      'Published on Devpost for judges and portfolio visibility',
    ],
    features: [
      'Accessibility-first interface decisions',
      'Readable typography and visual hierarchy tuning',
      'Low-friction interaction model for quick use',
      'Demo-ready product story and documentation',
    ],
    techStack: ['Accessibility', 'UI Design', 'Frontend Prototyping', 'Hackathon Build'],
    gallery: [
      {
        title: 'Reading Mode',
        caption: 'Simplified typography and layout for easier scanning.',
        tone: 'from-sky-200 to-blue-100',
      },
      {
        title: 'Contrast Controls',
        caption: 'Adjustments for visibility and reduced visual strain.',
        tone: 'from-cyan-200 to-teal-100',
      },
      {
        title: 'Focus Layout',
        caption: 'Distraction-reduced interface for key content.',
        tone: 'from-emerald-200 to-green-100',
      },
    ],
    links: {
      devpost: 'https://devpost.com/software/readable-7r1eu2',
    },
  },
  {
    id: 4,
    title: 'Minesweeper Platform',
    timeframe: '2025',
    icon: '💣',
    description:
      'Engineered a production-style Minesweeper system spanning game logic, backend services, web UI, and CI/CD automation.',
    longDescription:
      'This project recreated Minesweeper as a full platform, not just a game clone. It includes deterministic gameplay logic, backend services for state and ranking, and a deployable browser-based interface with CI/CD automation.',
    highlights: [
      'Implemented deterministic C++ engine with seedable RNG, flood-fill, and replay',
      'Built REST/WebSocket backend with persistent leaderboards',
      'Deployed a WebAssembly front end with Docker and GitHub Actions CI/CD',
    ],
    features: [
      'Deterministic gameplay and replay support',
      'Persistent leaderboard and real-time update channel',
      'WebAssembly-powered browser game performance',
      'Automated deployment/testing pipeline',
    ],
    techStack: ['C++', 'WebAssembly', 'WebSocket', 'Docker', 'GitHub Actions'],
    gallery: [
      {
        title: 'Game Board',
        caption: 'Deterministic board generation with reproducible seeds.',
        tone: 'from-slate-200 to-zinc-100',
      },
      {
        title: 'Leaderboard View',
        caption: 'Persistent rankings served through backend services.',
        tone: 'from-neutral-200 to-stone-100',
      },
      {
        title: 'Deployment Pipeline',
        caption: 'Automated build/test/deploy workflow in CI/CD.',
        tone: 'from-gray-200 to-slate-100',
      },
    ],
    links: {},
  },
]

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [galleryIndex, setGalleryIndex] = useState(0)

  const carouselImages =
    activeProject?.gallery.filter(
      (item) => !item.title.toLowerCase().includes('team'),
    ) ?? []
  const teamImages =
    activeProject?.gallery.filter((item) =>
      item.title.toLowerCase().includes('team'),
    ) ?? []

  useEffect(() => {
    if (!activeProject) {
      return
    }

    const onEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveProject(null)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onEsc)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onEsc)
    }
  }, [activeProject])

  useEffect(() => {
    setGalleryIndex(0)
  }, [activeProject?.id])

  return (
    <>
      <div className="min-h-screen pt-24 px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              Projects
            </h1>
            <p className="text-lg text-muted-foreground">
              Selected technical work from classes, teams, and hackathons
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setActiveProject(project)}
                className="group text-left p-6 rounded-2xl border border-primary/20 bg-white shadow-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/15 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-4 gap-4">
                      <h3 className="group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs text-primary bg-secondary px-3 py-1 rounded-full whitespace-nowrap">
                        {project.timeframe}
                      </span>
                    </div>

                    {project.award && (
                      <p className="text-sm text-primary font-medium mb-3">{project.award}</p>
                    )}

                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                    <ul className="space-y-2 mb-4">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.techStack.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full bg-secondary text-primary border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center text-sm text-primary hover:underline">
                      Open Details →
                    </span>
                  </div>

                  <div className="hidden sm:flex w-20 md:w-24 lg:w-28 shrink-0">
                    <div className="w-full aspect-[9/19] rounded-[1.25rem] p-1 bg-gradient-to-br from-primary/60 via-accent/60 to-primary/30 shadow-lg shadow-primary/20">
                      {project.previewImage ? (
                        <img
                          src={project.previewImage}
                          alt={`${project.title} preview`}
                          className="w-full h-full rounded-[1rem] object-cover border-2 border-background"
                        />
                      ) : (
                        <div className="w-full h-full rounded-[1rem] border-2 border-background bg-white flex items-center justify-center">
                          <span className="text-3xl md:text-4xl">{project.icon}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeProject && (
        <div
          className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-primary/20 shadow-2xl shadow-primary/20"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-border px-6 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-2xl text-foreground">{activeProject.title}</h2>
                <p className="text-sm text-muted-foreground mt-1">{activeProject.timeframe}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="w-10 h-10 rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
                aria-label="Close project details"
              >
                ✕
              </button>
            </div>

            <div className="p-6 lg:p-8 space-y-8">
              {activeProject.award && (
                <div className="inline-flex px-3 py-1 rounded-full bg-secondary text-primary text-sm border border-primary/20">
                  {activeProject.award}
                </div>
              )}

              <p className="text-base text-muted-foreground leading-relaxed">
                {activeProject.longDescription}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-secondary/70 border border-primary/20 shadow-sm">
                  <h3 className="mb-3">Feature Highlights</h3>
                  <ul className="space-y-2">
                    {activeProject.features.map((feature) => (
                      <li key={feature} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-secondary/70 border border-primary/20 shadow-sm">
                  <h3 className="mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-white text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {activeProject.links.github && (
                  <a
                    href={activeProject.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    GitHub Repository
                  </a>
                )}

                {activeProject.links.devpost && (
                  <a
                    href={activeProject.links.devpost}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-secondary transition-colors"
                  >
                    View Devpost
                  </a>
                )}

                {activeProject.links.live && (
                  <a
                    href={activeProject.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-secondary transition-colors"
                  >
                    Live Demo
                  </a>
                )}

                {!activeProject.links.github &&
                  !activeProject.links.devpost &&
                  !activeProject.links.live && (
                    <span className="px-4 py-2 rounded-lg border border-border text-sm text-muted-foreground">
                      External links will be added soon.
                    </span>
                  )}
              </div>

              <div>
                <h3 className="mb-3">Project Images</h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {carouselImages.length > 0 && (
                    <div className="rounded-xl border border-primary/20 overflow-hidden bg-white shadow-sm">
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() =>
                            setGalleryIndex((index) =>
                              index === 0 ? carouselImages.length - 1 : index - 1,
                            )
                          }
                          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border border-border bg-white/90 text-primary hover:bg-white"
                          aria-label="Previous image"
                        >
                          {'<'}
                        </button>

                        {carouselImages[galleryIndex].src ? (
                          <div className="py-4 px-3">
                            <div className="mx-auto w-full max-w-[14rem] aspect-[9/19] rounded-[1.75rem] border-[5px] border-primary/25 bg-white shadow-lg shadow-primary/15 p-1 relative">
                              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-1.5 rounded-full bg-primary/25" />
                              <img
                                src={carouselImages[galleryIndex].src}
                                alt={carouselImages[galleryIndex].title}
                                className="w-full h-full rounded-[1.4rem] object-cover"
                              />
                            </div>
                          </div>
                        ) : (
                          <div
                            className={`h-56 bg-gradient-to-br ${carouselImages[galleryIndex].tone} flex items-center justify-center text-6xl`}
                          >
                            {activeProject.icon}
                          </div>
                        )}

                        <button
                          type="button"
                          onClick={() =>
                            setGalleryIndex((index) => (index + 1) % carouselImages.length)
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border border-border bg-white/90 text-primary hover:bg-white"
                          aria-label="Next image"
                        >
                          {'>'}
                        </button>
                      </div>

                      <div className="p-4 bg-white border-t border-border">
                        <p className="text-sm text-foreground font-medium mb-1">
                          {carouselImages[galleryIndex].title}
                        </p>
                        <p className="text-xs text-muted-foreground mb-3">
                          {carouselImages[galleryIndex].caption}
                        </p>
                        <div className="flex gap-2 flex-wrap">
                          {carouselImages.map((item, index) => (
                            <button
                              key={item.title}
                              type="button"
                              onClick={() => setGalleryIndex(index)}
                              className={`w-2.5 h-2.5 rounded-full ${
                                index === galleryIndex ? 'bg-primary' : 'bg-primary/30'
                              }`}
                              aria-label={`Open image ${index + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {teamImages.length > 0 && (
                    <div className="rounded-xl border border-primary/20 overflow-hidden bg-white shadow-sm">
                      {teamImages[0].src ? (
                        <img
                          src={teamImages[0].src}
                          alt={teamImages[0].title}
                          className="w-full h-auto max-h-[20rem] object-contain"
                        />
                      ) : (
                        <div
                          className={`h-56 bg-gradient-to-br ${teamImages[0].tone} flex items-center justify-center text-6xl`}
                        >
                          {activeProject.icon}
                        </div>
                      )}
                      <div className="p-4 bg-white border-t border-border">
                        <p className="text-sm text-foreground font-medium mb-1">{teamImages[0].title}</p>
                        <p className="text-xs text-muted-foreground">{teamImages[0].caption}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

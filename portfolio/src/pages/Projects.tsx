const projects = [
  {
    id: 1,
    title: 'ForkCast: AI Recipe Application',
    timeframe: 'Sep 2025 - Present',
    icon: '🍳',
    description:
      'Built a full-stack AI recipe app that generates personalized meals from available ingredients using natural-language input and real-time data flows.',
    highlights: [
      'Developed with React Native, Firebase Auth/Firestore, and Gemini API',
      'Converted ingredient prompts into structured step-by-step cooking instructions',
      'Implemented authentication and real-time syncing for reliable user sessions',
    ],
    tags: ['React Native', 'Firebase', 'Gemini API', 'LLM'],
    link: '#',
  },
  {
    id: 2,
    title: 'Think Pink',
    timeframe: '2026',
    icon: '🎀',
    award: 'Winner - WingHacks 2026',
    description:
      'Hackathon project built for WingHacks 2026, focused on solving a real user problem with a polished product demo and pitch-ready implementation.',
    highlights: [
      'Built and presented at WingHacks 2026',
      'Recognized as a winning project',
      'Published on Devpost for judges and public showcase',
    ],
    tags: ['Hackathon', 'Product', 'Devpost'],
    link: 'https://devpost.com/software/think-pink-m9sv7o',
  },
  {
    id: 3,
    title: 'Readable',
    timeframe: '2026',
    icon: '📘',
    description:
      'Hackathon project focused on improving readability and accessibility through a clean, user-centered product experience.',
    highlights: [
      'Designed and built for rapid iteration in a competitive hackathon environment',
      'Shipped a polished demo and public project showcase',
      'Published on Devpost for judges and portfolio visibility',
    ],
    tags: ['Hackathon', 'Accessibility', 'Devpost'],
    link: 'https://devpost.com/software/readable-7r1eu2',
  },
  {
    id: 4,
    title: 'Minesweeper Platform',
    timeframe: '2025',
    icon: '💣',
    description:
      'Engineered a production-style Minesweeper system spanning game logic, backend services, web UI, and CI/CD automation.',
    highlights: [
      'Implemented deterministic C++ engine with seedable RNG, flood-fill, and replay',
      'Built REST/WebSocket backend with persistent leaderboards',
      'Deployed a WebAssembly front end with Docker and GitHub Actions CI/CD',
    ],
    tags: ['C++', 'WebAssembly', 'WebSocket', 'Docker'],
    link: '#',
  },
]

export function Projects() {
  return (
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
            <div
              key={project.id}
              className="group p-6 rounded-xl border border-border bg-white hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
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

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-secondary text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target={project.link.startsWith('http') ? '_blank' : undefined}
                    rel={project.link.startsWith('http') ? 'noreferrer' : undefined}
                    className="inline-flex items-center text-sm text-primary hover:underline"
                  >
                    View Project →
                  </a>
                </div>

                <div className="hidden sm:flex w-20 md:w-24 lg:w-28 shrink-0">
                  <div className="w-full aspect-[9/19] rounded-[1.25rem] bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 shadow-inner flex items-center justify-center">
                    <span className="text-3xl md:text-4xl">{project.icon}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

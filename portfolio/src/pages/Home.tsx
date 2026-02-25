import { useEffect, useState } from 'react'
import resumePdf from '../assets/Ananyaa Sutaria Resume.pdf'
import profilePic from '../assets/profile pic.png'
import thinkPinkTeamPhoto from '../assets/projects/thinkpink/team photo.JPEG'

const featuredProjects = [
  {
    title: 'ForkCast',
    subtitle: 'AI Recipe Application',
    summary:
      'Built with React Native, Firebase, and Gemini API to generate personalized recipes from ingredient prompts.',
    link: '/projects',
  },
  {
    title: 'Think Pink',
    subtitle: 'WingHacks 2026 Winner',
    summary:
      'Award-winning hackathon project recognized at WingHacks 2026 and published on Devpost.',
    link: '/projects',
  },
  {
    title: 'Readable',
    subtitle: 'Hackathon Project',
    summary:
      'Focused on readability and accessibility with a user-centered approach and polished demo delivery.',
    link: '/projects',
  },
  {
    title: 'Minesweeper Platform',
    subtitle: 'Systems + Web Stack',
    summary:
      'C++ engine, real-time backend, WebAssembly front-end, and CI/CD pipeline for a full-stack build.',
    link: '/projects',
  },
]

const featuredInvolvements = [
  {
    title: 'UF WiCSE Social Director',
    summary:
      'Organizing community-centered events and mentoring peers in technical and career growth.',
    link: '/involvements',
  },
  {
    title: 'UF Dostana Captain',
    summary:
      'Leading a 60-member traveling dance team across choreography, logistics, and team operations.',
    link: '/involvements',
  },
  {
    title: 'UF Society of Women Engineers',
    summary:
      'Mentoring underclassmen in computer and data science through peer guidance and support.',
    link: '/involvements',
  },
  {
    title: "Junior Achievement: That's LIT!",
    summary:
      'Served as CEO/President, led strategy and operations, and helped drive over $9,000 in revenue.',
    link: '/involvements',
  },
]

export function Home() {
  const [projectIndex, setProjectIndex] = useState(0)
  const [involvementIndex, setInvolvementIndex] = useState(0)

  const nextProject = () =>
    setProjectIndex((index) => (index + 1) % featuredProjects.length)
  const prevProject = () =>
    setProjectIndex((index) =>
      index === 0 ? featuredProjects.length - 1 : index - 1,
    )

  const nextInvolvement = () =>
    setInvolvementIndex((index) => (index + 1) % featuredInvolvements.length)
  const prevInvolvement = () =>
    setInvolvementIndex((index) =>
      index === 0 ? featuredInvolvements.length - 1 : index - 1,
    )

  useEffect(() => {
    const timer = setInterval(() => {
      setProjectIndex((index) => (index + 1) % featuredProjects.length)
      setInvolvementIndex((index) => (index + 1) % featuredInvolvements.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])
  const cardWidth = 18
  const gapWidth = 1.25
  const projectsLoop = [...featuredProjects, ...featuredProjects, ...featuredProjects]
  const involvementsLoop = [
    ...featuredInvolvements,
    ...featuredInvolvements,
    ...featuredInvolvements,
  ]
  const centeredProjectIndex = featuredProjects.length + projectIndex
  const centeredInvolvementIndex = featuredInvolvements.length + involvementIndex

  return (
    <div className="min-h-screen pt-24 px-6 lg:px-8 pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3 space-y-6">
            <h1 className="text-5xl lg:text-6xl font-semibold text-foreground">
              <span className="text-primary">Ananyaa Sutaria</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Computer Science student at the University of Florida focused on
              AI, product-minded software engineering, and campus leadership.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="/projects"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                View Projects
              </a>
              <a
                href="/involvements"
                className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-secondary transition-colors"
              >
                View Involvements
              </a>
              <a
                href={resumePdf}
                download="Ananyaa-Sutaria-Resume.pdf"
                className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-secondary transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="w-56 h-56 lg:w-64 lg:h-64 rounded-full p-1 bg-gradient-to-br from-primary/60 via-accent/60 to-primary/30 shadow-lg shadow-primary/20">
              <img
                src={profilePic}
                alt="Portrait of Ananyaa Sutaria"
                className="w-full h-full rounded-full object-cover border-4 border-background"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-secondary border border-border">
            <h3 className="mb-2">Education</h3>
            <p className="text-sm text-muted-foreground">
              University of Florida, B.S. Computer Science with AI Fundamentals
              Certificate and Business Administration minor, 3.9 GPA.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-secondary border border-border">
            <h3 className="mb-2">Experience</h3>
            <p className="text-sm text-muted-foreground">
              Website Design Intern at Kennedy Legal Team PLLC and former
              CEO/President of a Junior Achievement startup.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-secondary border border-border">
            <h3 className="mb-2">Skills</h3>
            <p className="text-sm text-muted-foreground">
              Python, C++, React, JavaScript, Java, Tailwind, Git, Linux,
              Firebase, and product-focused team collaboration.
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-8">
          <div className="p-6 rounded-xl bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-center">
              <div className="lg:col-span-3">
                <div className="mb-4 mx-12">
                  <div className="w-72 mx-auto bg-primary text-white text-center py-2 rounded-xl shadow-md shadow-primary/20">
                    <h3>Featured Projects</h3>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block" />

              <div className="relative lg:col-span-3">
                <button
                  type="button"
                  onClick={prevProject}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-border bg-white text-primary hover:bg-secondary"
                  aria-label="Previous project"
                >
                  {'<'}
                </button>
                <div className="mx-12 overflow-hidden py-4">
                  <div
                    className="flex gap-5 items-stretch transition-transform duration-700 ease-in-out"
                    style={{
                      transform: `translateX(calc(50% - ${
                        centeredProjectIndex * (cardWidth + gapWidth) + cardWidth / 2
                      }rem))`,
                    }}
                  >
                    {projectsLoop.map((project, index) => {
                      const distance = Math.abs(index - centeredProjectIndex)
                      const isCenter = distance === 0
                      const isNear = distance === 1
                      return (
                        <a
                          key={`project-${index}-${project.title}`}
                          href={project.link}
                          className={`w-72 shrink-0 p-6 min-h-56 rounded-xl border bg-secondary transition-all duration-700 ease-in-out ${
                            isCenter
                              ? 'border-primary/40 shadow-md scale-110 opacity-100'
                              : isNear
                                ? 'border-border scale-95 opacity-75'
                                : 'border-border scale-90 opacity-45'
                          }`}
                        >
                          <p className="text-xs text-primary mb-2">{project.subtitle}</p>
                          <h4 className="mb-2">{project.title}</h4>
                          <p className="text-sm text-muted-foreground">{project.summary}</p>
                        </a>
                      )
                    })}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={nextProject}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-border bg-white text-primary hover:bg-secondary"
                  aria-label="Next project"
                >
                  {'>'}
                </button>
              </div>

              <div className="lg:col-span-1">
                <div className="w-72 min-h-56 mx-auto scale-110 rounded-xl p-1 bg-gradient-to-br from-primary/60 via-accent/60 to-primary/30 shadow-lg shadow-primary/20 transition-all duration-700 ease-in-out">
                  <img
                    src={thinkPinkTeamPhoto}
                    alt="Think Pink team"
                    className="w-full h-56 rounded-lg object-cover border-2 border-background"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-center">
              <div className="lg:col-span-1 order-2 lg:order-1">
                <div className="w-72 min-h-56 mx-auto scale-110 rounded-xl p-1 bg-gradient-to-br from-primary/60 via-accent/60 to-primary/30 shadow-lg shadow-primary/20 transition-all duration-700 ease-in-out">
                  <div className="w-full h-56 rounded-lg border-2 border-background bg-secondary flex items-center justify-center px-4 text-center">
                    <p className="text-sm text-muted-foreground">
                      Leadership photo placeholder
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 order-1 lg:order-2">
                <div className="mb-4 mx-12">
                  <div className="w-72 mx-auto bg-primary text-white text-center py-2 rounded-xl shadow-md shadow-primary/20">
                    <h3>Leadership & Involvement</h3>
                  </div>
                </div>
                <div className="relative">
                  <button
                    type="button"
                    onClick={prevInvolvement}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-border bg-white text-primary hover:bg-secondary"
                    aria-label="Previous involvement"
                  >
                    {'<'}
                  </button>
                  <div className="mx-12 overflow-hidden py-4">
                    <div
                      className="flex gap-5 items-stretch transition-transform duration-700 ease-in-out"
                      style={{
                        transform: `translateX(calc(50% - ${
                          centeredInvolvementIndex * (cardWidth + gapWidth) + cardWidth / 2
                        }rem))`,
                      }}
                    >
                      {involvementsLoop.map((item, index) => {
                        const distance = Math.abs(index - centeredInvolvementIndex)
                        const isCenter = distance === 0
                        const isNear = distance === 1
                        return (
                          <a
                            key={`involvement-${index}-${item.title}`}
                            href={item.link}
                            className={`w-72 shrink-0 p-6 min-h-56 rounded-xl border bg-secondary transition-all duration-700 ease-in-out ${
                              isCenter
                                ? 'border-primary/40 shadow-md scale-110 opacity-100'
                                : isNear
                                  ? 'border-border scale-95 opacity-75'
                                  : 'border-border scale-90 opacity-45'
                            }`}
                          >
                            <h4 className="mb-2">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {item.summary}
                            </p>
                          </a>
                        )
                      })}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={nextInvolvement}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-border bg-white text-primary hover:bg-secondary"
                    aria-label="Next involvement"
                  >
                    {'>'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

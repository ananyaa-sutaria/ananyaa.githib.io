const involvements = [
  {
    id: 1,
    title: 'Social Director',
    organization: 'UF WiCSE (Women in Computer Science and Engineering)',
    period: '2025 - Present',
    description:
      'Organize community events and build inclusive programming for women in computing while mentoring peers in technical and career development.',
  },
  {
    id: 2,
    title: 'Captain',
    organization: 'UF Dostana',
    period: '2025 - Present',
    description:
      'Lead a 60-member traveling Bollywood fusion dance team, choreograph full sets, manage rehearsals, and coordinate logistics, recruitment, and team operations.',
  },
  {
    id: 3,
    title: 'Member Mentor',
    organization: 'UF Society of Women Engineers',
    period: '2025 - Present',
    description:
      'Support underclassmen in computer and data science through peer mentorship focused on coursework, confidence, and professional growth.',
  },
  {
    id: 4,
    title: 'CEO / President',
    organization: "Junior Achievement - That's LIT!",
    period: 'Aug 2023 - May 2024',
    description:
      'Led a student-run startup across strategy, product, and marketing; drove over $9,000 in revenue while managing a high-performing executive team.',
  },
]

export function Involvements() {
  return (
    <div className="min-h-screen pt-24 px-6 lg:px-8 pb-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Involvements
          </h1>
          <p className="text-lg text-muted-foreground">
            Leadership, mentorship, and campus communities
          </p>
        </div>

        <div className="space-y-6">
          {involvements.map((involvement) => (
            <div
              key={involvement.id}
              className="group p-6 rounded-xl border border-border bg-white hover:border-primary hover:shadow-md hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex-shrink-0 flex items-center justify-center">
                  <span className="text-xl">🌟</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2 gap-4">
                    <div>
                      <h3 className="group-hover:text-primary transition-colors">
                        {involvement.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {involvement.organization}
                      </p>
                    </div>
                    <span className="text-sm text-primary bg-secondary px-3 py-1 rounded-full whitespace-nowrap">
                      {involvement.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {involvement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

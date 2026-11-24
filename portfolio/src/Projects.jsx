function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio built using React.'
    },
    {
      title: 'PPT corrector',
      description: 'Corrects the mistakes in a PPT.'
    },
    {
      title: 'Nuclear fusion',
      description: 'A basic website for students to learn about nuclear fusion of various elements.'
    }
  ]

  return (
    <section id="projects">
      <h2>My Projects</h2>

      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  )
}

export default Projects
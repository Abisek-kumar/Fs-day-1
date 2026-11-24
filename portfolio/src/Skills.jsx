function Skills() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Java',
    'Git & GitHub',
    'Python',
    'C',
    'C++'
  ]

  return (
    <section id="skills">
      <h2>My Skills</h2>

      <div>
        {skills.map((skill, index) => (
          <div key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
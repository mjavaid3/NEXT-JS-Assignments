// app/page.tsx
export default function HomePage() {
  return (
    <main style={{ paddingTop: '80px', textAlign: 'center' }}>
      <section id="about">
        <h1>Muhammad Javaid</h1>
        <h2>Aspiring Web Developer</h2>
        <p>Hello! I'm a web development enthusiast passionate about building functional and aesthetically pleasing web applications.</p>
      </section>

      <section id="skills" style={{ textAlign: 'center' }}>
        <h2>Skills</h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px' }}>
          {/* Programming Languages */}
          <div>
            <h3>Programming Languages</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
            </ul>
          </div>

          {/* Libraries and Frameworks */}
          <div>
            <h3>Libraries and Frameworks</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          {/* Other Skills */}
          <div>
            <h3>Other Skills</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>Problem-Solving</li>
              <li>Teamwork</li>
              <li>Communication</li>
            </ul>
          </div>
        </div>
      </section>


      <section id="education">
        <h2>Education</h2>
        <p>Bachelor of Science in Computer Science - Karachi University</p>
        <p>Completed various online courses on web development.</p>
      </section>

      <section id="experience">
        <h2>Experience</h2>
        <p>Web Developer - Securiti</p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: javaid123@gmail.com</p>
        <p>
         <a href="https://github.com/mjavaid3" target="_blank">GitHub</a>
        </p>
      </section>
    </main>
  );
}

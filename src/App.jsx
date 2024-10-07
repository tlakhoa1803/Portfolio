import { useState } from 'react'
import './App.css'

const App = () => {
  // State để quản lý trang hiện tại
  const [activeSection, setActiveSection] = useState('info')

  // Các hàm để chuyển đổi nội dung
  const renderSection = () => {
    switch (activeSection) {
    case 'info':
      return (
        <section className="section info">
          <h2>About Me</h2>
          <p style={{ fontSize: 25 }}>
            My name is Trần Lê Anh Khoa, a fourth-year student at the University of Information Technology (UIT), majoring in High-Quality Information Technology with a focus on Japanese-oriented studies. I am passionate about programming and continuously seek to expand my knowledge. My goal is to become a Fullstack Web Developer, and I also have experience in Machine Learning and software testing.
          </p>
          <div className="details">
            <p><strong>Birthday:</strong> August 01, 2003</p>
            <p><strong>Email:</strong> <a href="mailto:tlakhoa1803@gmail.com">tlakhoa1803@gmail.com</a></p>
            <p><strong>Degree:</strong> IT</p>
            <p><strong>Phone:</strong> +84 33 472 5237</p>
            <p><strong>City:</strong> Ho Chi Minh</p>
            <p><strong>Freelance:</strong> Available</p>
          </div>
          <div className="cv-download">
            <button onClick={() => window.open('/2018 - 2021.pdf', '_blank')}>
              Download CV
            </button>
            <button onClick={() => alert('Contact Me functionality to be implemented!')}>
              Contact Me
            </button>
          </div>
        </section>
      )
    case 'projects':
      return (
        <section className="section projects">
          <h2>Projects</h2>
          <div className="project-list">
            <div className="project-item">
              <a href='https://github.com/tlakhoa1803/Football-Manager' target="_blank" rel="noopener noreferrer">
                <h3>Football Manager</h3>
              </a>
              <p>Front-end</p>
              <img src='/football.png' alt='Project 1' />
            </div>
            <div className="project-item">
              <a href='https://github.com/tlakhoa1803/trello-web-Khoa' target="_blank" rel="noopener noreferrer">
                <h3>Trello Web</h3>
              </a>
              <p>FullStack</p>
              <img src='/trello.png' alt='Project 2' />
            </div>
            <div className="project-item">
              <a href='/Artificial-Intelligence-Final-Report-Assignment-Problem-3.pdf' target="_blank" rel="noopener noreferrer">
                <h3>Mbart + Transformer with IWLTS 2015</h3>
              </a>
              <p>Data Analyst</p>
              <img src='/AI.png' alt='Project 3' />
            </div>
          </div>
        </section>
      )
    case 'skills':
      return (
        <section className="section skills">
          <h2 style={{ padding: '0px' }}>Skills</h2>
          {/* Nhóm Ngoại ngữ */}
          <div className="skill-group">
            <h3>Languages</h3>
            <ul>
              <li>Japanese - N3</li>
            </ul>
          </div>
          {/* Nhóm Ngôn ngữ lập trình */}
          <div className="skill-group">
            <h3>Programming Languages</h3>
            <ul>
              <li>HTML/CSS, React.js, Node.js, Express.js, Vue.js, React Native</li>
              <li>Python, JavaScript, C++</li>
            </ul>
          </div>
          {/* Nhóm Cơ sở dữ liệu */}
          <div className="skill-group">
            <h3>Databases</h3>
            <ul>
              <li>SQL Server, MongoDB, MySQL</li>
            </ul>
          </div>
          <div className="skill-group" style={{ marginBottom: '50px' }}>
            <h3>Other</h3>
            <ul>
              <li>Git, Figma, Bootstrap, Tailwind CSS, CSS Grid, Dndkit, MUI</li>
              <li>Word, Excel, PowerPoint</li>
            </ul>
          </div>
        </section>
      )
    case 'contact':
      return (
        <section className="section contact">
          <h2 style={{ marginBottom: '100px' }}>Contact</h2>
          <p>Email: tlakhoa1803@gmail.com</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/khoa-tr%E1%BA%A7n-0463b1318/">My LinkedIn</a></p>
          <p>GitHub: <a href="https://github.com/tlakhoa1803">My GitHub</a></p>
        </section>
      )
    default:
      return null
    }
  }

  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <h1>My Portfolio</h1>
        <nav>
          <button onClick={() => setActiveSection('info')}>Info</button>
          <button onClick={() => setActiveSection('projects')}>Projects</button>
          <button onClick={() => setActiveSection('skills')}>Skills</button>
          <button onClick={() => setActiveSection('contact')}>Contact</button>
        </nav>
      </header>

      {/* Nội dung dựa trên lựa chọn */}
      <div className="content">
        {renderSection()}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </div>
  )
}

export default App

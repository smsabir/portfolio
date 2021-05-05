import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <div className="top">
        <Header></Header>
        <About></About>
      </div>
      <div className="middle">
        <Skills></Skills>
        <Projects></Projects>
      </div>
      <div className="blog-area pt-5">
        <Blog></Blog>
      </div>
      <div className="contact">
      <Contact></Contact>
      </div>
      <div className="footer">
    <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

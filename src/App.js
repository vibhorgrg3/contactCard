import logo from './logo.svg';
import './App.css';
import Info from './components/Info';
import Section from './components/Section';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Info></Info>
      <Header></Header>
      <Section heading="About" data="I am a frontend developer with 
      a particular interest in making things simple and automating 
      daily tasks. I try to keep up with security and best practices,
       and am always looking for new things to learn."></Section>
      <Section heading="Interests" data="Food expert. Music scholar. 
       Reader. Internet fanatic. Bacon buff. Entrepreneur. 
       Travel geek. Pop culture ninja. Coffee fanatic."></Section>
       <Footer></Footer>
    </div>
  );
}

export default App;

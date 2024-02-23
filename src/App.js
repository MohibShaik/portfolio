import './App.scss';
import { Header } from './components/header';
import { Home } from './components/home-intro';
import { Tooling } from './components/tooling';
import { Projects } from './components/projects';
import { FooterSection } from './components/footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <Tooling />
      <Projects />
      <FooterSection />
    </div>
  );
}

export default App;

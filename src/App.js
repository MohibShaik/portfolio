import './App.scss';
import { Header } from './components/header';
import { Home } from './components/home-intro';
import { Tooling } from './components/tooling';


function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <Tooling />
    </div>
  );
}

export default App;

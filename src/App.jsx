import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';
import { Sidebar } from './components/Sidebar';

function App() {
 

  return (
    <div className="app">
      <Sidebar/>
      <main className="content">
      
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      </main>
    </div>
  );
}

export default App;
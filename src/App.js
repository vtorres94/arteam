import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Header from './layout/Header';
import Body from './layout/Body';
import Footer from './layout/Footer';

function App() {
  return (
    <div style={{ background: '#1d1d1d'}}>
      <Header style={{ backgroundColor: '#1d1d1d'}}/>
      <Body style={{ backgroundColor: '#1d1d1d'}}/>
      <Footer/>
    </div>
  );
} 

export default App;

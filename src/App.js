import Sidebar from './Sidebar.js';
import Header from './Header.js';
import Main from './MainTab.js';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Header />
        <Main />
      </div>
    </div>
    
  );
}

export default App;

import './App.css';
import Navbar from './components/navbar/Navbar';
import LeftSidebar from './components/left-sidebar/LeftSidebar';
import RightSidebar from './components/right-sidebar/RightSidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app-container">
        <LeftSidebar />
        <div></div>
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;


import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Automation from './components/Services/Auto/Automation';
import DetailEng from './components/Services/DetailEng/DetailEng';
import Modelling from './components/Services/Model/Modelling';
import Modular from './components/Services/Modular/Modular';
import Software from './components/Services/Software/Software';
import Auto from './components/Showcase/Auto/Auto';
import Column from './components/Showcase/Column/Column';
import Custom from './components/Showcase/Custom/Custom';
import DetailEn from './components/Showcase/DetailEng/DetailEn';
import ShowModeling from './components/Showcase/Model/ShowModeling';
import Scrubbing from './components/Showcase/Scrubbing/Scrubbing';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Showcase from './pages/Showcase/Showcase';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Banner />
        <Routes>
          <Route exact path="/" element={< Home />} />
          <Route exact path="/services" element={< Services />}>
            <Route exact path='' element={<Automation />} />
            <Route exact path='detailengineering' element={<DetailEng />} />
            <Route exact path='modular' element={<Modular />} />
            <Route exact path='software' element={<Software />} />
            <Route exact path='modeling' element={<Modelling />} />
          </Route>
          <Route exact path="/showcase" element={<Showcase />} >
            <Route exact path='' element={< Auto />} />
            <Route exact path='showmodeling' element={< ShowModeling />} />
            <Route exact path='showdetailengineering' element={< DetailEn />} />
            <Route exact path='showcoustomdesign' element={< Custom />} />
            <Route exact path='showscrubbingsystem' element={< Scrubbing />} />
            <Route exact path='showcolumninternals' element={< Column />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

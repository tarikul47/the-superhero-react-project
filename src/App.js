import './App.css';
import DonationBox from './components/DonationBox/DonationBox';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <DonationBox></DonationBox>
      <Footer></Footer>
    </div>
  );
}

export default App;

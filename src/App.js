import Footer from './components/Footer';
import Header from './components/Header';
import {Container} from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div>
      <Header />
        <main className='py-3'>
          <Container>
            <HomeScreen />
          </Container>
        </main>
      <Footer />
    </div>
  );
}

export default App;

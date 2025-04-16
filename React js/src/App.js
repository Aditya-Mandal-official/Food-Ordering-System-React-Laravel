import logo from './logo.svg';
import './App.css';
import Header from './common/Header';
import Footer from './common/Footer';

function App() {
  let Contact = {
    phone : '8617325720',
    email : 'adityamandal8617@gmail.com'
  }
  return (
    <>
      <Header Contact={Contact} />
        <h5 className='text-danger'>Welcome to React</h5>
      <Footer />
    </>
  );
}

export default App;

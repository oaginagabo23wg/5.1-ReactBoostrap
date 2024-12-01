import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import AsideInfo from './components/AsideInfo';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="container my-4">
      <Header />
      <Navbar />
      <main className="row">
        <ContactForm />
        <AsideInfo />
      </main>
      <Footer />
    </div>
  );
}

export default App;

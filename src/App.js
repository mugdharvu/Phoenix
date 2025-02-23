import React from 'react';
import UploadFile from './components/upload';
import "./app.css";

function App() {
  return (
    <div className="App bg-gradient-to-b from-blue-500 to-white min-h-screen flex flex-col animate-fade-in">
      <header className="App-header p-6 bg-blue-600 text-white shadow-lg animate-slide-down">
        <nav className="App-nav flex justify-between items-center">
          <h1 className="App-logo text-3xl font-bold"><i>Beluga🐋</i></h1>
          <ul className="Nav-links flex space-x-6">
            <li><a href="#home" className="hover:text-blue-200 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-blue-200 transition-colors">About</a></li>
            <li><a href="#contact" className="hover:text-blue-200 transition-colors">Contact</a></li>
            <li><a href="#profile" className="hover:text-blue-200 transition-colors">Profile</a></li>
            <li><a href="#login" className="hover:text-blue-200 transition-colors">Login/Sign-Up</a></li>
          </ul>
        </nav>
      </header>

      <main className="App-main flex-grow flex flex-col items-center justify-center">
      <div style={{ margin: '0', padding: '0' }}>
  
      <h1 style={{ color: 'darkblue', textAlign: 'center', marginBottom: '0' }}>Malware Scanner!</h1>
        <h4 style={{ color: 'gray', textAlign: 'center', marginTop: '0' }}><i>Upload your files and check for malware</i></h4>
  </div>
        <UploadFile />

        <section className="Options grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="Option p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-bold">Scan History</h2>
            <p className="my-2">Review your previous scan results and activity logs.</p>
            <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition">View History</button>
            <div className="text-4xl mt-2">🗝️</div>
          </div>

          <div className="Option p-4 bg-white shadow-lg rounded-lg">
  <h2 className="text-xl font-bold text-blue-900">Security Tips</h2>
  <p className="my-2">Learn how to protect your files and devices from malware.</p>

  <button onClick={() => window.open('/securitytips.html', '_blank')} 
  className="bg-blue-700 text-white font-bold px-4 py-2 rounded hover:bg-blue-800 transition">Learn More</button>

  <div className="text-4xl mt-2">🛡️</div>
</div>
        </section>
        <section id="about" style={{ padding: '2rem', textAlign: 'center' }}>
          <h2 style={{ color: 'darkblue' }}>About Us</h2>
          <p style={{ color: 'gray' }}>Malware, short for malicious software, encompasses a wide range of harmful programs designed to infiltrate, damage, or exploit computers, networks, and users. These malicious programs include viruses, worms, trojans, ransomware, adware, and spyware, each with unique methods of attack and varying levels of severity. Malware can lead to severe consequences, such as stealing personal or financial data, corrupting or deleting important files, hijacking system resources, slowing down device performance, and even granting unauthorized access to hackers. In some cases, malware can spread across networks, affecting multiple devices and compromising entire systems.
          <br></br><br></br>Preventing malware is critical in today’s digital world, where cyber threats are constantly evolving. Effective prevention strategies involve using trusted antivirus and anti-malware software, regularly updating operating systems and applications to patch security vulnerabilities, and practicing safe online behaviors. This includes avoiding suspicious websites, not downloading unknown attachments, being cautious with email links, and enabling firewalls for an extra layer of protection. Additionally, educating users about common cyber threats plays a significant role in reducing the risk of malware infections.
Our website is designed to help you stay one step ahead of these threats.<br></br><br></br> We offer a simple yet powerful tool that allows you to upload files and scan them for potential malware. Whether you’re checking documents, software, or other files, our scanner ensures they are safe before you open or share them. By providing a quick and reliable scanning solution, we aim to help protect your devices, data, and personal information from malicious attacks, giving you greater peace of mind in your digital activities.</p>
        </section>

        <section id="contact" style={{ padding: '2rem', textAlign: 'center' }}>
          <h2 style={{ color: 'darkblue' }}>Contact Us</h2>
          <p style={{ color: 'gray' }}>Email: beluga@gmail.com <br></br>Phone No.:+91 9988776655</p>
        </section>
      </main>

      <footer className="App-footer p-4 bg-blue-600 text-white text-center animate-fade-in-up">
        <p>&copy; {new Date().getFullYear()} <i>Beluga</i>
        <a href ="https://www.instagram.com/">Instagram</a>
        <a href ="">Terms of Use</a>
        <a href ="">Privacy Policy</a>
        </p>
      </footer>
    </div>
  );
}

export default App;

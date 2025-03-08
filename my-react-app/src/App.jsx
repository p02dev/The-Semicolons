// import React from 'react';
// import './style.css';

// import HospitalDashboard from './components/HospitalDashboard';


// function App() {
//   return (
//     <div className="App">
//       <HospitalDashboard />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import HospitalDashboard from './components/HospitalDashboard';
import './App.css';


function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Hospital Wait Time Dashboard</h1>
      </header>
      <main className="app-main">
        <HospitalDashboard />
      </main>
      <footer className="app-footer">
        <p>© 2025 Hospital Management System</p>
      </footer>
    </div>
  );
}

export default App;
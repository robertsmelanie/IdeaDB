import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Ideaform from './components/ideaform.jsx';


// import MainLayout from './layout/MainLayout';

export default function App() {
  return (
    <BrowserRouter>
      {/* <MainLayout> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ideaform" element={<Ideaform />} />
          {/* Add more routes as needed */}
          <Route path="*" element={<div>404 Not Found</div>} />
          {/* Catch-all route for undefined paths */}
        </Routes>
      {/* </MainLayout> */}
    </BrowserRouter>
  );
}


// import { useState } from 'react'

// import './App.css'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
     
    
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
     
//       <Ideaform />

      
      
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;

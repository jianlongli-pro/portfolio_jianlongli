import { Routes, Route } from 'react-router-dom';
import { LangProvider } from './context/LangContext';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

function LiquidBackdrop() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <div className="absolute -top-32 -left-20 w-[26rem] h-[26rem] rounded-full opacity-50" style={{ background: '#5DCAA5', filter: 'blur(100px)' }} />
      <div className="absolute top-56 -right-28 w-[26rem] h-[26rem] rounded-full opacity-40" style={{ background: '#EF9F27', filter: 'blur(110px)' }} />
      <div className="absolute top-[120rem] left-1/3 w-[26rem] h-[26rem] rounded-full opacity-40" style={{ background: '#ED93B1', filter: 'blur(110px)' }} />
    </div>
  );
}

export default function App() {
  return (
    <LangProvider>
      <div
        className="min-h-screen text-[#2B2620] relative overflow-hidden"
        style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#FAF7F2' }}
      >
        <LiquidBackdrop />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        <Footer />
      </div>
    </LangProvider>
  );
}

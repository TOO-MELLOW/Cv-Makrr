import Header from '../components/Header';
import Footer from '../components/Footer';
import TemplateGallery from '../components/TemplateGallery';

const Home = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow p-4">
      <TemplateGallery />
    </main>
    <Footer />
  </div>
);

export default Home;
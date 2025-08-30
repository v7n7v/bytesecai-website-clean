
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import ServicesHero from './ServicesHero';
import AllServices from './AllServices';
import ServicesCTA from './ServicesCTA';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="relative z-10">
        <Header />
        <ServicesHero />
        <AllServices />
        <ServicesCTA />
        <Footer />
      </div>
    </div>
  );
}

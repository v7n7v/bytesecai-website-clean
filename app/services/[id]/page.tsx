
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import ServiceDetail from './ServiceDetail';
import { getAllServiceIds } from '../../../lib/servicesData';

export async function generateStaticParams() {
  return getAllServiceIds().map((id) => ({ id }));
}

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="relative z-10">
        <Header />
        <ServiceDetail serviceId={id} />
        <Footer />
      </div>
    </div>
  );
}

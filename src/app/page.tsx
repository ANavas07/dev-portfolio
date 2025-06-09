
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { LaptopScroll } from '@/components/ui/LaptopScroll';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// No usamos React.Suspense directamente pero activamos "suspense: true" en los componentes

const Grid = dynamic(() => import('@/components/Grid'), {
  loading: () => <p>Loading ...</p>,
});

const RecentProjects = dynamic(() => import('@/components/RecentProjects'), {
  loading: () => <p>Loading ...</p>,
});

const Experience = dynamic(() => import('@/components/Experience'), {
  loading: () => <p>Loading ...</p>,
});

const Approach = dynamic(() => import('@/components/Approach'), {
  loading: () => <p>Loading ...</p>,
});




export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        {/* Cargado de forma perezosa */}
        <FloatingNav />

        <Hero />

        <Suspense fallback="Loading...">
          <Grid />
        </Suspense>

        <Suspense fallback="Loading ...">
          <RecentProjects />
        </Suspense>

        <Suspense fallback="Loading...">
          <Experience />
        </Suspense>

        <Suspense fallback="Loading ...">
          <LaptopScroll showGradient= {true}/>    
        </Suspense>

        <Suspense fallback="Loading ...">
          <Approach />
        </Suspense>

        <Footer />
      </div>
    </main>
  );
}
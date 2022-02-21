import * as React from 'react';

import Layout from '@/components/layout/Layout';
import MemberCard from '@/components/MemberCard';

const members = [
  {
    fullName: 'Jan Ruettinger',
    flipNote:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum',
    imageName: 'jan_rue.jpg',
  },
];

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      {/* <Seo /> */}

      <main>
        <section className='bg-white'>
          <div className='layout flex flex-col items-center justify-center text-center'>
            <h1 className='mt-4'>Jessi&apos;s Hacker Crew</h1>

            <div className='mt-8 grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-48'>
              {members.map((member, idx) => {
                return (
                  <MemberCard
                    key={idx}
                    fullName={member.fullName}
                    imageName={member.imageName}
                    flipNote={member.flipNote}
                  />
                );
              })}
            </div>

            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By Jessi&apos;s Hackers
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import MemberCard from '@/components/MemberCard';
import Seo from '@/components/Seo';

const members = [
  {
    fullName: 'Jan',
    flipNote:
      'The last two weeks have been magical! This is what I expect Bell Labs was like back in the day. Thank you so much Jessi for bringing us all together.',
    imageName: 'jan_rue.jpg',
  },
  {
    fullName: 'Michaella',
    flipNote:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum',
    imageName: 'michaella.jpg',
  },
  {
    fullName: 'Avi',
    flipNote:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum',
    imageName: 'avi.jpg',
  },
  {
    fullName: 'Jan',
    flipNote:
      'Thank you Jessi for bringing us all together. This community feels like my new home in Web 3.',
    imageName: 'jan_damm.jpeg',
  },
  {
    fullName: 'Tina',
    flipNote:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum',
    imageName: 'tina_zhen.jpeg',
  },
  {
    fullName: 'Mohib',
    flipNote:
      'J money!!! Thanks for being you— I love your energy and you made something truly incredible happen this week. I hope this is the start, not end, of our friendship :-)',
    imageName: 'mohib_j.jpeg',
  },
  {
    fullName: 'Libevm',
    flipNote:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum',
    imageName: 'libevm.jpg',
  },
  {
    fullName: 'Lucia',
    flipNote:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum',
    imageName: 'lucia.jpeg',
  },
  {
    fullName: 'Miguel',
    flipNote:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum',
    imageName: 'miguel.jpg',
  },
  {
    fullName: 'DCBuilder',
    flipNote:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum',
    imageName: 'dcbuilder.jpg',
  },
  {
    fullName: 'Brian',
    flipNote:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum',
    imageName: 'jepson.jpg',
  },
  {
    fullName: 'Anna',
    flipNote:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum',
    imageName: 'anna_r.jpg',
  },
  {
    fullName: 'Nicole',
    flipNote:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum',
    imageName: 'nico.jpg',
  },
  {
    fullName: 'Jepson',
    flipNote:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum',
    imageName: 'jepson.jpg',
  },
  {
    fullName: 'Kevin',
    flipNote:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum',
    imageName: 'kevin.jpg',
  },
  {
    fullName: 'Josef',
    flipNote:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum',
    imageName: 'josef.jpg',
  },
];

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='WAGMI' />
      {/* <Seo /> */}

      <main>
        <section className='bg-white'>
          <div className='layout flex flex-col items-center justify-center text-center'>
            <h1 className='mt-4'>Jessi&apos;s Hacker Crew</h1>

            <h2 className='mt-4 text-xl'>
              Thank you Jessy for an unforgettable time at your hacker house.
              You started a community that will long outlast our time at ETH
              Denver. We are looking forward to building the future together
              with you. <br /> WAGMI!
            </h2>

            <div className='mx-auto mt-4 w-3/5'>
              <img src='/images/nft.jpg' alt='NFT' />
            </div>

            <div className='mt-20 grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-48'>
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

            <footer className='bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By Jessi&apos;s Hackers
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}

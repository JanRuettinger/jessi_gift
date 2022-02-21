import Image from 'next/image';
import * as React from 'react';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

type PropType = {
  fullName: string;
  flipNote: string;
  imageName: string;
};

export default function MemberCard({
  fullName,
  flipNote,
  imageName,
}: PropType) {
  // Put Header or Footer Here
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick(event: { preventDefault: () => void }) {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  }

  return (
    <div>
      <ReactCardFlip
        isFlipped={isFlipped}
        flipSpeedBackToFront={1}
        flipSpeedFrontToBack={1}
      >
        <div
          className='h-[300px] w-[300px] md:h-[400px] md:w-[400px]'
          onClick={handleClick}
        >
          <Image
            src={`/images/${imageName}`}
            alt='Member image'
            layout='fill'
            className='rounded-full'
          />
        </div>

        <div>
          <div
            onClick={handleClick}
            className='flex h-[300px] w-[300px] flex-col items-center justify-center md:h-[400px] md:w-[400px]'
          >
            <div>{flipNote}</div>
          </div>
        </div>
      </ReactCardFlip>
      <div className='text-2xl'>{fullName}</div>
    </div>
  );
}

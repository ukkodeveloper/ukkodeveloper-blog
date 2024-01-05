'use client'
// {seriesMetas.map((seriesMeta) => (
//             <div key={seriesMeta.tag} className="my-10 flex items-center bg-cyan-900">
//               <div className="relative h-40 w-40 flex-shrink-0 xl:h-64 xl:w-64">
//                 <Image
//                   alt=""
//                   src={seriesMeta.image}
//                   fill
//                   className="rounded-3xl object-cover opacity-30"
//                 />
//               </div>
//               <div className="relative right-6 w-full xl:right-10">
//                 <h2 className="text-2xl  font-bold  xl:text-3xl">{seriesMetas[0].title}</h2>
//                 <p className="collapse my-4 h-0 text-gray-600 dark:text-gray-400 sm:visible sm:h-auto">
//                   {seriesMeta.description}
//                 </p>
//               </div>
//             </div>
//           ))}

import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci'
import Image from 'next/image'
import { seriesMetas } from '../app/lib/seriesMeta'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselContainerRef = useRef<HTMLDivElement>(null)
  const itemCounts = seriesMetas.length
  const scroll = (direction: 'left' | 'right') => {
    if (carouselContainerRef.current) {
      const { scrollWidth } = carouselContainerRef.current
      const scrollAmount = scrollWidth / itemCounts
      let nextIndex

      if (direction === 'left') {
        nextIndex = (currentIndex - 1 + itemCounts) % itemCounts
      } else {
        nextIndex = (currentIndex + 1) % itemCounts
      }

      carouselContainerRef.current.scrollTo({
        left: scrollAmount * nextIndex,
        behavior: 'smooth',
      })
    }
  }

  const handleScroll = () => {
    if (carouselContainerRef.current) {
      const { scrollLeft, scrollWidth } = carouselContainerRef.current
      const scrollAmount = scrollWidth / itemCounts

      const nextIndex = Math.round(scrollLeft / scrollAmount)
      setCurrentIndex(nextIndex)
    }
  }
  // throttling
  const throttlingTimer = useRef<number | null>(null)
  const scrollLeft = () => {
    if (throttlingTimer.current !== null) return

    throttlingTimer.current = window.setTimeout(() => {
      throttlingTimer.current = null
    }, 500)

    scroll('left')
  }

  const scrollRight = () => {
    if (throttlingTimer.current !== null) return

    throttlingTimer.current = window.setTimeout(() => {
      throttlingTimer.current = null
    }, 500)

    scroll('right')
  }

  return (
    <div>
      <div className="my-2 flex items-center justify-between md:my-10">
        <button onClick={scrollLeft}>
          <CiCircleChevLeft
            color="dark-gray"
            className="mx-4 h-8 w-8 flex-shrink-0 md:mx-8 md:h-10 md:w-10"
          />
        </button>

        <div className="relative overflow-hidden">
          <div
            ref={carouselContainerRef}
            className="hide-scroll flex snap-x snap-mandatory overflow-x-auto"
            onScroll={handleScroll}
          >
            {seriesMetas.map((seriesMeta) => (
              // min-w-full을 해줘야하는 이유는? w-full을 하면 스크롤이 생기지 않고 현재 width에서 여러개의 아이템이 뭉쳐서보인다.
              <Link
                href={`/tags/${seriesMeta.tag}`}
                key={seriesMeta.tag}
                className="my-10 flex min-w-full snap-center items-center justify-center"
              >
                {/*image 크기를 변경하지 않기 위해 shrink-0. 이를 하지 않으면 이미지부터 줄어들기 시작한다.*/}
                <div className="relative h-40 w-40 shrink-0  xl:h-64 xl:w-64">
                  <Image
                    alt=""
                    src={seriesMeta.image}
                    fill
                    className="rounded-3xl object-cover opacity-40"
                  />
                </div>
                {/*자연스럽게 flex-1처럼 적용되는듯하다.*/}
                <div className="relative right-20 md:right-12 xl:bottom-10 xl:right-12">
                  <h2 className="text-wrap text-2xl font-bold xl:text-3xl">{seriesMeta.title}</h2>
                  <p className="text-wrap collapse my-4 h-0 text-gray-600 dark:text-gray-400 sm:visible sm:h-auto">
                    {seriesMeta.description}
                  </p>
                </div>
              </Link>
            ))}
            <div className="absolute bottom-4 right-4 flex w-16 items-center justify-center gap-2 rounded-md bg-gray-300 px-2 py-1 text-gray-800 opacity-80 dark:bg-gray-700 dark:text-gray-300 xl:w-20 xl:px-3 xl:py-1.5 xl:text-lg">
              <span>{currentIndex + 1}</span>
              <span>/</span>
              <span>{itemCounts}</span>
            </div>
          </div>
        </div>
        <button onClick={scrollRight}>
          <CiCircleChevRight
            className="mx-4 h-8 w-8 flex-shrink-0 md:mx-10 md:h-10 md:w-10"
            onClick={scrollRight}
          />
        </button>
      </div>
    </div>
  )
}

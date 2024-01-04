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

export default function Carousel() {
  return (
    <div className="flex items-center justify-between">
      <CiCircleChevLeft color="dark-gray" className="mx-10 h-8 w-8 flex-shrink-0 md:h-10 md:w-10" />

      <div className="relative overflow-hidden">
        <div className="flex snap-x snap-mandatory overflow-x-auto ">
          {seriesMetas.map((seriesMeta) => (
            // min-w-full을 해줘야하는 이유는? w-full을 하면 스크롤이 생기지 않고 현재 width에서 여러개의 아이템이 뭉쳐서보인다.
            <div
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
            </div>
          ))}
        </div>
      </div>

      <CiCircleChevRight className="mx-10 h-8 w-8 flex-shrink-0 md:h-10 md:w-10" />
    </div>
  )
}

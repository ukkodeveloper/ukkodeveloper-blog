interface SeriesMeta {
  tag: string
  title: string
  description: string
  image: string
}

export const seriesMetas: SeriesMeta[] = [
  {
    tag: '_ukko',
    title: '우코 개발자 성장기',
    description:
      '우코는 프론트엔드 개발을 시작했다. 이제 곧 백엔드 개발도 할 것이다. 그 여정을 담았다.',
    image: '/static/images/canada/mountains.jpg',
  },
  {
    tag: '_next13-뽀개기',
    title: 'next-13 잘게잘게 뽀개기',
    description: 'Next-13 뽀개기를 작했다. 리액트와 함께 말이다..',
    image: '/static/images/react.jpeg',
  },
]

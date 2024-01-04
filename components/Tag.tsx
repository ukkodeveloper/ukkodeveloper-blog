import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  const slugText = slug(text)

  const isSeries = slugText[0] === '_'

  return isSeries ? (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 mt-2 inline items-center rounded-md bg-purple-50 px-1 py-0.5  text-sm   font-medium uppercase   text-primary-700 ring-1 ring-inset ring-purple-700/10 hover:bg-purple-100 hover:text-primary-600 dark:bg-purple-800 dark:text-gray-300 dark:hover:bg-purple-600"
    >
      &#11092; {text.slice(1).split(' ').join('-')}
    </Link>
  ) : (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 mt-2 px-1 py-0.5 text-sm font-medium uppercase text-primary-500 dark:hover:text-primary-400"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag

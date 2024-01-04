import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import type { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Title from '@/components/Title'
import Image from 'next/image'
import { seriesMetas } from './lib/seriesMeta'
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci'

const MAX_DISPLAY = 5

interface Props {
  posts: CoreContent<Blog>[]
}

export default function Home({ posts }: Props) {
  return (
    <>
      <Title title={'Series'} />
      <div className="relative mx-auto my-10 flex max-w-3xl items-center">
        <CiCircleChevLeft color="dark-gray" className="h-8 w-8 flex-shrink-0 md:h-10 md:w-10" />
        <div className="relative ml-4 h-40 w-40 flex-shrink-0 xl:h-64 xl:w-64">
          <Image
            alt=""
            src={seriesMetas[0].image}
            fill
            className="rounded-3xl object-cover opacity-30"
          />
        </div>

        <div className="xl: relative right-10 w-full">
          <h2 className="text-2xl  font-bold  xl:text-3xl">{seriesMetas[0].title}</h2>
          <p className="collapse my-4 h-0 text-gray-600 dark:text-gray-400 sm:visible sm:h-auto">
            {seriesMetas[0].description}
          </p>
        </div>
        <CiCircleChevRight className="h-8 w-8 flex-shrink-0 md:h-10 md:w-10" />
      </div>

      <Title title={'Articles'} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-14">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <div>
                      <br />
                      {post.image && (
                        <div className="collapse relative mt-0 h-0 w-0 opacity-80 xl:visible xl:h-52 xl:w-52">
                          <Image
                            alt={'something'}
                            src={post.image}
                            fill
                            className={'rounded-md object-cover shadow-md'}
                          />
                        </div>
                      )}
                    </div>

                    <div className="ml-5 space-y-5 xl:col-span-3">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}

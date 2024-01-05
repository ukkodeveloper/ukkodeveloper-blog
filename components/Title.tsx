interface TitleProps {
  title: string
}

const Title = ({ title }: TitleProps) => {
  return (
    <div className="py-3">
      <h1 className="relative text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 md:text-3xl md:leading-10 xl:text-4xl ">
        <span className="relative inline-block">
          <span className="rotate-4 absolute left-3 -z-0  w-full rotate-3 rounded-bl-[45%] rounded-br-[24%] rounded-tl-[32%] rounded-tr-[25%] bg-purple-300 p-5 opacity-75 dark:bg-primary-600 md:p-7"></span>
          <span className="relative">{title}</span>
        </span>
      </h1>
    </div>
  )
}

export default Title

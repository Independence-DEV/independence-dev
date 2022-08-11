import DateFormatter from './date-formatter'

type Props = {
  title: string
  coverImage: string
  date: string
  youtube: string
  excerpt: string
}

const PostHeader = ({ title, coverImage, date, youtube, excerpt }: Props) => {
  return (
    <>
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container max-w-screen-xl px-4 py-20 mx-auto flex px-5 md:flex-row flex-col items-center">
                <div
                    className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <span className="text-gray-500 inline-flex items-center leading-none text-sm mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 448 512"><path d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM64 304C64 312.8 71.16 320 80 320H112C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304zM192 304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272C256 263.2 248.8 256 240 256H208C199.2 256 192 263.2 192 272V304zM336 256C327.2 256 320 263.2 320 272V304C320 312.8 327.2 320 336 320H368C376.8 320 384 312.8 384 304V272C384 263.2 376.8 256 368 256H336zM64 432C64 440.8 71.16 448 80 448H112C120.8 448 128 440.8 128 432V400C128 391.2 120.8 384 112 384H80C71.16 384 64 391.2 64 400V432zM208 384C199.2 384 192 391.2 192 400V432C192 440.8 199.2 448 208 448H240C248.8 448 256 440.8 256 432V400C256 391.2 248.8 384 240 384H208zM320 432C320 440.8 327.2 448 336 448H368C376.8 448 384 440.8 384 432V400C384 391.2 376.8 384 368 384H336C327.2 384 320 391.2 320 400V432z"/></svg>
                        <DateFormatter dateString={date} />
                    </span>
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        {title}
                    </h1>
                    <p className="mb-2 leading-relaxed">
                        {excerpt}
                    </p>
                    <a href={youtube} target="_blank" rel="noreferrer">
                        <button className="group bg-gray-800 inline-flex py-2 px-3 rounded-lg items-center hover:bg-gray-700 hover:bg-opacity-50 focus:outline-none dark:hover:text-red-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6"
                                 viewBox="0 0 576 512">
                                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                            </svg>
                            <span className="text-s text-gray-400 ml-2 flex items-start flex-col leading-none dark:group-hover:text-white">Voir la vidéo YouTube</span>
                        </button>
                    </a>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src={coverImage} />
                </div>
            </div>
        </section>
    </>
  )
}

export default PostHeader

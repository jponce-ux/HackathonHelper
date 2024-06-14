import bg from '@/public/iagenerated/misteryTeam.png'

interface JumbotronProps {
  title: string;
  description: string;
  cta: string;
  path?: string;
  imageSrc?: string;
  customClass?: string;
  short?: boolean;
}
const Jumbotron: React.FC<JumbotronProps> = ({
  title,
  description,
  cta,
  path,
  customClass
}) => {
  return (
    <figure 
      className={`bg-white dark:bg-gray-900 ${customClass}`}
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16 ">
        <div className='bg-gray-950/30 backdrop-blur-sm rounded shadow-lg py-4'>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {title}
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-200 sm:px-16 lg:px-48 lg:text-xl dark:text-gray-200">
          {description}
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href={path}
            className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            {cta}
            <svg
              className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
        </div>
      </div>
    </figure>
  );
};

export default Jumbotron;

import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageSrc?: string;
  customClass?: string;
  short?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  customClass = "",
  short = false
}) => {
  return (
    <figure
      className={`flex h-auto max-h-72 ${short? 'min-w-52 max-w-lg': 'min-w-80 max-w-2xl' }  cursor-pointer items-center justify-stretch overflow-hidden rounded-2xl bg-gray-100 transition-shadow duration-500 hover:drop-shadow-lg dark:bg-gray-800 dark:hover:shadow-lg dark:hover:shadow-fuchsia-950 ${customClass}`}
    >
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={title}
          className="h-full w-auto rounded-bl rounded-tl"
          width="270"
          height="400"
        />
      )}
      <div className="flex h-full w-auto flex-col items-start justify-between px-6 py-4">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-medium text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <p className="line-clamp-4 text-slate-950 dark:text-gray-300">
            {description}
          </p>
        </div>
        <div className="flex w-full items-center justify-between border-t border-gray-200 pb-1 pt-4 font-bold text-slate-800 dark:text-gray-200">
          <p>Pie de la tarjeta</p>

          <div>
            <div
              id="tooltip-default"
              role="tooltip"
              className="tooltip absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
            >
              Tooltip content
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
            <svg
              data-tooltip-target="tooltip-default"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              width={30}
              height={22}
              className="fill-current"
            >
              <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" />
            </svg>
          </div>
        </div>
      </div>
    </figure>
  );
};

export default Card;

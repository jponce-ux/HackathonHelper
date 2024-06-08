import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc }) => {
  return (
    <figure className="h-auto max-h-max max-w-sm overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="px-6 py-4 flex flex-col ">
        <h3 className="text-2xl font-medium text-gray-900 mb-4">{title}</h3>
        <Image
          src={imageSrc}
          alt={title}
          className="h-auto w-full rounded"
          width="480"
          height="480"
        />
        <p className="text-stone-600 mt-4">{description}</p>
      </div>
      <div className="px-6 py-1 text-gray-400 font-bold border-t">
        <p>Pie de la tarjeta</p>
      </div>
    </figure>
  );
};

export default Card;

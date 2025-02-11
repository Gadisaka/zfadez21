import Image, { StaticImageData } from "next/image";
import React from "react";

interface ServicesCardProps {
  title: string;
  description: string;
  image: StaticImageData;
}

interface CardData {
  data: ServicesCardProps[];
}

const ServicesCard: React.FC<CardData> = ({ data }) => {
  return (
    <div>
      {data.map((service, index) => (
        <div key={index}>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
          <Image src={service.image.src} alt={service.title} />
        </div>
      ))}
    </div>
  );
};

export default ServicesCard;

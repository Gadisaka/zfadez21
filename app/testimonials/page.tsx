"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import user1 from "@/public/pngegg.png";

import { StaticImageData } from "next/image";

const link =
  "https://www.google.com/search?hl=en-ET&gl=et&q=Yiheyis/Zfadez21+Barbershop+%26+Salon+15%2B+Years+Experienced,+4460+W+Walnut+St+%23+114,+Garland,+TX+75042,+United+States&ludocid=5711781315028413890&lsig=AB86z5WeEjJ_5NvOUyqoPLe9n-ER#lrd=0x864c1f78b34a571f:0x4f4452d7fcfb6dc2,3";

interface Testimonial {
  image: StaticImageData;
  name: string;
  body: string;
}

const testimonials: Testimonial[] = [
  {
    image: user1,
    name: "Lloyd T Phiri",
    body: "I have been in Texas for about 3 months, got haircuts from other barbershops. I have been looking for a barbershop that I call home, I'm safe to say this is now my home, they understood the assignment. Robert the Barber took time and give me a detailed haircut. I was more than happy. Also his partner is so good. The environment is so clean, welcoming and the equipment up to standard. They offer you something to drink on the house. What a service. I'm part of the family now. Exceptional job and client service guys.",
  },
  {
    image: user1,
    name: "Abiey Tafesse",
    body: " I will honestly have to say the best Barber in town. Yeheyis is very attentive your preference and gave a professional advise to what all your Barber needs. He is an exceptional, we'll skilled Barber in the big D. I recommend him to all that needs a great knowledgeable barber.Thank you very much for your great service. ",
  },
  {
    image: user1,
    name: "Elias Meles",
    body: "This place is amazing! The people who work there are very friendly and professional! The guy who cuts my and my kids hair named Yiheyis is special. He knows exactly what kind of haircut is good for your age, style, and shape of your head. His professionalism is very good! I recommend this place to anyone who wants a good haircut regardless of age.",
  },
  {
    image: user1,
    name: "Selam Tesfa",
    body: "I've known Yiheyis for years now, Impressive skill that shows in every haircut, I never feel rushed and his incredible attention to details always leaves me looking my best. I appreciate the passion, professionalism, clean & well organized environment he maintains. Plus, his friendly & polite demeanor with such a comfortable vibe of the barbershop makes every visit a pleasure! Highly recommend",
  },
  {
    image: user1,
    name: "Eyoel Wendwosen Feleke",
    body: "For a standout haircut, Yiheyis is your go-to. His fades, beard trims, and laser sharp lines are always on point. You'll leave looking polished and sharp. Highly recommended! ✂️👌",
  },
  {
    image: user1,
    name: "Ramadhan Ahmed",
    body: "What can I say, Eyeyis cuts was great man, we could have a good honest conversation and at the same he could cut my hair & beard to what I wished. As long as I’m alive I will constantly keep coming here for a sharp fade and good conversations! Best barber in Dallas, Tx.",
  },
  {
    image: user1,
    name: "Yafet Segid",
    body: "Yiheyis Barbery Shop is truly exceptional! From the moment I walked in, I felt welcomed and comfortable. The barber is incredibly skilled, listening to my preferences and delivering a fantastic haircut with great attention to detail. The atmosphere is cozy and inviting, making it a pleasant experience overall. Highly recommend Yiheyis for anyone seeking excellent grooming services. I'll definitely be returning!",
  },
  {
    image: user1,
    name: "yadiel Tesfamariam",
    body: "Best barber in Town 💯 Yiheyis skills combined with his warm and cheerful personality makes my experience always delightful. Highly recommend Check it out. Always book in advance though very busy guy !!! 💇🏾‍♂️ 💯 🔥",
  },
  {
    image: user1,
    name: "Samuel Teklu",
    body: "Excellent job by Z,His work is truly amazing. He is very focused and detail-oriented, making his barbershop top-notch not only in the DFW area but in the whole state.if you’re coming outsides,this a must-go place.They will take great care of you.",
  },
  {
    image: user1,
    name: "sammy avgi",
    body: "Yiheyis is one of the most respectful creative intuitive barbers I have ever met. Extremely punctual and professional. His opinion and work can be trusted no matter the client and request. Thank you so much for your services brother.",
  },
  {
    image: user1,
    name: "Apollo Aphrodite",
    body: "A master of his craft, top-notch haircuts with a friendly smile. With precision and care, he creates a welcoming atmosphere where you'll leave feeling like a celebrity👑. A cut above the rest, Yiheyis is simply the best!",
  },
  {
    image: user1,
    name: "AJ Aflegn",
    body: "If you're someone like me who prefers their hair cut on point, Yiheyis is your man. This guy is ridiculously good and he performs magic with those clippers. My son and I enjoy our cuts from him and his professionalism and customer service is unmatched. But what impressed me the most is his patience and attention to detail. I highly recommend him.",
  },
  {
    image: user1,
    name: "Olaoluwa Otunba Adenugba",
    body: "This barber is a top notch guy. He makes sure he attend to you like a baby. HE treats my hair really good with a professional touch. I will recommend him anyday anytime .If you need a very clean and dope cut anyday please visit him and you will never regret doing so.",
  },
  {
    image: user1,
    name: "Zelalem Bezabh",
    body: "Professional, personable and overall clean environment. I don't normally write reviews but Yehyis's skill and character compelled me to drop one. If you want a quality barber with a reasonable price Yehyi's at zefadez21 is the place to go.",
  },
  {
    image: user1,
    name: "Mahyewi Wallelign",
    body: "In many many years of my hair cut experience I have never seen a talented guy like this dude. He knows what to do , you need not tell him every single minute how he should cut your hair. Once you tell him,he got it!!! Thank you bro 🙏🏽🙏🏽🙏🏽 you are polite,professional and fair!!!",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const cardsPerSlide =
    typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full p-6 text-center relative  bg-[#543310]">
      <div className="absolute bottom-0 right-0 w-full h-full rounded-2xl  z-10 bg-gradient-to-t from-[#000000] opacity-60"></div>

      {/* Google 5-Star Rating */}
      <h1 className="text-4xl font-bold my-6  z-20">Testimonials</h1>
      <div className="flex flex-col items-center justify-center mb-4 z-50 cursor-pointer w-full">
        <p className="z-20">Yiheys</p>
        <a
          href={link}
          className="flex items-center justify-center  bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 cursor-pointer z-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="24px"
            height="24px"
            className="mr-2 rounded-full bg-white p-1"
          >
            <path
              fill="#4285F4"
              d="M24 9.5c3.9 0 6.6 1.7 8.1 3.1l6-6C34.7 3.5 29.8 1.5 24 1.5 14.8 1.5 7.2 7.8 4.7 16.2l7.3 5.7C13.2 15.1 18 9.5 24 9.5z"
            />
            <path
              fill="#34A853"
              d="M46.5 24c0-1.6-.1-2.8-.3-4.1H24v8.1h12.8c-.6 3.1-2.4 5.7-5.1 7.4l7.3 5.7c4.2-3.9 6.5-9.6 6.5-16.1z"
            />
            <path
              fill="#FBBC05"
              d="M12 28.1c-1.1-3.1-1.1-6.5 0-9.6L4.7 12.8c-2.8 5.6-2.8 12.3 0 17.9L12 28.1z"
            />
            <path
              fill="#EA4335"
              d="M24 46.5c5.8 0 10.7-1.9 14.3-5.2l-7.3-5.7c-2 1.4-4.5 2.3-7.1 2.3-6 0-10.9-4.1-12.7-9.6l-7.3 5.7c2.5 8.4 10.1 14.7 19.1 14.7z"
            />
          </svg>
          Review us on Google
        </a>
      </div>
      <div className="flex flex-col items-center justify-center mb-4 z-20">
        <span className="text-lg font-bold mr-2 z-30">
          Rated 5 Stars on Google
        </span>
        <div className="flex text-yellow-500 z-30">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} size={20} />
          ))}
        </div>
        <p>Based on 140+ reviews</p>
      </div>

      {/* Testimonials Slider */}
      <div className="overflow-hidden relative z-20">
        <div
          className="flex transition-transform duration-500  gap-0 md:gap-5"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsPerSlide}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full md:w-1/4 flex-shrink-0 flex justify-around items-center flex-col  p-4 bg-white rounded-lg shadow-lg"
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mb-3"
                width={64}
                height={64}
              />
              <p className="text-gray-700 w-[90%]">{testimonial.body}</p>
              <h3 className="mt-2 font-semibold text-[#543310]">
                {testimonial.name}
              </h3>
              <div className="flex justify-center mt-2 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={16} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4 space-x-2 z-20">
        {Array(testimonials.length - 2)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                i === currentIndex ? "bg-gray-900" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(i)}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default Testimonials;

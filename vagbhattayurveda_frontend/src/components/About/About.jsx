import profilePic from "../../assets/images/photo-1509098681029-b45e9c845022.jpeg";

const About = () => {
  return (
    <>
      <div className="mt-20 pl-48 pr-48 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col w-[60%]">
          <h1 className="font-extrabold text-4xl mb-7">Meet Dr. Green</h1>
          <p className="font-normal text-2xl mb-4">
            Welcome to the realm of natural healing! Dr. Green, the Ayurveda
            wizard, brews magic potions from the essence of Mother Nature to
            restore your vitality and balance.
          </p>

          <p className="font-normal text-2xl mb-4">
            With a lineage of herbal wisdom passed down through generations, Dr.
            Green combines ancient knowledge with modern expertise to treat your
            ailments holistically.
          </p>

          <p className="font-normal text-2xl mb-4">
            Experience the harmony of mind, body, and spirit under the guidance
            of Dr. Green, where every herb whispers the secrets of wellness.
          </p>
        </div>

        <div className="ml-20">
          <img
            src={profilePic}
            alt="dr. image"
            className="bg-cover bg-no-repeat h-96 rounded-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default About;

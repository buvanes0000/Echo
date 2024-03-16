import { popular } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          We Provide You
          <span className="text-coral-red"> Top </span>
          <span className="text-coral-red">Quality </span> Watches
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Crafted with precision and sophistication, our meticulously designed
          timepieces ensure premium comfort and style, aimed at enhancing your
          everyday experiences. We offer unmatched quality, innovation, and a
          touch of elegance, delivering watches that elevate your wristwear game
          to a whole new level
        </p>

        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={popular}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;

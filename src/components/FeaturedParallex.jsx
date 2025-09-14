import Feature from "./Feature";
import clsx from "clsx";

const features = [
  {
    alignment: "left",
    bg: "bg-white",
    imageSrc: "/image.png",
    heading: "Strong Foundation",
    paragraph:
      "Build strength with our expert-designed training programs and personalized coaching.",
  },
  {
    alignment: "right",
    bg: "bg-neutral-950",
    imageSrc: "/image.png",
    heading: "Peak Performance",
    paragraph:
      "Unlock your full potential with performance-focused routines and nutrition.",
  },
  {
    alignment: "left",
    bg: "bg-white",
    imageSrc: "/image.png",
    heading: "Injury Prevention",
    paragraph:
      "Train safely and effectively with guidance tailored to your needs.",
  },
  {
    alignment: "right",
    bg: "bg-neutral-950",
    imageSrc: "/image.png",
    heading: "Community Support",
    paragraph:
      "Stay motivated with a supportive community and regular progress tracking.",
  },
];

const FeaturedParallax = () => {
  return (
    <div className="relative">
      {features.map((feat, i) => (
        <div
          key={i}
          className={clsx(
            "sticky top-[calc(var(--index)*4rem)] z-10", // stacking effect
            " shadow-lg rounded-2xl"
          )}
          style={{ "--index": i }}
        >
          <Feature {...feat} />
        </div>
      ))}
    </div>
  );
};

export default FeaturedParallax;

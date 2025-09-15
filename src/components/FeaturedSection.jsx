import Feature from "./Feature";
import clsx from "clsx";

import { features } from "@/lib/data";

const FeaturedParallax = () => {
  return (
    <div className="relative">
      {features.map((feat, i) => (
        <div
          key={i}
          className={clsx(
            "sticky top-[calc(var(--index)*4rem)] z-10 rounded-t-2xl"
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

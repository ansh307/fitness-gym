"use client";

const Services = () => {
  return (
    <section className="services-section relative flex flex-col items-center justify-center min-h-screen px-6 py-16 h-screen services-div">
      <h2 className="services-heading text-4xl md:text-6xl font-semibold mb-16 text-center">
        Our Services
      </h2>

      <div className="grid grid-cols-2 gap-16 max-w-6xl w-full">
        {/* Top-left */}
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-2xl font-bold mb-2">dadadadada</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            asdasdasdaaaaaa <br />
            aaaaaaaaaaaaad <br />
            asdasdas
          </p>
        </div>

        {/* Top-right */}
        <div className="flex flex-col items-end justify-center text-right">
          <h3 className="text-2xl font-bold mb-2">dadadadada</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            asdasdasdaaaaaa <br />
            aaaaaaaaaaaaad <br />
            asdasdas
          </p>
        </div>

        {/* Bottom-left */}
        <div className="flex flex-col items-start justify-center mt-32">
          <h3 className="text-2xl font-bold mb-2">dadadadada</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            asdasdasdaaaaaa <br />
            aaaaaaaaaaaaad <br />
            asdasdas
          </p>
        </div>

        {/* Bottom-right */}
        <div className="flex flex-col items-end justify-center text-right mt-32">
          <h3 className="text-2xl font-bold mb-2">dadadadada</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            asdasdasdaaaaaa <br />
            aaaaaaaaaaaaad <br />
            asdasdas
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

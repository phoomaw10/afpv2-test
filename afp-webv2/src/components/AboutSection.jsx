import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <Image
          src="/images/catpaut.jpeg"
          width={500}
          height={500}
          style={{ borderRadius: "15px" }}
        />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About us</h2>
          <p className="text-base lg:text-lg">
            We are an importer of cat-related products. We have special
            expertise in cats. Including many cat competitions. We source the
            best to provide the best for everyone's cats. If you love your cat,
            please trust and believe in our products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

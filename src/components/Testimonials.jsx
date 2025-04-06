import React from "react";
import Marquee from "react-fast-marquee";
const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      image:
        "https://i.ibb.co.com/cSMYH4Kv/photo-1544642899-f0d6e5f6ed6f-q-80-w-3387-auto-format-fit-crop-ixlib-rb-4-0.jpg", // Replace with actual image paths
      testimonial:
        "This platform made it so easy to find the perfect service for my needs. I highly recommend it!",
      rating: 5,
    },
    {
      name: "John Smith",
      image:
        "https://i.ibb.co.com/svPC1gDp/photo-1519874277605-9ec22182404e-q-80-w-3387-auto-format-fit-crop-ixlib-rb-4-0.jpg", // Replace with actual image paths
      testimonial:
        "Fantastic experience! The service was great, and the booking process was seamless.",
      rating: 4,
    },
    {
      name: "Emily Davis",
      image:
        "https://i.ibb.co.com/p6DGYybp/premium-photo-1664351560777-76a68ab54680-q-80-w-3388-auto-format-fit-crop-ixlib-rb-4-0.jpg", // Replace with actual image paths
      testimonial:
        "I loved the variety of services available. Everything was straightforward and easy to use.",
      rating: 5,
    },
    {
      name: "Mim Liza",
      image:
        "https://i.ibb.co.com/S4L3MS03/bb1416b3-5c71-49c2-b3f3-15ed79ad6cae.jpg", // Replace with actual image paths
      testimonial: "Everything was straightforward and easy to use.",
      rating: 5,
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">
        What Our Users Say
      </h2>
      <Marquee pauseOnHover={true} speed={100}>
        <div className="flex flex-wrap justify-center gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-lg max-w-xs w-full"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <div className="flex">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-5 h-5 text-yellow-500"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-3.793 2.045a1 1 0 01-1.447-1.054L7.118 12.5 4.27 9.954a1 1 0 011.054-1.447L9.5 7.118l2.045-3.793a1 1 0 011.788 0L14.88 7.118l3.173.56a1 1 0 01.057 1.795l-3.672 2.784L12.882 12.5a1 1 0 01-.044 1.395l2.045 3.793a1 1 0 01-1.447 1.054L10 15z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5 h-5 text-gray-400 mr-2"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 3a2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V3z" />
                </svg>
                {testimonial.testimonial}
              </p>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default Testimonials;

import React from "react";
import Slider from "react-slick"; // Import Slider component
import "slick-carousel/slick/slick.css"; // Default styling
import "slick-carousel/slick/slick-theme.css"; // Theme styling (optional)

function Testimonials() {
  const settings = {
    dots: true, // Show dot indicators
    infinite: true, // Infinite looping
    speed: 500, // Animation speed
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay interval
  };

  const testimonials = [
    {
      id: 1,
      name: "Shakti",
      text: "This is an excellent company! Their professionalism is on point. Highly recommend!",
    },
    {
      id: 2,
      name: "Ankit",
      text: "I couldn't be happier with the photos! They captured our day perfectly.",
    },
    {
      id: 3,
      name: "Abhinash ",
      text: "Amazing experience. The photographer was very friendly and skilled. Great results!",
    },
    {
      id: 4,
      name: "Arindam ",
      text: "Very professional and creative. Loved the unique angles and ideas for our family shoot.",
    },
    {
      id: 5,
      name: "vivek ",
      text: "They made our wedding day so special! The photos were magical and more than we could have ever hoped for.",
    },
    {
      id: 6,
      name: "Abhinav ",
      text: "The team was punctual, professional, and very accommodating. Highly recommended for any event!",
    },
    {
      id: 7,
      name: "Yash ",
      text: "We had a great experience during our baby's first photo session. They were very patient and gentle.",
    },
    {
      id: 8,
      name: "Shivam ",
      text: "Excellent service and stunning photographs! They really know how to capture the essence of each moment.",
    },
    {
      id: 9,
      name: " Dharuv",
      text: "Top-notch quality and service. They went above and beyond to meet our expectations.",
    },
    {
      id: 10,
      name: "Monmohan ",
      text: "Their eye for detail is impeccable. Loved how they handled our corporate event from start to finish.",
    },
  ];

  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-slide">
            <p>{testimonial.text}</p>
            <strong>- {testimonial.name}</strong>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;

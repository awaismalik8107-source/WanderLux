import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const packages = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=900&q=80',
    category: 'Luxury Escape',
    duration: '7 Days / 6 Nights',
    title: 'Maldives Signature Retreat',
    description: 'Private overwater villas, world-class dining, spa experiences, snorkeling adventures, and breathtaking sunsets.',
    price: 'From $3,900',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=900&q=80',
    category: 'Adventure Journey',
    duration: '10 Days / 9 Nights',
    title: 'Alpine Discovery Expedition',
    description: 'Explore scenic mountain routes, luxury lodges, glacier tours, and unforgettable panoramic landscapes.',
    price: 'From $4,600',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80',
    category: 'Cultural Experience',
    duration: '12 Days / 11 Nights',
    title: 'Japan Heritage Experience',
    description: 'Traditional temples, authentic cuisine, cultural immersion, modern city exploration, and private guided tours.',
    price: 'From $5,200',
  }
];

export default function FeaturedExperiences() {
  const containerRef = useRef(null);

  // Subtle parallax for a cinematic feel
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["30px", "-30px"]);

  return (
    <section 
      ref={containerRef}
      id="featured-packages"
      className="relative z-[4] w-full min-h-screen bg-[#FAFAFA] rounded-t-[40px] shadow-[0_-20px_50px_rgba(0,0,0,0.15)] flex flex-col"
      style={{ transform: 'translateZ(0)' }}
    >
      <div className="flex-1 max-w-[1440px] w-full mx-auto pt-[140px] pb-[140px] px-5 md:px-[32px] lg:px-[80px]">
        
        {/* Header */}
        <motion.div 
          style={{ y }}
          className="flex flex-col items-center text-center mb-[90px]"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="text-[#C89B3C] font-semibold uppercase tracking-[4px] text-sm mb-4"
          >
            Featured Experiences
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-[#111111] font-bold text-[34px] md:text-[48px] lg:text-[64px] leading-[1.1] max-w-[900px] mb-6 text-balance"
          >
            Travel Experiences Designed For Extraordinary Moments
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#666666] text-[20px] leading-[1.8] max-w-[750px] text-balance"
          >
            Every journey is carefully curated by our travel specialists. From luxury escapes and cultural expeditions to adventure-filled explorations, discover experiences crafted to create unforgettable memories.
          </motion.p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
          {packages.map((pkg, i) => (
            <motion.div 
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative h-[650px] rounded-[28px] overflow-hidden cursor-pointer"
              style={{ transform: 'translateZ(0)' }} // Hardware acceleration
            >
              {/* Image */}
              <div className="absolute inset-0 w-full h-full overflow-hidden rounded-[28px]">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.75)_100%)] pointer-events-none" />

              {/* Card Content & Hover Wrapper */}
              <div className="absolute inset-0 w-full h-full flex flex-col justify-end p-8 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.03]">
                <div className="flex flex-col items-start w-full transform-gpu">
                  
                  {/* Badge & Duration */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="bg-white/15 backdrop-blur-[12px] px-[18px] py-[10px] rounded-full text-white text-sm font-medium leading-none">
                      {pkg.category}
                    </span>
                    <span className="text-white/90 text-sm font-medium">
                      {pkg.duration}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-[32px] font-bold leading-[1.2] mb-3">
                    {pkg.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 leading-[1.7] text-base mb-6 line-clamp-3">
                    {pkg.description}
                  </p>

                  {/* Price & Button */}
                  <div className="w-full flex items-center justify-between mt-auto">
                    <span className="text-[#D4AF37] text-[22px] font-bold">
                      {pkg.price}
                    </span>
                    <button className="flex items-center gap-2 px-6 py-3 border border-white rounded-full text-white font-medium transition-colors duration-[350ms] group-hover:bg-white group-hover:text-black">
                      Explore Package
                      <svg 
                        className="w-4 h-4 transition-transform duration-[350ms] group-hover:translate-x-[6px]" 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Strip */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-[100px] py-10 border-y border-[#E0E0E0] flex flex-col items-center text-center max-w-[1200px] mx-auto"
        >
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 text-[22px] md:text-[26px] font-serif text-[#111111] font-semibold">
            <span className="flex flex-col md:flex-row items-center gap-2 md:gap-3">34,000+ <span className="text-[#666] font-sans text-[13px] uppercase tracking-[0.1em] font-bold">Successful Trips</span></span>
            <span className="text-[#C89B3C] hidden lg:inline">•</span>
            <span className="flex flex-col md:flex-row items-center gap-2 md:gap-3">91 <span className="text-[#666] font-sans text-[13px] uppercase tracking-[0.1em] font-bold">Destinations</span></span>
            <span className="text-[#C89B3C] hidden lg:inline">•</span>
            <span className="flex flex-col md:flex-row items-center gap-2 md:gap-3">4.9★ <span className="text-[#666] font-sans text-[13px] uppercase tracking-[0.1em] font-bold">Average Rating</span></span>
            <span className="text-[#C89B3C] hidden lg:inline">•</span>
            <span className="flex flex-col md:flex-row items-center gap-2 md:gap-3">68% <span className="text-[#666] font-sans text-[13px] uppercase tracking-[0.1em] font-bold">Repeat Travelers</span></span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

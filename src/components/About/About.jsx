import React from "react";

export default function About() {
  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900">
      <div
        className="relative py-16 md:py-24 lg:py-32 bg-cover bg-center text-white"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/33430970/pexels-photo-33430970.jpeg?cs=srgb&dl=pexels-marius-dubost-2154685620-33430970.jpg&fm=jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="container mx-auto px-6 md:px-12 xl:px-6 relative z-10">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-12 lg:items-center">
            <div className="md:w-5/12 lg:w-5/12 flex justify-center p-4">
              <img
                src="https://images.pexels.com/photos/33421742/pexels-photo-33421742.jpeg?cs=srgb&dl=pexels-nicola-toscan-504254652-33421742.jpg&fm=jpg"
                alt="Travel illustration"
                className="w-full h-auto max-w-sm rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="md:w-7/12 lg:w-6/12 text-white p-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">
                Memories will last with you, not the bills ✨
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-100">
                In the grand tapestry of life, it's not the numbers on a
                statement that truly define our journey, but the vibrant threads
                of experiences woven into our very being. Every adventure, every
                shared laugh, every breathtaking vista becomes an indelible part
                of who we are. So, let's invest wisely, not just in
                destinations, but in indelible moments. After all, the richest
                treasures we accumulate are not found in our bank accounts, but
                in the boundless album of our memories, which endure long after
                the bills are paid and forgotten. Because while expenses fade,
                the echoes of joy and discovery resonate forever.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-200">
                Join us in creating your next unforgettable chapter. We believe
                in journeys that enrich the soul, leaving you with stories to
                tell, not just transactions to forget.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Our Philosophy: Unlocking True Value
          </h2>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed">
            At our core, we're dedicated to transforming how you perceive
            travel. It's not merely about booking a trip; it's about crafting an
            experience that resonates deeply, long after the suitcases are
            unpacked. We strive to offer journeys that transcend the
            transactional, focusing instead on the joy, discovery, and personal
            growth that only genuine exploration can bring.
          </p>
        </div>
      </div>

      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
            Meet Our Happy Travelers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.pexels.com/photos/10077876/pexels-photo-10077876.jpeg?cs=srgb&dl=pexels-muneer-ahmed-khan-10077876.jpg&fm=jpg"
                alt="Traveler Sarah"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-400"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Sarah L.
              </h3>
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                "Absolutely breathtaking! Every detail was handled with care,
                leaving me free to soak in every moment."
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Visited: Maldives
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.pexels.com/photos/13444036/pexels-photo-13444036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Traveler Mark"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-purple-400"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Mark T.
              </h3>
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                "The journey was seamless, and the memories created are truly
                priceless. Highly recommend!"
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Visited: Machu Picchu
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.pexels.com/photos/3889895/pexels-photo-3889895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Traveler Emily"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-orange-400"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Emily R.
              </h3>
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                "An incredible adventure! Every moment was magical, and the
                focus on experience over expense truly shines."
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Visited: Kyoto, Japan
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-200 dark:bg-gray-900">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
            Exclusive Offers for Unforgettable Journeys 🚀
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img
                src="https://images.pexels.com/photos/1070527/pexels-photo-1070527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Paris Offer"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Romantic Paris Getaway
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Experience the magic of Paris with a special package including
                  boutique hotel stays and exclusive tours.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    Rs999
                  </span>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img
                src="https://images.pexels.com/photos/347201/pexels-photo-347201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Mountain Adventure"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Himalayan Trekking Expedition
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Conquer the peaks and witness stunning landscapes with our
                  guided Himalayan adventure.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    Rs1800
                  </span>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img
                src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Coastal Retreat"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Coastal Serenity Retreat
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Unwind by the sea with a peaceful retreat. Perfect for
                  relaxation and rejuvenation.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    Rs750
                  </span>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

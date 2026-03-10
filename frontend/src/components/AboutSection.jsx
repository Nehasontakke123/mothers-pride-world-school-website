const AboutSection = () => {
  return (
    <section className="relative w-full py-24 overflow-hidden">

      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">

        <iframe
          src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1338207391682892%2F&show_text=false&width=1280"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
          title="School Video"
        ></iframe>

      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-white">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          MOTHER'S PRIDE <span className="text-red-500">WORLD SCHOOL</span>
        </h2>

        <p className="text-center max-w-4xl mx-auto mb-14 text-gray-200">
          We thank you parents for entrusting your trust in us, as an excellent
          beginning to life is well recognized as the foundation for future development.
        </p>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Magical Beginning */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg">

            <h3 className="text-2xl font-semibold mb-4 text-red-400">
              A MAGICAL BEGINNING
            </h3>

            <p className="leading-relaxed mb-4 text-gray-200">
              Mother's Pride World School (MPWS) is an educational institution—a dream
              come true that unfolds the gift of life. Childhood is a magical time when
              creativity has no boundaries and children have infinite capabilities.
            </p>

            <p className="leading-relaxed mb-4 text-gray-200">
              We at MPWS provide a fun-filled and joyful learning environment that enables
              the blooming buds (Prideens) to develop love for learning. The importance of
              the early years to children's lives is now beyond question.
            </p>

            <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-300">
              "Schooling should be about independent development of each child with focus
              on identifying the latent through vision and encouraging it through diligence
              to achieve excellence."
            </blockquote>

          </div>

          {/* Shared Goal */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg">

            <h3 className="text-2xl font-semibold mb-4 text-red-400">
              OUR SHARED GOAL
            </h3>

            <p className="leading-relaxed mb-4 text-gray-200">
              Our aim is not only to pursue academic excellence but also to motivate children
              to become 'Lifelong Learners'. To achieve this our curriculum ensures holistic
              learning to take place in an innovative manner without coercion.
            </p>

            <p className="leading-relaxed mb-4 text-gray-200">
              The programs that we offer help build all domains of development and enhance
              self esteem and self efficacy. We instill in our prideens good values that
              allow children to receive learning for life.
            </p>

            <p className="leading-relaxed text-gray-200">
              A child is a bundle of joy for their parents and they want that child to feel
              wanted and loved. Our well equipped and well-trained teachers bring out the
              best from the students and ensure a secure feeling of a home away from home.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutSection;




// const AboutSection = () => {
//   return (
//     <section className="w-full py-20 bg-gray-50">

//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
//           MOTHER'S PRIDE <span className="text-red-600">WORLD SCHOOL</span>
//         </h2>

//         <p className="text-center max-w-4xl mx-auto mb-12 text-gray-600">
//           We thank you parents for entrusting your trust in us, as an excellent
//           beginning to life is well recognized as the foundation for future development.
//         </p>

//         {/* Grid Layout */}
//         <div className="grid md:grid-cols-3 gap-10 items-start">

//           {/* Video Section */}
//           <div className="rounded-xl overflow-hidden shadow-lg">

//             <iframe
//               src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1338207391682892%2F&show_text=0"
//               width="100%"
//               height="420"
//               style={{ border: "none", overflow: "hidden" }}
//               scrolling="no"
//               frameBorder="0"
//               allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
//               allowFullScreen
//               title="School Video"
//             ></iframe>

//           </div>

//           {/* Magical Beginning */}
//           <div>

//             <h3 className="text-2xl font-semibold mb-4 text-gray-900">
//               A MAGICAL BEGINNING
//             </h3>

//             <p className="text-gray-600 leading-relaxed mb-4">
//               Mother's Pride World School (MPWS) is an educational institution—a dream
//               come true that unfolds the gift of life. Childhood is a magical time when
//               creativity has no boundaries and children have infinite capabilities.
//             </p>

//             <p className="text-gray-600 leading-relaxed mb-4">
//               We at MPWS provide a fun-filled and joyful learning environment that enables
//               the blooming buds (Prideens) to develop love for learning. The importance of
//               the early years to children's lives is now beyond question.
//             </p>

//             <blockquote className="italic text-gray-500 border-l-4 border-red-500 pl-4">
//               "Schooling should be about independent development of each child with focus
//               on identifying the latent through vision and encouraging it through diligence
//               to achieve excellence."
//             </blockquote>

//           </div>

//           {/* Shared Goal */}
//           <div>

//             <h3 className="text-2xl font-semibold mb-4 text-gray-900">
//               OUR SHARED GOAL
//             </h3>

//             <p className="text-gray-600 leading-relaxed mb-4">
//               Our aim is not only to pursue academic excellence but also to motivate
//               children to become 'Lifelong Learners'. To achieve this our curriculum
//               ensures holistic learning to take place in an innovative manner without coercion.
//             </p>

//             <p className="text-gray-600 leading-relaxed mb-4">
//               The programs that we offer help build all domains of development and enhance
//               self esteem and self efficacy. We instill in our prideens good values that
//               allow children to receive learning for life.
//             </p>

//             <p className="text-gray-600 leading-relaxed">
//               A child is a bundle of joy for their parents and they want that child to feel
//               wanted and loved. Our well equipped and well-trained teachers bring out the
//               best from the students and ensure a secure feeling of a home away from home.
//             </p>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default AboutSection;
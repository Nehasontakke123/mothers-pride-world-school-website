// import pdfFile from "../assets/pdf/Disclosure-DQxs3I9m.pdf";
// import "../assets/css/cbseBanner.css";

// const items = [...Array(6)];

// const CBSEBanner = () => {
//   return (
//     <div className="cbse-wrapper">

//       <div className="cbse-track">

//         {[...items, ...items].map((_, index) => (
//           <div key={index} className="cbse-item">

//             <span className="cbse-badge">CBSE</span>

//             <span className="cbse-text">
//               AFFILIATION No.3330538
//             </span>

//             <button
//               onClick={() => window.open(pdfFile, "_blank")}
//               className="cbse-btn"
//             >
//               Mandatory Disclosure
//             </button>

//           </div>
//         ))}

//       </div>

//     </div>
//   );
// };

// export default CBSEBanner;




import pdfFile from "../assets/pdf/Disclosure-DQxs3I9m.pdf";
import "../assets/css/cbseBanner.css";

const items = [...Array(6)];

const CBSEBanner = () => {
  return (
    <div className="cbse-wrapper">

      <div className="cbse-track">

        {[...items, ...items].map((_, index) => (
          <div key={index} className="cbse-item">

            <span className="cbse-badge">
              CBSE
            </span>

            <span className="cbse-text">
              AFFILIATION No. 3330538
            </span>

            <button
              onClick={() => window.open(pdfFile, "_blank")}
              className="cbse-btn"
            >
              Mandatory Disclosure
            </button>

          </div>
        ))}

      </div>

    </div>
  );
};

export default CBSEBanner;
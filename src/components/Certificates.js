import "./Certificates.css";

import hackerrank from "../assets/certificates/hackerrank1.jpeg";
import hplife1 from "../assets/certificates/hplife1.jpeg";
import hplife2 from "../assets/certificates/hplife2.jpeg";
import hplife3 from "../assets/certificates/hplife3.jpeg";
import guvi from "../assets/certificates/guvi1.jpeg";
import google from "../assets/certificates/googlestudyjam.jpeg";
import spoken from "../assets/certificates/spokenrdbms.jpeg";
import datathon from "../assets/certificates/datathon.jpeg";

export default function Certificates() {
  const certs = [
    { img: hackerrank, title: "HackerRank Certification" },
    { img: hplife1, title: "HP LIFE Certification 1" },
    { img: hplife2, title: "HP LIFE Certification 2" },
    { img: hplife3, title: "HP LIFE Certification 3" },
    { img: guvi, title: "GUVI Certification" },
    { img: google, title: "Google Study Jam" },
    { img: spoken, title: "Spoken Tutorial - RDBMS" },
    { img: datathon, title: "Datathon Participation" }
  ];

  return (
    <section id="certificates">
      <h2>My Certificates</h2>

      <div className="cert-container">
        {certs.map((cert, index) => (
          <div className="cert-card" key={index}>
            <img src={cert.img} alt={cert.title} />
            <p>{cert.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
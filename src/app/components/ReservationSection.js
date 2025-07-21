// ANCHOR: reservations-opentable - OpenTable reservation integration
export default function ReservationSection() {
  return (
    <section
      id="reservations"
      className="py-20 bg-white"
      style={{ boxShadow: "inset 0 12px 24px -8px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="mb-10">
          <h2
            className="text-2xl uppercase tracking-wide mb-4"
            style={{ fontSize: "1.5em", color: "#333333" }}
          >
            Reservations
          </h2>
          <svg
            className="mx-auto"
            width="64"
            height="12"
            viewBox="0 0 64 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 6Q9 3 15 7Q21 9 27 5Q33 2 39 8Q45 10 51 4Q57 1 62 6"
              stroke="#f4610b"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        <div className="bg-white p-12 mb-12">
          <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.opentable.ca/r/les-momes-montreal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-white px-12 py-4 font-light text-sm uppercase tracking-wide hover:bg-opacity-90 transition-all duration-300"
            >
              Book on OpenTable
            </a>
            <a
              href="https://www.restomontreal.ca/resto/les-momes-villeray-saint-michel/15906/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gray-300 text-gray-700 px-12 py-4 font-light text-sm uppercase tracking-wide hover:bg-gray-50 transition-all duration-300"
            >
              Write a Review
            </a>
          </div>

          <div className="border-t border-gray-100 pt-8">
            <div className="grid md:grid-cols-2 gap-12 text-left mb-8">
              <div>
                <h4
                  className="font-light mb-4 uppercase tracking-wide"
                  style={{ fontSize: "0.9em", color: "#333333" }}
                >
                  Hours
                </h4>
                <p
                  className="font-light leading-relaxed"
                  style={{ fontSize: "1.0em", color: "#333333" }}
                >
                  Lundi 17H30 - 22H
                  <br />
                  Mardi 17H30 - 22H
                  <br />
                  Mercredi 17H30 - 22H
                  <br />
                  Jeudi 17H30 - 22H
                  <br />
                  Vendredi 17H30 - 22H
                  <br />
                  Samedi 17H30 - 22H
                  <br />
                  Dimanche 17H30 - 22H
                </p>
              </div>
              <div>
                <h4
                  className="font-light mb-4 uppercase tracking-wide"
                  style={{ fontSize: "0.9em", color: "#333333" }}
                >
                  Contact
                </h4>
                <p
                  className="font-light leading-relaxed"
                  style={{ fontSize: "1.0em", color: "#333333" }}
                >
                  Phone: 1-514-276-4606
                  <br />
                  Email: lesmomesmtl@gmail.com
                  <br />
                  Address: 586 Villeray Street
                  <br />
                  Montreal, QC H2R 1H6
                </p>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <h4
                className="font-light mb-6 uppercase tracking-wide text-center"
                style={{ fontSize: "0.9em", color: "#333333" }}
              >
                Location
              </h4>
              <div className="w-full h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.076892847582!2d-73.63496368443308!3d45.54496997910259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9196b5b4b5b4b%3A0x4b5b5b5b5b5b5b5b!2s586%20Rue%20Villeray%2C%20Montr%C3%A9al%2C%20QC%20H2R%201H6%2C%20Canada!5e0!3m2!1sen!2sus!4v1642000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Les Momes Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

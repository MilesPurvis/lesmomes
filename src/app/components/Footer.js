// ANCHOR: footer-restaurant - Restaurant footer with contact info
"use client";
import { useEdit } from "../contexts/EditContext";

export default function Footer() {
  const { handleEdit, isEditing } = useEdit();
  return (
    <footer className="py-16" style={{ backgroundColor: "#333333" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <img
              src="/lesmomes.png"
              alt="Les Momes"
              className="h-8 w-auto mb-3 mx-auto"
            />
            <p className="text-gray-300 mb-2" style={{ fontSize: "0.7em" }}>
              Authentic French cuisine in the heart of Montreal. Experience the
              warmth of French hospitality.
            </p>
          </div>

          <div>
            <h4
              className="font-semibold mb-2 text-white"
              style={{ fontSize: "0.7em" }}
            >
              Hours
            </h4>
            <div
              className="space-y-0 text-gray-300"
              style={{ fontSize: "0.7em" }}
            >
              <p>Lundi 17H30 - 22H</p>
              <p>Mardi 17H30 - 22H</p>
              <p>Mercredi 17H30 - 22H</p>
              <p>Jeudi 17H30 - 22H</p>
              <p>Vendredi 17H30 - 22H</p>
              <p>Samedi 17H30 - 22H</p>
              <p>Dimanche 17H30 - 22H</p>
            </div>
          </div>

          <div>
            <h4
              className="font-semibold mb-2 text-white"
              style={{ fontSize: "0.7em" }}
            >
              Contact
            </h4>
            <div
              className="space-y-0 text-gray-300"
              style={{ fontSize: "0.7em" }}
            >
              <p>586 Villeray Street</p>
              <p>Montreal, QC H2R 1H6</p>
              <p>
                <a
                  href="tel:1-514-276-4606"
                  className="text-accent hover:text-accent-light hover:underline transition-colors"
                >
                  Phone: 1-514-276-4606
                </a>
              </p>
              <p>
                <a
                  href="mailto:lesmomesmtl@gmail.com"
                  className="text-accent hover:text-accent-light hover:underline transition-colors"
                >
                  lesmomesmtl@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="https://instagram.com/lesmomesmtl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-light hover:underline transition-colors"
                >
                  @lesmomesmtl
                </a>
              </p>
            </div>
          </div>
        </div>

        <div
          className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400"
          style={{ fontSize: "0.7em" }}
        >
          <div className="flex items-center justify-center gap-4 mb-2">
            <p>&copy; 2024 Les Momes. All rights reserved.</p>
            <button
              onClick={handleEdit}
              className="text-gray-400 hover:text-white transition-colors p-1"
              title={isEditing ? "Finish Editing" : "Edit Menu"}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.828-2.828z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

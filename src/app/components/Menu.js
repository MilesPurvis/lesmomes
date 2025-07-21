// ANCHOR: menu-editable - Restaurant menu with owner edit capability
"use client";
import { useState } from "react";
import { useEdit } from "../contexts/EditContext";

const defaultMenuItems = [
  {
    category: "Grignotines",
    items: [
      { name: "PBJ & Foie gras", price: "12,00 $", description: "" },
      { name: "Olives fumées", price: "7,00 $", description: "" },
      { name: "Sandwich tête de cochon", price: "12,00 $", description: "" },
    ],
  },
  {
    category: "Entrées",
    items: [
      {
        name: "Carpaccio de boeuf",
        price: "24,00 $",
        description: "Roquette & Raifort / Condiment anchois",
      },
      {
        name: "Portobello grillé",
        price: "22,00 $",
        description: "Syphon polenta / Crumble de noix & truffe noire",
      },
      {
        name: "Maquereaux en escabèche",
        price: "24,00 $",
        description: "Crème gingembre / Oignon vert & Radis noir",
      },
      {
        name: "Tarte tatin de tomate cerise",
        price: "23,00 $",
        description: "Glace burrata / Pesto de pistache",
      },
    ],
  },
  {
    category: "Plats",
    items: [
      {
        name: "Tournedos de lotte",
        price: "45,00 $",
        description: "Foie de lotte / Sauce matelotte & Artichauts",
      },
      {
        name: "Carré de porc Ibérique",
        price: "48,00 $",
        description: "Rhubarbe / Bette à carde & Betteraves / Jus épicé",
      },
      {
        name: "Flétan vapeur",
        price: "45,00 $",
        description:
          "Aubergine brulée / Poivrons & Courgette / Sauce vierge tomatée",
      },
      {
        name: "Wellington de boeuf",
        price: "98,00 $",
        description: "Purée de petit pois / Légumes du moment / Jus de viande",
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Parfait glacé à la framboise",
        price: "14,00 $",
        description: "Crumble amande / Mélisse",
      },
      { name: "Fraise", price: "14,00 $", description: "Balsamique" },
      {
        name: "Chocolat",
        price: "14,00 $",
        description: "Noisette / Cardamome",
      },
      {
        name: "Assiette de fromages du Québec",
        price: "18,00 $",
        description: "",
      },
    ],
  },
];

export default function Menu() {
  const [menuItems, setMenuItems] = useState(defaultMenuItems);
  const { isEditing, setIsEditing } = useEdit();

  const updateMenuItem = (categoryIndex, itemIndex, field, value) => {
    const updatedMenu = [...menuItems];
    updatedMenu[categoryIndex].items[itemIndex][field] = value;
    setMenuItems(updatedMenu);
  };

  return (
    <section id="menu" className="py-20" style={{ backgroundColor: "#f2f2f2" }}>
      <div className="max-w-xl mx-auto px-10 text-center">
        <div className="mb-16">
          <div className="mb-10">
            <h2
              className="text-2xl uppercase tracking-wide mb-4"
              style={{ fontSize: "1.5em", color: "#333333" }}
            >
              Menu
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
          <div className="mb-6">
            <p
              className="text-lg mb-2"
              style={{ fontSize: "1.1em", color: "#333333" }}
            >
              Menu découverte
            </p>
            <p
              className="text-sm"
              style={{ color: "#333333", fontSize: "0.9em" }}
            >
              Apportez votre vin | Bring your own wine
            </p>
          </div>
        </div>

        <div className="space-y-16">
          {menuItems.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h3 className="eb-garamond-menu-category text-3xl mb-10 lowercase italic text-accent">
                {category.category}
              </h3>
              <div className="space-y-10">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="text-center">
                    <div className="mb-3">
                      <p
                        className="text-base leading-relaxed tracking-wide"
                        style={{
                          fontSize: "1.0em",
                          margin: "10px 0",
                          color: "#333333",
                        }}
                      >
                        {isEditing ? (
                          <div className="space-y-2">
                            <input
                              type="text"
                              value={item.name}
                              onChange={(e) =>
                                updateMenuItem(
                                  categoryIndex,
                                  itemIndex,
                                  "name",
                                  e.target.value,
                                )
                              }
                              className="border border-gray-200 px-2 py-1 w-full text-sm focus:outline-none focus:border-accent bg-white"
                              style={{ color: "#333333" }}
                              placeholder="Dish name"
                            />
                            <textarea
                              value={item.description}
                              onChange={(e) =>
                                updateMenuItem(
                                  categoryIndex,
                                  itemIndex,
                                  "description",
                                  e.target.value,
                                )
                              }
                              className="border border-gray-200 px-2 py-1 w-full text-sm focus:outline-none focus:border-accent bg-white"
                              style={{ color: "#333333" }}
                              rows="2"
                              placeholder="Description"
                            />
                            <input
                              type="text"
                              value={item.price}
                              onChange={(e) =>
                                updateMenuItem(
                                  categoryIndex,
                                  itemIndex,
                                  "price",
                                  e.target.value,
                                )
                              }
                              className="border border-gray-200 px-2 py-1 w-24 text-sm text-center focus:outline-none focus:border-accent bg-white"
                              style={{ color: "#333333" }}
                              placeholder="Price"
                            />
                          </div>
                        ) : (
                          <>
                            {item.name}
                            {item.description && ` / ${item.description}`}
                            {item.price && ` / ${item.price}`}
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 border-t border-gray-400">
          <h3 className="text-lg font-light mb-2" style={{ color: "#333333" }}>
            Formule table d&apos;hôte - 80$
          </h3>
          <p className="text-sm font-light italic" style={{ color: "#333333" }}>
            doit être prise par tous les convives à table
          </p>
        </div>

        {isEditing && (
          <div className="mt-8 text-center">
            <button
              onClick={() => {
                setIsEditing(false);
                alert("Menu saved successfully!");
              }}
              className="bg-accent text-white px-8 py-3 font-light text-sm uppercase tracking-wide hover:bg-opacity-90 transition-all"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

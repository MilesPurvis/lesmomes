"use client";
import { createContext, useContext, useState } from "react";

const EditContext = createContext();

export function EditProvider({ children }) {
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [editPassword, setEditPassword] = useState("");

  const handleEdit = () => {
    if (!isEditing) {
      setShowPasswordPrompt(true);
    } else {
      setIsEditing(false);
    }
  };

  const checkPassword = () => {
    if (editPassword === process.env.NEXT_PUBLIC_EDIT_MENU) {
      setIsEditing(true);
      setShowPasswordPrompt(false);
      setEditPassword("");
      // Scroll to menu section
      const menuElement = document.getElementById("menu");
      if (menuElement) {
        menuElement.scrollIntoViews({ behavior: "smooth" });
      }
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <EditContext.Provider
      value={{
        isEditing,
        setIsEditing,
        showPasswordPrompt,
        setShowPasswordPrompt,
        editPassword,
        setEditPassword,
        handleEdit,
        checkPassword,
      }}
    >
      {children}

      {showPasswordPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 max-w-sm w-full mx-4">
            <h3 className="text-lg font-light mb-6 text-center">
              Enter Password
            </h3>
            <input
              type="password"
              value={editPassword}
              onChange={(e) => setEditPassword(e.target.value)}
              className="border border-gray-200 px-4 py-3 w-full mb-6 text-sm focus:outline-none focus:border-accent"
              placeholder="Password"
            />
            <div className="flex gap-3">
              <button
                onClick={checkPassword}
                className="flex-1 bg-accent text-white px-4 py-3 text-sm font-light uppercase tracking-wide hover:bg-opacity-90 transition-all"
              >
                Submit
              </button>
              <button
                onClick={() => setShowPasswordPrompt(false)}
                className="flex-1 border border-gray-200 px-4 py-3 text-sm font-light uppercase tracking-wide hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </EditContext.Provider>
  );
}

export function useEdit() {
  const context = useContext(EditContext);
  if (!context) {
    throw new Error("useEdit must be used within an EditProvider");
  }
  return context;
}

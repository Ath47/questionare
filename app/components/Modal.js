import React from "react";

// Reusable input component
const ModalInput = ({ label, value, onChange, type = "number" }) => {
  return (
    <div className="update-items">
      <div className="flex">
        <p>{label}</p>
      </div>
      <input
        type={type}
        className="update-input w-24"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
};

function Modal({
  isOpen,
  onClose,
  rank,
  setRank,
  percentile,
  setPercentile,
  correctQuestions,
  setCorrectQuestionsLocal,
  handleUpdateItems,
}) {
  if (!isOpen) return null;

  // Configuration for input fields
  const inputFields = [
    {
      label: "Update your Rank",
      value: rank,
      onChange: setRank
    },
    {
      label: "Update your Percentile",
      value: percentile,
      onChange: setPercentile
    },
    {
      label: "Update your Correct Score (out of 15)",
      value: correctQuestions,
      onChange: setCorrectQuestionsLocal
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold">Update Scores</h2>
        </div>
        <div className="space-y-4">
          {inputFields.map((field, index) => (
            <ModalInput
              key={index}
              label={field.label}
              value={field.value}
              onChange={field.onChange}
            />
          ))}
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <button 
            onClick={onClose} 
            className="modal-btn"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdateItems}
            className="modal-btn bg-blue-900 text-white"
          >
            Save &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
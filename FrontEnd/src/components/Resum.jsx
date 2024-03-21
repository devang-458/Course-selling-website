import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from './Button';

// Define custom styles for the modal
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '80%',
    maxHeight: '80%',
    padding: '20px',
    border: 'none',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  }
};

const ResumeProgram = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    setModalIsOpen(false);
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="max-w-xl w-full m-10 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Resume Buildup Program</h2>
        <p className="text-lg text-gray-700 mb-6">
          Our resume buildup program provides you with essential tips and strategies to make your resume more impactful
          and increase your chances of landing your dream job.
        </p>
        <Button label="Enroll Now" onClick={() => setModalIsOpen(true)} />

        {/* Modal */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={customStyles}
          contentLabel="Enroll Form Modal"
        >
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl mb-4">Enroll Now</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default ResumeProgram;

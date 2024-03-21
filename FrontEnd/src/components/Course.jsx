import React, { useState } from 'react';
import Button from './Button';
import Modal from "react-modal"

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


function Course() {
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
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Two-Week Interview Preparation Training Program</h2>
        
        <div className="week mb-8">
          <div className="border-b-2 pb-4 mb-4">
            <h3 className="text-2xl font-semibold mb-4">Week 1:</h3>
            <ul className="pl-4">
              <li className="mb-4">
                <strong className="block mb-2 text-lg">Day 1:</strong>
                <ul className="pl-4 text-gray-700">
                  <li>Overview of the training program objectives and structure.</li>
                  <li>Importance of interview preparation.</li>
                  <li>Common reasons for not being shortlisted in interviews.</li>
                  <li>Understanding the hiring process and employer expectations.</li>
                </ul>
              </li>
              <li className="mb-4">
                <strong className="block mb-2 text-lg">Day 2:</strong>
                <ul className="pl-4 text-gray-700">
                  <li>Explanation of different interview formats (e.g., behavioral, technical).</li>
                  <li>Mock interviews to simulate various interview formats.</li>
                  <li>Tips for adapting to different interview styles.</li>
                </ul>
              </li>
              <li className="mb-4">
                <strong className="block mb-2 text-lg">Day 3:</strong>
                <ul className="pl-4 text-gray-700">
                  <li>Importance of mock interviews in preparation.</li>
                  <li>Conduct mock interviews with participants, focusing on common interview questions.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="week">
          <div className="border-b-2 pb-4 mb-4">
            <h3 className="text-2xl font-semibold mb-4">Week 2:</h3>
            <ul className="pl-4">
              <li className="mb-4">
                <strong className="block mb-2 text-lg">Day 4:</strong>
                <ul className="pl-4 text-gray-700">
                  <li>Review of Day 3 mock interviews, providing feedback and suggestions for improvement.</li>
                  <li>Additional mock interviews focusing on specific job roles or industries.</li>
                </ul>
              </li>
              <li className="mb-4">
                <strong className="block mb-2 text-lg">Day 5:</strong>
                <ul className="pl-4 text-gray-700">
                  <li>Discussion on major interview mistakes and how to avoid them.</li>
                  <li>Role-playing scenarios to demonstrate proper interview behavior.</li>
                  <li>Strategies for handling tough interview questions and tricky situations.</li>
                </ul>
              </li>
              <li className="mb-4">
                <strong className="block mb-2 text-lg">Day 6:</strong>
                <ul className="pl-4 text-gray-700">
                  <li>Recap of key learnings from the training program.</li>
                  <li>Final Q&A session to address any remaining doubts or concerns.</li>
                  <li>Tips for maintaining confidence and staying calm during interviews.</li>
                  <li>Distribution of resources and materials for continued self-study.</li>
                  <li>Feedback collection from participants to improve future training programs.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <Button label={"Enroll Now"} onClick={()=>{setModalIsOpen(true)}} />
            <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl mb-4">Enter Your Information</h2>
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
      </div>
    </div>
  );
}

export default Course;

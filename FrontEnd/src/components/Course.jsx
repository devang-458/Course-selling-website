import React, { useState } from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import FormModal from '../Pages/FormModal';


function Course() {
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const navigate = useNavigate();

  // Function to toggle modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
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
            {/* Button to open modal */}
            <Button label={"Enroll Now"} onClick={toggleModal} />
            {/* Render FormModal component based on showModal state */}
            {showModal && <FormModal closeModal={toggleModal} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;

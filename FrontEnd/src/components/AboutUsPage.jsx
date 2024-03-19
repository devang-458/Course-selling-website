import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About First Step</h1>
      <p className="text-lg mb-6">Welcome to First Step, your trusted partner in interview preparation and resume building!</p>
      
      <div className="bg-gray-100 rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
        <p>At First Step, our mission is to empower job seekers with the tools and knowledge they need to succeed in their career aspirations. We understand the challenges of navigating the job market, and we're here to support you every step of the way.</p>
      </div>
      
      <div className="bg-gray-100 rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-2">Our Services</h2>
        <ul className="list-disc ml-6 mb-2">
          <li>Interview preparation sessions</li>
          <li>Resume building assistance</li>
          <li>Cover letter writing guidance</li>
          <li>Mock interviews</li>
          <li>Personalized career coaching</li>
          <li>LinkedIn profile optimization</li>
        </ul>
        <p>Whether you're a recent graduate, a career changer, or a seasoned professional, our comprehensive services are tailored to meet your specific needs and help you achieve your career goals.</p>
      </div>

      <div className="bg-gray-100 rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-2">Why Choose Us?</h2>
        <p>With years of experience in the industry, our team of experts is dedicated to providing personalized support tailored to your unique needs. We believe in fostering confidence and empowering individuals to showcase their skills and talents effectively.</p>
      </div>

      <div className="bg-gray-100 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
        <p className="mb-2">Ready to take the first step towards your dream career? Contact us today to learn more about our services and how we can assist you!</p>
        <p className="mb-4">Phone: 123-456-7890</p>
        <p>Email: info@firststep.com</p>
      </div>
    </div>
  );
};

export default AboutUsPage;

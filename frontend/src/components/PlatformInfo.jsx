import React from 'react';
import Divcard1 from './Divcard1';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PlatformInfo = ({ className = '' }) => {
  const faqData = [
    {
      question: 'What is "Akshar"?',
      answer:
        'Akshar is an educational platform designed to enhance the learning experience for both students and faculty. It offers tools to manage lectures, assignments, feedback, and more.',
    },
    {
      question: 'How do I view student feedback?',
      answer:
        'To view student feedback, go to the Feedback section. Here, you can see all the feedback submitted by students for your lectures and assignments.',
    },
    {
      question: 'How can I reset my password?',
      answer:
        "Click on Forgot Password on the login page. Enter your email, and you'll receive a reset link. Follow the instructions in the email to create a new password.",
    },
    {
      question: 'How can I check my grades?',
      answer:
        "Log in to your account and navigate to the Grades section. Here, you'll see a detailed breakdown of your performance in each course, including feedback from instructors.",
    },
    {
      question: 'What if I encounter a technical issue?',
      answer:
        'Contact our support team by clicking on the Support link at the bottom of the page. Provide a detailed description of the issue, and our team will assist you promptly.',
    },
    {
      question: 'Is there a mobile app available?',
      answer:
        'Yes, Akshar has a mobile app for both iOS and Android devices. You can download it from the App Store or Google Play Store to access all features on the go.',
    },
  ];

  return (
    <StyledSection className={className}>
      {faqData.map((faq, index) => (
        <Divcard1 key={index} question={faq.question} answer={faq.answer} />
      ))}
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 100%;
  justify-content: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

PlatformInfo.propTypes = {
  className: PropTypes.string,
};

export default PlatformInfo;

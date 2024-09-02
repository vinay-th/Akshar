import React from 'react';
import './Testimonials.css'; // We'll create this CSS file for the styles

const TestimonialCard = ({ content }) => {
  return (
    <div className="card">
      <div className="content">
        <svg
          width="60"
          height="43"
          viewBox="0 0 60 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.25 15.8203C0.25 7.07959 7.32959 0 16.0703 0H17.125H21.3438V8.4375H17.125H16.0703C11.9966 8.4375 8.6875 11.7466 8.6875 15.8203V16.875H25.5625V42.1875H0.25V29.5312V16.875V15.8203ZM34 15.8203C34 7.07959 41.0796 0 49.8203 0H50.875H55.0938V8.4375H50.875H49.8203C45.7466 8.4375 42.4375 11.7466 42.4375 15.8203V16.875H59.3125V42.1875H34V29.5312V16.875V15.8203Z"
            fill="white"
          />
        </svg>
        <p className="para">{content}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <svg
            width="35"
            height="35"
            viewBox="0 0 49 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.25 0H48.25V39H28.75L15.25 48V39H0.25V0ZM12.25 22.5C13.0456 22.5 13.8087 22.1839 14.3713 21.6213C14.9339 21.0587 15.25 20.2956 15.25 19.5C15.25 18.7044 14.9339 17.9413 14.3713 17.3787C13.8087 16.8161 13.0456 16.5 12.25 16.5C11.4544 16.5 10.6913 16.8161 10.1287 17.3787C9.56607 17.9413 9.25 18.7044 9.25 19.5C9.25 20.2956 9.56607 21.0587 10.1287 21.6213C10.6913 22.1839 11.4544 22.5 12.25 22.5ZM24.25 22.5C25.0456 22.5 25.8087 22.1839 26.3713 21.6213C26.9339 21.0587 27.25 20.2956 27.25 19.5C27.25 18.7044 26.9339 17.9413 26.3713 17.3787C25.8087 16.8161 25.0456 16.5 24.25 16.5C23.4544 16.5 22.6913 16.8161 22.1287 17.3787C21.5661 17.9413 21.25 18.7044 21.25 19.5C21.25 20.2956 21.5661 21.0587 22.1287 21.6213C22.6913 22.1839 23.4544 22.5 24.25 22.5ZM39.25 19.5C39.25 18.7044 38.9339 17.9413 38.3713 17.3787C37.8087 16.8161 37.0456 16.5 36.25 16.5C35.4544 16.5 34.6913 16.8161 34.1287 17.3787C33.5661 17.9413 33.25 18.7044 33.25 19.5C33.25 20.2956 33.5661 21.0587 34.1287 21.6213C34.6913 22.1839 35.4544 22.5 36.25 22.5C37.0456 22.5 37.8087 22.1839 38.3713 21.6213C38.9339 21.0587 39.25 20.2956 39.25 19.5Z"
              fill="white"
            />
          </svg>
          <p
            style={{
              fontSize: '1.45rem',
              color: '#ffffff',
              fontFamily: 'Mulish',
            }}
          >
            <span
              style={{
                fontWeight: 'bold',
                paddingLeft: '25px',
              }}
            >
              John Doe
            </span>
            <br />
            <span
              style={{
                fontSize: '1rem',
                color: '#ffffff',
                fontFamily: 'Mulish',
              }}
            >
              Faculty
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi laboriosam at voluptas minus culpa deserunt delectus sapiente inventore pariatur',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi laboriosam at voluptas minus culpa deserunt delectus sapiente inventore pariatur',
  ];

  return (
    <div className="testimonials-container">
      <h1 className="testimonials-title">Testimonials</h1>
      <p className="testimonials-subtitle">
        Hear what our users have to say about Akshar.
      </p>
      <div className="testimonials-grid">
        {testimonials.map((content, index) => (
          <TestimonialCard key={index} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

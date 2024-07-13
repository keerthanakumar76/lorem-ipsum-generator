import PropTypes from 'prop-types';

const Lorem = ({ text }) => {
  return (
    <div className="lorem-text">
      {text.map((paragraph, index) => (
        <div key={index} className="paragraph-container">
          <p className="paragraph">{paragraph}</p>
        </div>
      ))}
    </div>
  );
};

Lorem.propTypes = {
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default Lorem;

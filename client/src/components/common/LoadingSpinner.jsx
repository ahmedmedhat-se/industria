import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const LoadingSpinner = ({ size = 'lg', fullScreen = false, message = 'Loading...' }) => {
  const getSizeClass = () => {
    switch (size) {
      case 'sm': return 'spinner-sm';
      case 'md': return 'spinner-md';
      case 'lg': return 'spinner-lg';
      default: return 'spinner-lg';
    }
  };

  const spinner = (
    <div className={`loading-spinner ${getSizeClass()}`}>
      <FontAwesomeIcon 
        icon={faSpinner} 
        className="spinner-icon"
        spin 
      />
      {message && <div className="spinner-message mt-3">{message}</div>}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="loading-overlay">
        <div className="loading-container">
          {spinner}
        </div>
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;
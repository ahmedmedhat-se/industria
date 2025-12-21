import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faCheckCircle,
  faExclamationTriangle,
  faInfoCircle,
  faExclamationCircle,
  faBell
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import '../../styles/alert.css';

const Alert = ({
  type = 'info',
  message,
  title,
  dismissible = true,
  showIcon = true,
  autoDismiss = false,
  dismissAfter = 5000,
  onDismiss,
  className = '',
  isToast = false,
  position = 'top-right'
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (autoDismiss && isVisible) {
      const timer = setTimeout(() => {
        handleDismiss();
      }, dismissAfter);

      return () => clearTimeout(timer);
    }
  }, [autoDismiss, dismissAfter, isVisible]);

  const handleDismiss = () => {
    setIsVisible(false);
    if (onDismiss) {
      onDismiss();
    }
  };

  if (!isVisible) return null;

  const getAlertClass = () => {
    const baseClass = isToast ? 'alert-toast' : 'alert';
    const typeClass = `alert-${type}`;
    const positionClass = isToast ? `toast-${position}` : '';
    return `${baseClass} ${typeClass} ${positionClass} ${className}`;
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return faCheckCircle;
      case 'warning':
        return faExclamationTriangle;
      case 'danger':
        return faExclamationCircle;
      case 'info':
        return faInfoCircle;
      default:
        return faBell;
    }
  };

  const getAlertTitle = () => {
    if (title) return title;
    
    switch (type) {
      case 'success':
        return 'Success!';
      case 'warning':
        return 'Warning!';
      case 'danger':
        return 'Error!';
      case 'info':
        return 'Info';
      default:
        return '';
    }
  };

  const AlertContent = () => (
    <>
      {showIcon && (
        <div className="alert-icon">
          <FontAwesomeIcon icon={getIcon()} />
        </div>
      )}
      
      <div className="alert-body">
        {title && <h6 className="alert-title">{getAlertTitle()}</h6>}
        <div className="alert-message">{message}</div>
      </div>
      
      {dismissible && (
        <button
          type="button"
          className="btn-close-alert"
          onClick={handleDismiss}
          aria-label="Close"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      )}
    </>
  );

  if (isToast) {
    return (
      <div className={getAlertClass()} role="alert">
        <AlertContent />
      </div>
    );
  }

  return (
    <div className={getAlertClass()} role="alert">
      <div className="alert-content">
        <AlertContent />
      </div>
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'warning', 'danger', 'info', 'primary', 'secondary']),
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  title: PropTypes.string,
  dismissible: PropTypes.bool,
  showIcon: PropTypes.bool,
  autoDismiss: PropTypes.bool,
  dismissAfter: PropTypes.number,
  onDismiss: PropTypes.func,
  className: PropTypes.string,
  isToast: PropTypes.bool,
  position: PropTypes.oneOf(['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'])
};

// Toast Container Component
export const ToastContainer = ({ children, position = 'top-right' }) => {
  return (
    <div className={`toast-container toast-${position}`}>
      {children}
    </div>
  );
};

// Alert Hook for Global Alert Management
export const useAlert = () => {
  const [alerts, setAlerts] = useState([]);

  const addAlert = (alert) => {
    const id = Date.now();
    const newAlert = { ...alert, id };
    setAlerts(prev => [...prev, newAlert]);
    
    return id;
  };

  const removeAlert = (id) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  };

  const showSuccess = (message, options = {}) => {
    return addAlert({ type: 'success', message, ...options });
  };

  const showError = (message, options = {}) => {
    return addAlert({ type: 'danger', message, ...options });
  };

  const showWarning = (message, options = {}) => {
    return addAlert({ type: 'warning', message, ...options });
  };

  const showInfo = (message, options = {}) => {
    return addAlert({ type: 'info', message, ...options });
  };

  const clearAll = () => {
    setAlerts([]);
  };

  const AlertRenderer = ({ position = 'top-right' }) => (
    <ToastContainer position={position}>
      {alerts.map(alert => (
        <Alert
          key={alert.id}
          type={alert.type}
          message={alert.message}
          title={alert.title}
          dismissible={alert.dismissible !== false}
          autoDismiss={alert.autoDismiss !== false}
          dismissAfter={alert.dismissAfter || 5000}
          isToast={true}
          position={position}
          onDismiss={() => removeAlert(alert.id)}
          className={alert.className}
        />
      ))}
    </ToastContainer>
  );

  return {
    alerts,
    showSuccess,
    showError,
    showWarning,
    showInfo,
    removeAlert,
    clearAll,
    AlertRenderer
  };
};

export default Alert;
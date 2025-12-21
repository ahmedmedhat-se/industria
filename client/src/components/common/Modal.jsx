import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faExclamationTriangle, faCheckCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import '../../styles/modal.css';

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
  backdrop = true,
  centered = true,
  type = 'default',
  onConfirm,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  showConfirm = false,
  isLoading = false,
  disableConfirm = false
}) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const getTypeIcon = () => {
    switch (type) {
      case 'warning':
        return faExclamationTriangle;
      case 'success':
        return faCheckCircle;
      case 'info':
        return faInfoCircle;
      default:
        return null;
    }
  };

  const getTypeClass = () => {
    switch (type) {
      case 'warning':
        return 'modal-warning';
      case 'success':
        return 'modal-success';
      case 'info':
        return 'modal-info';
      case 'danger':
        return 'modal-danger';
      default:
        return '';
    }
  };

  const handleBackdropClick = (e) => {
    if (backdrop && e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
  };

  const modalContent = (
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div 
        className={`modal-container modal-${size} ${centered ? 'modal-centered' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className={`modal-content ${getTypeClass()}`}>
          <div className="modal-header">
            <div className="modal-title-container">
              {type !== 'default' && (
                <FontAwesomeIcon 
                  icon={getTypeIcon()} 
                  className={`modal-icon modal-icon-${type}`}
                />
              )}
              <h5 className="modal-title" id="modal-title">
                {title}
              </h5>
            </div>
            
            {showCloseButton && (
              <button
                type="button"
                className="btn-close-modal"
                onClick={onClose}
                aria-label="Close"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            )}
          </div>

          <div className="modal-body">
            {children}
          </div>

          {(showConfirm || showCloseButton) && (
            <div className="modal-footer">
              {showConfirm ? (
                <>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={onClose}
                    disabled={isLoading}
                  >
                    {cancelText}
                  </button>
                  <button
                    type="button"
                    className={`btn btn-${type === 'danger' ? 'danger' : 'primary'}`}
                    onClick={handleConfirm}
                    disabled={isLoading || disableConfirm}
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Processing...
                      </>
                    ) : (
                      confirmText
                    )}
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onClose}
                >
                  Close
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.getElementById('modal-root'));
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  showCloseButton: PropTypes.bool,
  backdrop: PropTypes.bool,
  centered: PropTypes.bool,
  type: PropTypes.oneOf(['default', 'info', 'success', 'warning', 'danger']),
  onConfirm: PropTypes.func,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  showConfirm: PropTypes.bool,
  isLoading: PropTypes.bool,
  disableConfirm: PropTypes.bool
};

export default Modal;
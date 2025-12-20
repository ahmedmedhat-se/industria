DROP DATABASE IF EXISTS industria_db;
CREATE DATABASE industria_db;
USE industria_db;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    phone VARCHAR(20),
    role ENUM('user', 'admin') DEFAULT 'user',
    status ENUM('active', 'inactive', 'suspended') DEFAULT 'active',
    remember_token VARCHAR(255) NULL,
    token_expires_at DATETIME NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    last_login TIMESTAMP NULL,
    INDEX idx_email (email),
    INDEX idx_username (username),
    INDEX idx_remember_token (remember_token)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE time_slots (
    id INT PRIMARY KEY AUTO_INCREMENT,
    day_of_week ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday') NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    is_available BOOLEAN DEFAULT TRUE,
    max_capacity INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_day_time (day_of_week, start_time),
    CONSTRAINT chk_time_order CHECK (end_time > start_time)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE bookings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    time_slot_id INT NOT NULL,
    booking_date DATE NOT NULL,
    status ENUM('pending', 'confirmed', 'cancelled', 'completed') DEFAULT 'pending',
    notes TEXT,
    cancellation_reason TEXT,
    cancelled_at TIMESTAMP NULL,
    confirmed_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (time_slot_id) REFERENCES time_slots(id) ON DELETE CASCADE,
    INDEX idx_user_bookings (user_id, booking_date),
    INDEX idx_time_slot_date (time_slot_id, booking_date),
    INDEX idx_status (status),
    INDEX idx_booking_date (booking_date),
    UNIQUE KEY unique_user_slot_date (user_id, time_slot_id, booking_date, status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE booking_history (
    id INT PRIMARY KEY AUTO_INCREMENT,
    booking_id INT NOT NULL,
    user_id INT NOT NULL,
    action ENUM('created', 'updated', 'cancelled', 'confirmed') NOT NULL,
    old_status VARCHAR(50),
    new_status VARCHAR(50),
    changed_by INT,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (changed_by) REFERENCES users(id) ON DELETE SET NULL,
    INDEX idx_booking_history (booking_id),
    INDEX idx_action_date (action, created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE notifications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    booking_id INT,
    type ENUM('booking_confirmed', 'booking_cancelled', 'booking_reminder', 'system') NOT NULL,
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    read_at TIMESTAMP NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE SET NULL,
    INDEX idx_user_notifications (user_id, is_read),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE system_settings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    setting_key VARCHAR(100) NOT NULL UNIQUE,
    setting_value TEXT,
    description VARCHAR(255),
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    updated_by INT,
    FOREIGN KEY (updated_by) REFERENCES users(id) ON DELETE SET NULL,
    INDEX idx_setting_key (setting_key)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO time_slots (day_of_week, start_time, end_time, is_available) VALUES
('Monday', '09:00:00', '10:00:00', TRUE),
('Monday', '10:00:00', '11:00:00', TRUE),
('Monday', '11:00:00', '12:00:00', TRUE),
('Monday', '13:00:00', '14:00:00', TRUE),
('Monday', '14:00:00', '15:00:00', TRUE),
('Monday', '15:00:00', '16:00:00', TRUE),
('Monday', '16:00:00', '17:00:00', TRUE),
('Tuesday', '09:00:00', '10:00:00', TRUE),
('Tuesday', '10:00:00', '11:00:00', TRUE),
('Tuesday', '11:00:00', '12:00:00', TRUE),
('Tuesday', '13:00:00', '14:00:00', TRUE),
('Tuesday', '14:00:00', '15:00:00', TRUE),
('Tuesday', '15:00:00', '16:00:00', TRUE),
('Tuesday', '16:00:00', '17:00:00', TRUE),
('Wednesday', '09:00:00', '10:00:00', TRUE),
('Wednesday', '10:00:00', '11:00:00', TRUE),
('Wednesday', '11:00:00', '12:00:00', TRUE),
('Wednesday', '13:00:00', '14:00:00', TRUE),
('Wednesday', '14:00:00', '15:00:00', TRUE),
('Wednesday', '15:00:00', '16:00:00', TRUE),
('Wednesday', '16:00:00', '17:00:00', TRUE),
('Thursday', '09:00:00', '10:00:00', TRUE),
('Thursday', '10:00:00', '11:00:00', TRUE),
('Thursday', '11:00:00', '12:00:00', TRUE),
('Thursday', '13:00:00', '14:00:00', TRUE),
('Thursday', '14:00:00', '15:00:00', TRUE),
('Thursday', '15:00:00', '16:00:00', TRUE),
('Thursday', '16:00:00', '17:00:00', TRUE),
('Friday', '09:00:00', '10:00:00', TRUE),
('Friday', '10:00:00', '11:00:00', TRUE),
('Friday', '11:00:00', '12:00:00', TRUE),
('Friday', '13:00:00', '14:00:00', TRUE),
('Friday', '14:00:00', '15:00:00', TRUE),
('Friday', '15:00:00', '16:00:00', TRUE),
('Friday', '16:00:00', '17:00:00', TRUE);

INSERT INTO system_settings (setting_key, setting_value, description) VALUES
('max_bookings_per_user', '1', 'Maximum active bookings per user'),
('booking_advance_days', '30', 'How many days in advance users can book'),
('cancellation_hours_notice', '24', 'Minimum hours notice for cancellation'),
('site_maintenance', 'false', 'Is site in maintenance mode'),
('allow_weekend_bookings', 'false', 'Allow bookings on weekends');

CREATE VIEW v_active_bookings AS
SELECT 
    b.id AS booking_id,
    b.booking_date,
    b.status,
    b.created_at AS booked_at,
    u.id AS user_id,
    u.username,
    u.email,
    u.first_name,
    u.last_name,
    ts.day_of_week,
    ts.start_time,
    ts.end_time
FROM bookings b
JOIN users u ON b.user_id = u.id
JOIN time_slots ts ON b.time_slot_id = ts.id
WHERE b.status IN ('pending', 'confirmed');

CREATE VIEW v_booking_stats AS
SELECT 
    DATE(created_at) AS booking_date,
    status,
    COUNT(*) AS count
FROM bookings
GROUP BY DATE(created_at), status;
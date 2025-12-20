import { verifyAccessToken } from "../utils/jwt.js";

export const authMiddleware = (options = {}) => {
    const { optional = false } = options;
    
    return (req, res, next) => {
        try {
            const authHeader = req.headers.authorization;
            
            if (!authHeader || !authHeader.startsWith("Bearer ")) {
                if (optional) {
                    req.user = null;
                    return next();
                }
                return res.status(401).json({
                    message: "Authentication required",
                    success: false,
                    code: "NO_TOKEN_PROVIDED"
                });
            };

            const token = authHeader.split(" ")[1];
            const decoded = verifyAccessToken(token);
            
            if (!decoded) {
                return res.status(403).json({
                    message: "Invalid or expired token",
                    success: false,
                    code: "INVALID_TOKEN"
                });
            };

            req.user = decoded;
            next();
        } catch (error) {
            console.error(`Auth Error [${req.method} ${req.path}]:`, error.message);
            if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
                return res.status(403).json({
                    message: "Invalid authentication token",
                    success: false,
                    code: "TOKEN_ERROR"
                });
            }
            
            return res.status(500).json({
                message: "Authentication error",
                success: false,
                code: "AUTH_ERROR"
            });
        }
    };
};
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const generateTokens = (user) => {
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    return { accessToken, refreshToken };
};

export const generateAccessToken = (user) => {
    return jwt.sign(
        {
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_ACCESS_EXPIRES_IN || "15m",
            issuer: "industria-api",
            audience: "industria-client"
        }
    );
};

export const generateRefreshToken = (user) => {
    return jwt.sign(
        {
            id: user.id,
            email: user.email,
            role: user.role,
            tokenVersion: user.tokenVersion || 0
        },
        process.env.JWT_REFRESH_SECRET,
        {
            expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || "7d",
            issuer: "industria-api",
            audience: "industria-client"
        }
    );
};

export const verifyAccessToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET, {
            issuer: "industria-api",
            audience: "industria-client"
        });
    } catch (error) {
        console.error('Access Token Verification Error:', error.message);
        return null;
    }
};

export const verifyRefreshToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_REFRESH_SECRET, {
            issuer: "industria-api",
            audience: "industria-client"
        });
    } catch (error) {
        console.error('Refresh Token Verification Error:', error.message);
        return null;
    }
};

export const decodeToken = (token) => {
    try {
        return jwt.decode(token);
    } catch (error) {
        console.error('Token Decode Error:', error.message);
        return null;
    }
};

export const isTokenExpired = (token) => {
    try {
        const decoded = jwt.decode(token);
        if (!decoded || !decoded.exp) return true;

        return Date.now() >= decoded.exp * 1000;
    } catch (error) {
        return true;
    }
};

export const getTokenRemainingTime = (token) => {
    try {
        const decoded = jwt.decode(token);
        if (!decoded || !decoded.exp) return 0;

        const currentTime = Math.floor(Date.now() / 1000);
        return Math.max(0, decoded.exp - currentTime);
    } catch (error) {
        return 0;
    }
};
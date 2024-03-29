const jwt = require('jsonwebtoken');
const {
  jwtSecretKey,
  jwtExpiration,
  jwtRefreshTokenSecretKey,
  jwtRefreshTokenExpiration
} = require('../config');

const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, jwtSecretKey, {
    expiresIn: jwtExpiration,
  });
  return token;
}

const createRefreshJWT = ({ payload }) => {
  const token = jwt.sign(payload, jwtRefreshTokenSecretKey, {
    expiresIn: jwtRefreshTokenExpiration,
  })
  return token;
}

const isTokenValid = ({ token }) => jwt.verify(token, jwtSecretKey);
const isTokenValidRefreshToken = ({ token }) => jwt.verify(token, jwtRefreshTokenSecretKey);

module.exports = {
  createJWT,
  isTokenValid,
  createRefreshJWT,
  isTokenValidRefreshToken,
}
module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '40882878ca4ebbd017212106c5fe1f4d'),
  },
});

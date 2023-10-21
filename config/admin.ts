export default ({env}) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: require('crypto').randomBytes(16).toString('base64'),
    },
  },
  autoOpen: false,
});

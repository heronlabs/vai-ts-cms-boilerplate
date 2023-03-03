export default ({env}) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        params: {
          Bucket: env('AWS_BUCKET_NAME'),
        },
      },
    },
  },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('AWS_EMAIL_ENDPOINT'),
        auth: {
          user: env('AWS_EMAIL_USER'),
          pass: env('AWS_EMAIL_PASS'),
        },
      },
      settings: {
        defaultFrom: env('AWS_EMAIL_ORIGIN'),
        defaultReplyTo: env('AWS_EMAIL_ORIGIN'),
      },
    },
  },
});

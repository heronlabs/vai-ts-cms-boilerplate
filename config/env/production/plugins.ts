export default ({env}) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: env('AWS_REGION'),
        params: {
          Bucket: env('AWS_BUCKET_NAME'),
        },
      },
    },
  },
  email: {
    config: {
      provider: 'amazon-ses',
      providerOptions: {
        key: env('AWS_ACCESS_KEY_ID'),
        secret: env('AWS_ACCESS_SECRET'),
        amazon: `https://email-smtp.${env('AWS_REGION')}.amazonaws.com`,
      },
      settings: {
        defaultFrom: env('AWS_EMAIL_ORIGIN'),
        defaultReplyTo: env('AWS_EMAIL_ORIGIN'),
      },
    },
  },
});

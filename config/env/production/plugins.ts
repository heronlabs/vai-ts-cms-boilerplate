import {plugins} from '../../common-plugins';

export default ({env}) => ({
  ...plugins({env}),
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_BUCKET_USER', ''),
        secretAccessKey: env('AWS_BUCKET_PASS', ''),
        region: env('AWS_REGION', ''),
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
        host: env('AWS_SMTP_ENDPOINT'),
        auth: {
          user: env('AWS_SMTP_USER'),
          pass: env('AWS_SMTP_PASS'),
        },
      },
      settings: {
        defaultFrom: env('AWS_SMTP_ORIGIN'),
        defaultReplyTo: env('AWS_SMTP_ORIGIN'),
      },
    },
  },
});

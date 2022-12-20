declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'production' | 'staging' | 'development' | 'test';
    FORCE_SENDING_EMAIL?: 'true';
    MAIL_SENDER?: 'Bitwala' | 'Nuri';
    MAIL_FROM?: 'support@bitwala.com' | 'hi@nuri.com';
  }

  export interface Process {
    env: ProcessEnv;
  }
}

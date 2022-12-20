declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'production' | 'staging' | 'development' | 'test';
    AWS_REGION: string;
  }

  export interface Process {
    env: ProcessEnv;
  }
}

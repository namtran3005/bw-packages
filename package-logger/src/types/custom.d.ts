declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'production' | 'staging' | 'development' | 'test';
  }

  export interface Process {
    env: ProcessEnv;
  }
}

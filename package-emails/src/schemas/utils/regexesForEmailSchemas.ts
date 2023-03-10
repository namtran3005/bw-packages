/* eslint-disable no-useless-escape */
export const safeCharsRegex = /^[A-ZÄÖÜß a-zäöü©\'\-\,_\(\)\+]+$/;
export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const nameRegex = /^[A-ZÄÖÜß a-zäöü\-]+$/;

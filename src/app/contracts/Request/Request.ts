import { HttpMethod } from '@azure/functions';

export interface RequestValidatorRequest {
  method: 'POST' | 'GET' | 'PATCH' | 'DELETE' | HttpMethod | null;
  body: any;
  query?: any;
}

export interface RequestValidatorValidator {
  requiredMethod: 'POST' | 'GET' | 'PATCH' | 'DELETE' | HttpMethod;
  requiredArgs: string[];
}

export interface RequestValidatorResult {
  id?: string;
  category?: string;
  name?: string;
  description?: string;
}

export type RequestValidity = {
  rejected: boolean;
  message: string;
  args: any[];
};

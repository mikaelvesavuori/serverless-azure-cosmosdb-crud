import { HttpMethod, HttpRequest } from '@azure/functions';

export type RequestValidatorRequest = HttpRequest;

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

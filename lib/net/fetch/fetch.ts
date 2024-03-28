import fetchBuilder from 'fetch-retry';
import {StatusCodes} from 'http-status-codes';
import _ from 'lodash';
import urlJoin from 'url-join';

import {getLocalStorageItem} from '@/lib/storage';

import {APIError} from './APIError';

////////////////////////////////////////////////////////////////////////////////

const fetchRetry = fetchBuilder(fetch);
type Params = {
  body?: BodyInit | null;
  headers?: HeadersInit;
  retry?: boolean;
};

////////////////////////////////////////////////////////////////////////////////

const logger = process.env.NODE_ENV === 'production' ? _.noop : console.debug;

export const fetchServer = async (path: string, params: Params = {}, method = 'GET') => {
  if (!path.startsWith('http')) {
    path = urlJoin(process.env.NEXT_PUBLIC_API_BASE_URL!, path);
  }

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  const token = getLocalStorageItem('token');
  if (token) {
    headers['Authorization'] = token;
  }

  Object.assign(headers, params.headers);

  const retry = params.retry ?? false;

  const options = {body: params.body, method, headers};

  logger(`${method}`, path, options);

  const response = await (retry ? fetchRetry : fetch)(path, options);
  const {status} = response;

  if (status === StatusCodes.INTERNAL_SERVER_ERROR) {
    logger(`${method} ${status} error`, path, '->', 'response:', response);
    throw new APIError(response);
  }

  const data = await response.json();
  logger(`${method} ${status} JSON response`, path, '->', data);

  if (!response.ok) {
    logger(`${method} ${status} error`, path, '->', 'response:', response);
    throw new APIError(response, data);
  }

  return data;
};

export const putServer = (path: string, body?: Record<string, unknown>, params?: Record<string, unknown>, method = 'PUT') => fetchServer(path, {body: JSON.stringify(body), ...params}, method);
export const patchServer = (path: string, body?: Record<string, unknown>, params?: Record<string, unknown>) => putServer(path, body, params, 'PATCH');
export const postServer = (path: string, body?: Record<string, unknown>, params?: Record<string, unknown>) => putServer(path, body, params, 'POST');
export const deleteServer = (path: string, body?: Record<string, unknown>, params?: Record<string, unknown>) => putServer(path, body, params, 'DELETE');
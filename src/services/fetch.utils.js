import { client, checkError } from './client';

export function getUser() {
  return client.auth.session();
}
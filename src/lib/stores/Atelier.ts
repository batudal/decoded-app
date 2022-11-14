import { writable } from 'svelte/store';

// common
export const stage = writable(0);
export const stage_fulfilled = writable(false);

// network
export const network = writable('');

// template
export const template_id = writable(-1);

// features
export const name = writable('');
export const symbol = writable('');
export const premint_amount = writable('');
export const options = writable(['']);

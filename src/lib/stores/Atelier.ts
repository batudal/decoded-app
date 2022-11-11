import { writable } from 'svelte/store';

export const network = writable('');
export const stage = writable(0);
export const template_id = writable(-1);
export const stage_fulfilled = writable(false);

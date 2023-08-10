import {writable} from 'svelte/store';
import {createClient} from '@supabase/supabase-js';
import URI from '../.env';
const defaultStore ={
  user: null,
  msgs: []
}

export const store = writable(defaultStore);

export  const supabase = createClient(URI)

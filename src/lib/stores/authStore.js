import { auth } from '$lib/firebase/firebase.client.js';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { writable } from 'svelte/store';

export const user = writable(null);

// Sync Firebase user with store
onAuthStateChanged(auth, (firebaseUser) => {
	user.set(firebaseUser);
});

export async function logout() {
	try {
		await signOut(auth);
	} catch (error) {
		console.error('Logout error:', error);
		throw error;
	}
}

import { uploadPhoto, createUser } from './utils.js';

/**
 * Uploads a photo and creates a user concurrently.
 * Returns an object with the photo and user data.
 * If either operation fails, returns an object with null values.
 * @returns {Promise<{photo: Object|null, user: Object|null}>}
 */
export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
}


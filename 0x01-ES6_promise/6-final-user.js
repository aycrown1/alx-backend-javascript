import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  const resolve = [];
  try {
    const user = await signUpUser(firstName, lastName);
    resolve.push({ status: 'fulfilled', value: user });
    await uploadPhoto(fileName);
  } catch (err) {
    resolve.push({
      status: 'rejected',
      value: `Error: ${fileName} cannot be processed`,
    });
  }
  return resolve;
}

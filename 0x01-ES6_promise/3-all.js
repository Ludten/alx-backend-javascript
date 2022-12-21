import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  try {
    let str;

    uploadPhoto()
      .then((item) => {
        str = item.body;
      })
      .catch(() => { throw new Error('Signup system offline'); });

    createUser()
      .then((item) => {
        str = `${str} ${item.firstName} ${item.lastName}`;
      })
      .catch(() => { throw new Error('Signup system offline'); })
      .finally(() => console.log(str));
  } catch (err) {
    console.log('Signup system offline');
  }
}

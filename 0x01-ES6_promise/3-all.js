import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  let str;

  uploadPhoto()
    .then((item) => {
      str = item.body;
    })
    .catch(() => console.log('Signup system offline'));

  createUser()
    .then((item) => {
      str = `${str} ${item.firstName} ${item.lastName}`;
    })
    .catch(() => console.log('Signup system offline'))
    .finally(() => console.log(str));
}

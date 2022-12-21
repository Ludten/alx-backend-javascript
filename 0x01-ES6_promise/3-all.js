import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((item) => {
      console.log(`${item[0].body} ${item[1].firstName} ${item[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}

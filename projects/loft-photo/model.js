// eslint-disable-next-line no-unused-vars
import photosDB from './photos.json';
// eslint-disable-next-line no-unused-vars
import friendsDB from './friends.json';

export default {
  getRandomElement(array) {
    const num = parseInt(Math.random() * (array.length - 1));
    return array[num];
  },

  getNextPhoto() {
    const randomFriend = parseInt(Math.random() * (friendsDB.length - 1));
    const randomNumber = parseInt(Math.random() * randomFriend);

    return {
      friend: friendsDB[randomFriend].firstName,
      url: photosDB[randomFriend][randomNumber].url,
    };
  },
};

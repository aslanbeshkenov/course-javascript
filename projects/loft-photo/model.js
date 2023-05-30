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
    const randomFriend = this.getRandomElement(friendsDB);
    const photos = photosDB[randomFriend.id];
    const randomPhoto = this.getRandomElement(photos);

    return {
      friend: randomFriend,
      url: randomPhoto.url,
    };
  },
};

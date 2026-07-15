import { faker } from '@faker-js/faker';

export const generateArticleData = () => ({
  title: faker.lorem.words(3),
  description: faker.lorem.sentence(),
  body: faker.lorem.paragraphs(2),
  tagList: [faker.word.noun(), faker.word.noun()]
});

export const generateUserData = () => ({
  username: faker.internet.username(),
  email: faker.internet.email(),
  bio: faker.person.bio(),
  image: faker.image.avatar()
});
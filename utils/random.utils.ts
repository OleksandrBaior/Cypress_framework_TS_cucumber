import { faker } from '@faker-js/faker';

class RandomUtils {
    rundomValue(value = '') {
        switch (value) {
            case 'firstName':
                return faker.person.firstName();
            case 'middleName':
                return faker.person.middleName();
            case 'email':
                return faker.internet.email();
            case 'phoneNumber':
                return faker.string.numeric(7);
            case 'text':
                return faker.lorem.word(5);
            default:
                break;
        }
    }
}

export default new RandomUtils();

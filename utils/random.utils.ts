import { faker } from '@faker-js/faker';

class RandomUtils {
    randomValue(value: 'firstName' | 'middleName' | 'email' | 'phoneNumber' | 'text') {
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
        }
    }
}

export default new RandomUtils();

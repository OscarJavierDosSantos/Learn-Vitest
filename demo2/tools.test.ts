import { countWords, generatePassword } from './tools';

//genera los test de countWords,generatePassword
describe('countWords', () => {
    test('Dado un texto vacio te devuelve un 0', () => {
        const sentence = '';
        expect(countWords(sentence)).toEqual(0);
    });
    test('Dado un texto te devuelve la cantidad de palabras en una frase', () => {
        const sentence = 'Hola';
        expect(countWords(sentence)).toEqual(1);
    });
    test('Dado un texto te devuelve la cantidad de palabras en una frase', () => {
        const sentence = 'Hola        soy         Óscar';
        expect(countWords(sentence)).toEqual(3);
    });
    test('Dado un texto te devuelve la cantidad de palabras en una frase', () => {
        const sentence = 'Hola soy Óscar';
        expect(countWords(sentence)).toEqual(3);
    });
});

describe('generatePassword', () => {
    test('Dado un numero te devuelve una contraseña aleatoria', () => {
        const sentence = 13;
        const result = generatePassword(sentence);
        expect(result).toHaveLength(sentence);
    });
    test('compruba que la contraseña tenga letras mayúsculas,letras minúsculas y números', () => {
        const sentence = 13;
        const result = generatePassword(sentence);
        const regExp = /([A-Za-z]+([0-9]+[A-Za-z]+)+)/;
        expect(result).toMatch(regExp);
    });
    test('Dado un numero menor de 6 te devuelve una contraseña aleatoria', () => {
        const sentence = 1;
        const result = generatePassword(sentence);
        expect(result).toHaveLength(6);
    });
});

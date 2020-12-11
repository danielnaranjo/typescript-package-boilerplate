import { Hello } from '../src/index'
test('Everybody said', () => {
    expect(Hello('Daniel')).toBe('Hello Daniel');
});
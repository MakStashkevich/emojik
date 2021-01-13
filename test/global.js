const test = require('ava');
const Emoji = require('../lib/emojik');

const testClass = function testClass(t, data) {
    t.is(typeof data.icon, 'function');
    t.is(typeof data.unicode, 'function');
    t.is(typeof data.utf8, 'function');
}

test('path', t => {
    testClass(t, Emoji.person_blond);
});

test('get', t => {
    testClass(t, Emoji.get('star'));
});

test('equal objects', t => {
    t.deepEqual(Emoji.clown_face, Emoji.get('clown face'));
})

test('icon', t => {
    t.is(Emoji.icon('goblin'), "\u{1F47A}");
});

test('unicode', t => {
    t.deepEqual(Emoji.unicode('man gesturing NO'), [
        '1F645', '200D', '2642', 'FE0F'
    ]);
});

test('utf8', t => {
    t.deepEqual(Emoji.utf8('man pouting', 'light'), [
        224, 169, 146
    ]);
});
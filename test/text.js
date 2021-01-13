const test = require('ava');
const Emoji = require('../lib/emojik');

test('formatted easy', t => {
    t.is(Emoji.text(
        'I :red_heart: you!'
    ), 'I \u{2764}\u{FE0F} you!');
});

test('formatted simple', t => {
    t.is(Emoji.text(
        "I'm superstar :smiling face with sunglasses: and like dance :man dancing:."
    ), "I'm superstar \u{1F60E} and like dance \u{1F57A}.");
});

test('formatted hard', t => {
    t.is(Emoji.text(
        ':man beard[light]: + :woman[medium light]: = :baby[dark]:? WTF?!'
    ), '\u{1F9D4}\u{1F3FB}\u{200D}\u{2642}\u{FE0F} + \u{1F469}\u{1F3FC} = \u{1F476}\u{1F3FF}? WTF?!');
});

test('formatted with others patterns', t => {
    t.is(Emoji.text(
        '(man beard:light) + (woman:medium light) = (baby:dark)? WTF?!',
        /\((.+?)\)/g, // pattern for name - "(any)"
        /:(.+?)\)$/, // pattern for skin tone - ":any)" !IMPORTANT! Without global flag!
    ), '\u{1F9D4}\u{1F3FB}\u{200D}\u{2642}\u{FE0F} + \u{1F469}\u{1F3FC} = \u{1F476}\u{1F3FF}? WTF?!');
});
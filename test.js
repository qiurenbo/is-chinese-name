const isChineseFamilyName = require('.');


test('too long string (> 4) should return false', () => {
	expect(isChineseFamilyName('中华人民共和国')).toEqual(false);
});

test('short string (< 2)  return false', () => {
	expect(isChineseFamilyName('中')).toEqual(false);
});

test('empty string should return false', () => {
	expect(isChineseFamilyName('')).toEqual(false);
});

test('normal use should return true', () => {
	expect(isChineseFamilyName('陈国栋')).toEqual(true);
});

test('non string should throw error', () => {
	expect(() => {
		isChineseFamilyName({});
	}).toThrow(new Error('Could not accept non-string type.'));
});

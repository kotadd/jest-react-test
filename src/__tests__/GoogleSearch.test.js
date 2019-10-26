const googleSearch = require('../practice/GoogleSearch');

const dbMock = ['dog.com', 'cheesepuff.com', 'disney.com', 'dogpictures.com'];

describe('googleSearch', () => {
  it('unmatch test', () => {
    expect(googleSearch('test', dbMock)).toEqual([]);
  });

  it('two mutch test', () => {
    expect(googleSearch('dog', dbMock).length).toBe(2);
  });

  it('does not return more than 3 matches', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3);
  });
});

const googleSearch = require('./script');

dbMock = [
  'dog.com',
  'cheesepuff.com',
  'disney.com',
  'dogpictures.com',
];

describe('googleSearch', () => {

  it('is a silly test', () => {
    expect('hello').toBe('hello');
  googleSearch('testteste', dbMock);
  })

  it('is searching google', () => {
    expect(googleSearch('testteste', dbMock)).toEqual([])
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com','dogpictures.com'])
  })

  it('should return [] when input undefined and null', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([])
    expect(googleSearch(null, dbMock)).toEqual([])
  })

  it('does not return more than three matches', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3);
  });

})
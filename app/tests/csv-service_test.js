'use strict';

describe('csvService', function() {
  var service, httpBackend;

  beforeEach(module('reddin'));

  beforeEach(function () {
    inject(function ($httpBackend, csvService) {
      httpBackend = $httpBackend;
      service = csvService;
    });
  });

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('should get the raw CSV data and perform the parsing.', function () {
    var mockData = "first_name,last_name,email\n"
      + "Dave,Smith-Hayes,me@davesmithhayes.com\n";

    httpBackend.expectGET('data/user-list.csv').respond(mockData);
    service.getData();

    httpBackend.flush();

    expect(typeof service.data[0]).toBe('object');
    expect(service.data[0].id).toBe(0);
    expect(service.data[0].first_name).toBe('Dave');
    expect(service.data[0].last_name).toBe('Smith-Hayes');
  });
});

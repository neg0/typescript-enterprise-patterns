import { Address } from "./Address";

describe("Testing Address Object Value", () => {
  const firstLineOfAddress = "666 Virginia Ave SW, Washington";
  const country = "USA";
  const postcode = "DC 20024";
  const mockData = {
    address: firstLineOfAddress,
    country: country,
    postcode: postcode
  };

  let sut: Address;

  beforeEach(() => {
    sut = new Address(mockData.address, mockData.country, mockData.postcode);
  });

  afterEach(() => {
    sut = undefined;
  });

  it("should have first line of address", () => {
    expect(sut.address.length).toBeGreaterThan(0);
  });

  it("should have country", () => {
    expect(sut.country.length).toBeGreaterThan(0);
  });

  it("should have postcode", function() {
    expect(sut.postcode.length).toBeGreaterThan(0);
  });
});

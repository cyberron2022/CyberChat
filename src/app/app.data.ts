import { InMemoryDbService } from "angular-in-memory-web-api";
import { Product } from "./products/product";

export class AppData implements InMemoryDbService {
  createDb() {
    const products: Product[] = [
      {
        id: 1,
        productName: "Leaf Rake",
        productCode: "GDN-0011",
        description: "Leaf rake with 48-inch wooden handle",
        starRating: 3.2,
      },
      {
        id: 2,
        productName: "Garden Cart",
        productCode: "GDN-0023",
        description: "15 gallon capacity rolling garden cart",
        starRating: 4.2,
      },
      {
        id: 5,
        productName: "Hammer",
        productCode: "TBX-0048",
        description: "Curved claw steel hammer",
        starRating: 4.8,
      },
      {
        id: 8,
        productName: "Saw",
        productCode: "TBX-0022",
        description: "15-inch steel blade hand saw",
        starRating: 3.7,
      },
      {
        id: 10,
        productName: "Video Game Controller",
        productCode: "GMG-0042",
        description: "Standard two-button video game controller",
        starRating: 4.6,
      },
    ];
    // const users: User[] = [
    //   {
    //     id: 1,
    //     firstname: 'Geronimo',
    //     lastname: 'Mananghaya',
    //     age: 43,
    //     address: 'East Drive Marikina Heights',
    //     city: 'Marikina City',
    //     country: 'Philippines',
    //     userName: 'cyberron',
    //     password: 'abcd1234',
    //     isAdmin: true,
    //   },
    //   {
    //     id: 2,
    //     firstname: 'Babylyn',
    //     lastname: 'Maniego',
    //     age: 35,
    //     address: 'Cutud Subdivision Sampaguita St.',
    //     city: 'Pampanga',
    //     country: 'Philippines',
    //     userName: 'babylyn',
    //     password: '1234abcd',
    //     isAdmin: false,
    //   },
    // ];
    return { products };
  }
}

export const datatypes = {
  runDemos: () => {
    const myName: string = 'Jannes';
    const isOpen: boolean = true;
    const myAge: number = 1.05;

    // arrays
    const arrNames: string[] = ['Mila', 'Steven'];

    // tuples
    type countryCode = [number, string];

    // type is static
    const belgianCountryCode: countryCode = [1, 'België'];

    interface Tools {
      name: string;
    }

    interface Tools {
      color: string;
    }

    interface Toothbrush extends Tools {
      color: string;
      owner: string;
      isElectric: boolean;
    }

    // we can do the same with types
    type Tools2 = {
      name: string;
    };

    type Toothbrush2 = Tools2 & {
      color: string;
      owner: string;
      isElectric: boolean;
    };

    enum Goals {
      'Rijk',
      'Liefde',
      'Bungeejumpen',
    }

    console.log(Goals['Rijk']);

    enum CountryCodes {
      'België' = 'BE',
      'Nederland' = 'NL',
      'Frankrijk' = 'FR',
    }

    console.log(CountryCodes['België']);

    // null and default

    let keyboard = 'azerty';

    // voorbeeld van duck typing
    type Person = {
      name: string;
      age: number;
    };

    // const persons: Person[] =

    let person1: Person = {
      name: 'Jannes',
      age: 12,
    };

    let monitor = {
      name: 'Dell',
      age: 3,
    };

    person1 = monitor;
  },
};

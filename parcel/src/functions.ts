export const functions = {
  runDemos: () => {
    const multiply = (a: number, b: number = 1) => {
      return a * b;
    };

    const groceryList = (
      importantGrocery: string,
      ...notImportantGrocery: string[]
    ) => {
      console.log(notImportantGrocery);
    };

    const createClass = (teacher: string, ...students: string[]) => {};

    console.log(multiply(5));

    groceryList('WC-papier', 'Courgette', 'Mozarella', 'Aubergine');

    // generics

    function returnValue<Generiek>(value: Generiek): string {
      return '' + value;
    }

    const returnValue2 = <T>(value: T): T => {
      return value;
    };

    console.log(returnValue(2));
    console.log(returnValue('2'));

    // type guard
    function writeToConsole(value: string | number) {
      if (typeof value == 'string') {
        console.log(value.toUpperCase());
        return;
      }
      console.log(value);
    }
  },
};

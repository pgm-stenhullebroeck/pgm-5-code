export const utility = {
  runDemos: () => {
    type todo = {
      name: string;
      time: string;
    };

    const myTodo: Readonly<todo> = {
      name: 'Mine',
      time: 'test',
    };

    // myTodo = {
    //   name: 'Mine',
    //   time: 'test',
    // };

    console.log(myTodo.name);
    // dankzij utility
    // myTodo.name = "koken"

    function DoTodo(string: Partial<todo>) {}

    const incompleteTodo = {
      name: 'test',
    };

    DoTodo(incompleteTodo);

    const todoName: Pick<todo, 'name'> = {
      name: '',
    };

    const todoName2: Omit<todo, 'name'> = {
      time: '',
    };
  },
};

import { Board, TaskColorPairs } from './board.model';

export const guestData: Board[] = [
  {
    id: Math.random() * Math.random(),
    title: 'Example welcome board',
    columns: [
      {
        title: 'This app gives you boards..',
        tasks: [
          {
            text: 'Click "BOARD" button at the top to MAKE NEW BOARD',
            bg: TaskColorPairs[0].bg,
            color: TaskColorPairs[0].text,
            done: false,
            alottedTime: 10,
          },
          {
            text: 'That same button also enables SELECTING a board',
            bg: TaskColorPairs[0].bg,
            color: TaskColorPairs[0].text,
            done: false,
            alottedTime: 10,
          },
          {
            text: 'EDIT by clicking "MENU" to the right of board title',
            bg: TaskColorPairs[0].bg,
            color: TaskColorPairs[0].text,
            done: false,
            alottedTime: 30,
          },
          {
            text: 'DELETE a board with that same button',
            bg: TaskColorPairs[6].bg,
            color: TaskColorPairs[6].text,
            done: false,
            alottedTime: 5,
          },
          {
            text: 'Read intro about boards',
            bg: TaskColorPairs[5].bg,
            color: TaskColorPairs[5].text,
            done: true,
            alottedTime: 5,
          },
        ],
      },
      {
        title: 'This app gives you columns.....',
        tasks: [
          {
            text: 'Click "MENU" to the right of board title at the top',
            bg: TaskColorPairs[1].bg,
            color: TaskColorPairs[1].text,
            done: false,
            alottedTime: 10,
          },
          {
            text: 'Click "EDIT" from the dropdown',
            bg: TaskColorPairs[1].bg,
            color: TaskColorPairs[1].text,
            done: false,
            alottedTime: 10,
          },
          {
            text: 'You see the view changed a bit..',
            bg: TaskColorPairs[1].bg,
            color: TaskColorPairs[1].text,
            done: false,
            alottedTime: 10,
          },
          {
            text: 'Try dragging and dropping a column onto another one..',
            bg: TaskColorPairs[1].bg,
            color: TaskColorPairs[1].text,
            done: false,
            alottedTime: 10,
          },
          {
            text: '(DRAG & DROP: click and hold, move cursor while holding, release)',
            bg: TaskColorPairs[1].bg,
            color: TaskColorPairs[1].text,
            done: false,
            alottedTime: 10,
          },
          {
            text: 'You can re-order columns as you like using drag & drop',
            bg: TaskColorPairs[0].bg,
            color: TaskColorPairs[0].text,
            done: false,
            alottedTime: 10,
          },
          {
            text: 'ADD a column NEXT TO ANOTHER by clicking + button to the right ',
            bg: TaskColorPairs[1].bg,
            color: TaskColorPairs[1].text,
            done: false,
            alottedTime: 5,
          },
          {
            text: 'DELETE a column by click x to the right',
            bg: TaskColorPairs[1].bg,
            color: TaskColorPairs[1].text,
            done: false,
            alottedTime: 5,
          },
          {
            text: 'Simple!',
            bg: TaskColorPairs[1].bg,
            color: TaskColorPairs[1].text,
            done: false,
            alottedTime: 5,
          },
        ],
      },
      {
        title: 'This app only takes your tasks...',
        tasks: [
          {
            text: 'ADD NEW TASK using + button at the column top',
            bg: TaskColorPairs[2].bg,
            color: TaskColorPairs[2].text,
            done: false,
            alottedTime: 10,
          },
          {
            text: 'Mark as done using checkbox',
            bg: TaskColorPairs[2].bg,
            color: TaskColorPairs[2].text,
            done: false,
            alottedTime: 10,
          },
          {
            text: 'Use DRAG & DROP to change order of tasks',
            bg: TaskColorPairs[2].bg,
            color: TaskColorPairs[2].text,
            done: false,
            alottedTime: 10,
          },
          {
            text: 'To edit text of a task, click the task, edit text and press save',
            bg: TaskColorPairs[2].bg,
            color: TaskColorPairs[2].text,
            done: false,
            alottedTime: 10,
          },
          {
            text: 'To edit color of a task, click the task and use paint bucket',
            bg: TaskColorPairs[2].bg,
            color: TaskColorPairs[2].text,
            done: false,
            alottedTime: 30,
          },
          {
            text: 'Notice another paint bucket icon at the top of a column',
            bg: TaskColorPairs[4].bg,
            color: TaskColorPairs[4].text,
            done: false,
            alottedTime: 30,
          },
          {
            text: 'You can click it and it will set default new task color in that column',
            bg: TaskColorPairs[7].bg,
            color: TaskColorPairs[7].text,
            done: false,
            alottedTime: 30,
          },
          {
            text: 'So you can easily add many tasks of that color',
            bg: TaskColorPairs[8].bg,
            color: TaskColorPairs[8].text,
            done: false,
            alottedTime: 30,
          },
        ],
      },
      {
        title: 'Enjoy using simple, no-nonsense task boards',
        tasks: [
          {
            text: 'Feel free to delete this welcome board using "MENU" dropdown to the right of board title and make your own',
            bg: TaskColorPairs[6].bg,
            color: TaskColorPairs[6].text,
            done: false,
            alottedTime: 10,
          },
          {
            text: 'You can easily line up similar tasks in a column',
            bg: TaskColorPairs[3].bg,
            color: TaskColorPairs[3].text,
            done: false,
            alottedTime: 10,
          },
          {
            text: 'You can just as easily make many of such columns, all held together in one board',
            bg: TaskColorPairs[3].bg,
            color: TaskColorPairs[3].text,
            done: false,
            alottedTime: 10,
          },
          {
            text: 'On top of that, you can simply drag & drop these columns around to order them as you please',
            bg: TaskColorPairs[3].bg,
            color: TaskColorPairs[3].text,
            done: false,
            alottedTime: 10,
          },
          {
            text: 'It works for tasks, too, simply drag & drop to order them..',
            bg: TaskColorPairs[3].bg,
            color: TaskColorPairs[3].text,
            done: false,
            alottedTime: 10,
          },
          {
            text: 'You can easily select a board and add / edit / delete any columns or tasks in it',
            bg: TaskColorPairs[3].bg,
            color: TaskColorPairs[3].text,
            done: false,
            alottedTime: 10,
          },
          {
            text: 'Simple, useful, no-nonsense board with task columns!',
            bg: TaskColorPairs[2].bg,
            color: TaskColorPairs[2].text,
            done: false,
            alottedTime: 30,
          },
          {
            text: 'Glad to have you onboard, enjoy Vilzai boards!',
            bg: TaskColorPairs[8].bg,
            color: TaskColorPairs[8].text,
            done: false,
            alottedTime: 10,
          },
        ],
      },
    ],
  },
  {
    id: Math.random() * Math.random(),
    title: 'Example board 2: writing dissertation',
    columns: [
      {
        title: 'Prepare all the materials',
        tasks: [
          {
            text: 'Prepare slots for links, source quotations, pdf files.',
            bg: TaskColorPairs[0].bg,
            color: TaskColorPairs[0].text,
            done: false,
            alottedTime: 10,
          },
          {
            text: 'Get all physical books and all articles in one place',
            bg: TaskColorPairs[0].bg,
            color: TaskColorPairs[0].text,
            done: false,
            alottedTime: 30,
          },
        ],
      },
      {
        title: 'Get started',
        tasks: [
          {
            text: 'Brainstorm a staircase of ideas, where each one is a step towards the next idea',
            bg: TaskColorPairs[1].bg,
            color: TaskColorPairs[1].text,
            done: false,
            alottedTime: 30,
          },
          {
            text: 'Write initial chapter titles',
            bg: TaskColorPairs[1].bg,
            color: TaskColorPairs[1].text,
            done: false,
            alottedTime: 30,
          },
          {
            text: 'Write core idea per chapter title and expand on it just enough to know what it is about',
            bg: TaskColorPairs[8].bg,
            color: TaskColorPairs[8].text,
            done: false,
            alottedTime: 60,
          },
          {
            text: 'Go over the logical, consequential flow of all chapters, see that it all holds up as single, consistent line',
            bg: TaskColorPairs[1].bg,
            color: TaskColorPairs[1].text,
            done: false,
            alottedTime: 60,
          },
          {
            text: 'Go over it all and note all the biggest time-sinks and time-saves that are likely',
            bg: TaskColorPairs[1].bg,
            color: TaskColorPairs[1].text,
            done: false,
            alottedTime: 60,
          },
        ],
      },
    ],
  },
  {
    id: Math.random() * Math.random(),
    title: 'Example board 3: organize "menial" tasks',
    columns: [
      {
        title:
          'Get a list of categories - any and TYPES of "menial" tasks that, if not done, hinder things.',
        tasks: [
          {
            text: 'Get a board that can be put on the fridge',
            bg: TaskColorPairs[5].bg,
            color: TaskColorPairs[5].text,
            done: false,
            alottedTime: 36,
          },
          {
            text: 'Brainstorm all the TYPES of menial things that need to be done, make notes about types',
            bg: TaskColorPairs[5].bg,
            color: TaskColorPairs[5].text,
            done: false,
            alottedTime: 36,
          },
          {
            text: 'Note down all the types of menial things',
            bg: TaskColorPairs[5].bg,
            color: TaskColorPairs[5].text,
            done: false,
            alottedTime: 36,
          },
          {
            text: 'Make sure it is really every type, nothing missing',
            bg: TaskColorPairs[5].bg,
            color: TaskColorPairs[5].text,
            done: false,
            alottedTime: 36,
          },
          {
            text: 'Make sure no type is extra, nothing unnecessary',
            bg: TaskColorPairs[5].bg,
            color: TaskColorPairs[5].text,
            done: false,
            alottedTime: 36,
          },
        ],
      },
      {
        title:
          'Associate each type with a time and place where you can line up such tasks together',
        tasks: [
          {
            text: 'Kitchen',
            bg: TaskColorPairs[0].bg,
            color: TaskColorPairs[0].text,
            done: false,
            alottedTime: 30,
          },
          {
            text: 'WC',
            bg: TaskColorPairs[0].bg,
            color: TaskColorPairs[0].text,
            done: false,
            alottedTime: 30,
          },
          {
            text: 'Living room',
            bg: TaskColorPairs[0].bg,
            color: TaskColorPairs[0].text,
            done: false,
            alottedTime: 30,
          },
        ],
      },
      {
        title:
          'Look at it as a whole and see how it could be optimized - to be that much less of a hassle',
        tasks: [
          {
            text: 'What types of menial tasks are in wrong order, causing most friction?',
            bg: TaskColorPairs[6].bg,
            color: TaskColorPairs[6].text,
            done: false,
            alottedTime: 30,
          },
          {
            text: 'What types of menial tasks are completely redundant?',
            bg: TaskColorPairs[0].bg,
            color: TaskColorPairs[0].text,
            done: false,
            alottedTime: 30,
          },
          {
            text: 'What types of menial tasks are vitally unskippable and missing?',
            bg: TaskColorPairs[3].bg,
            color: TaskColorPairs[3].text,
            done: false,
            alottedTime: 30,
          },
        ],
      },
    ],
  },
];

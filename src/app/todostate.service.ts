// import {Subject} from 'rxjs';
// import {ActionTypes} from './actions';
// // import {Note} from '../note-card/note-card.component';

// interface InitialState {
//   notes: Array<Object>;
// }

// let state: InitialState = {
//   notes: [],
// };

// interface Event {
//   type: String;
//   payload?: Object;
// }

// export const store = new Subject<InitialState>();
// export const eventDispatcher = new Subject<Event>();

// eventDispatcher.subscribe((data: Event) => {
//   switch (data.type) {
//     case ActionTypes.GET_NOTES:
//       store.next(state);
//       break;

//     case ActionTypes.CREATE_NOTE:
//       state = {
//         notes: [...state.notes, data.payload],
//       };
//       store.next(state);
//       break;

//     case ActionTypes.DELETE_NOTE:
//       const {notes} = state;
//       const id = data.payload;
//       const updatedNotes = notes.filter((note: Note) => note.id !== id);
//       state = {
//         notes: updatedNotes
//       };
//       store.next(state);
//       break;
//     default:
//       break;
//   }
// });
// // import { Injectable } from "@angular/core";
// // import { Observable } from "rxjs";
// // import { StateService } from "./staterxjs";

// // interface TodoState {
// //   todos: [];
// //   selectedTodoId: number;
// // }

// // const initialState: TodoState = {
// //   todos: [],
// //   selectedTodoId: undefined
// // };

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class TodosStateService extends StateService<TodoState>{
// //   todos$: Observable<Todo[]> = this.select(state => state.todos);

// //   selectedTodo$: Observable<Todo> = this.select((state) => {
// //     return state.todos.find((item) => item.id === state.selectedTodoId);
// //   });

// //   constructor() {
// //     super(initialState);
// //   }

// //   addTodo(todo: Todo) {
// //     this.setState({todos: [...this.state.todos, todo]})
// //   }
 
// //   selectTodo(todo: Todo) {
// //     this.setState({ selectedTodoId: todo.id });
// //   }
// // }
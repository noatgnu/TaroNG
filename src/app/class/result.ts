export class Result {
  database: string;
  columns: string[];
  constructor(database: string, result: {}, columns: string[]) {
    this.database = database;
    this.result = result;
    this.columns = columns;
  }

  result: {};
}

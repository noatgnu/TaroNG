export class Query {
  constructor(database: string, peptideSeq: string, startCodon: string, endCodon: string, pageOffset: number) {
    this.database = database;
    this.peptideSeq = peptideSeq;
    this.startCodon = startCodon;
    this.endCodon = endCodon;
    this.pageOffset = pageOffset;
  }
  database: string;
  peptideSeq: string;
  startCodon: string;
  endCodon: string;
  pageOffset: number;
  result: {};
}

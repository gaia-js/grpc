// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportMongoTestDeleted from '../../../app/model/mongo_test_deleted';
import ExportSolutionTag from '../../../app/model/solution_tag';
import ExportStudentPaperDeleted from '../../../app/model/student_paper_deleted';

declare module 'egg' {
  interface IModel {
    MongoTestDeleted: ReturnType<typeof ExportMongoTestDeleted>;
    SolutionTag: ReturnType<typeof ExportSolutionTag>;
    StudentPaperDeleted: ReturnType<typeof ExportStudentPaperDeleted>;
  }
}

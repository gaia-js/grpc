// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHomeworkDo from '../../../app/object/homework_do';
import ExportHomeworkDoQuestion from '../../../app/object/homework_do_question';
import ExportHomeworkStudentUrge from '../../../app/object/homework_student_urge';
import ExportMongoTest from '../../../app/object/mongo_test';

declare module 'egg' {
  interface IAppObject {
    HomeworkDo: ObjectCreator<ExportHomeworkDo>;
    HomeworkDoQuestion: ObjectCreator<ExportHomeworkDoQuestion>;
    HomeworkStudentUrge: ObjectCreator<ExportHomeworkStudentUrge>;
    MongoTest: ObjectCreator<ExportMongoTest>;
  }
}

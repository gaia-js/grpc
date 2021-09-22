// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHomeworkDo from '../../../../app/service/model/homework_do';
import ExportHomeworkDoQuestion from '../../../../app/service/model/homework_do_question';
import ExportHomeworkStudentUrge from '../../../../app/service/model/homework_student_urge';
import ExportMongoTest from '../../../../app/service/model/mongo_test';
import ExportSolutionTag from '../../../../app/service/model/solution_tag';
import ExportStudentPaper from '../../../../app/service/model/student_paper';

declare module 'egg' {
  interface IAppServiceModel {
    homeworkDo: ExportHomeworkDo;
    homeworkDoQuestion: ExportHomeworkDoQuestion;
    homeworkStudentUrge: ExportHomeworkStudentUrge;
    mongoTest: ExportMongoTest;
    solutionTag: ExportSolutionTag;
    studentPaper: ExportStudentPaper;
  }
}

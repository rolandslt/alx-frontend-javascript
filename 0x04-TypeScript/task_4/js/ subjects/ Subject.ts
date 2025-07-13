// <reference path="./Teacher.ts" /> ////

namespace Subjects {
  export class Subject {
    private _teacher?: Teacher;

    set teacher(teacher: Teacher) {
      this._teacher = teacher;
    }

    get teacher(): Teacher | undefined {
      return this._teacher;
    }
  }
}
export interface FetchEmployeesUrlParams {
  name?: string;
  position?: Position[];
  gender?: Gender[];
  stack?: Stack[];
}

export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
}

export enum Position {
  FRONTEND = 'Frontend',
  BACKEND = 'Backend',
  ANALYST = 'Analyst',
  MANAGER = 'Manager',
  DESIGNER = 'Designer',
}

export enum Stack {
  CSHARP = 'CSharp',
  REACT = 'React',
  JAVA = 'Java',
  PHP = 'PHP',
  FIGMA = 'Figma',
  WORD = 'Word',
}

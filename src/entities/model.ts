export interface Employee {
  id: number;
  name: string;
  photo: string;
  phone: string;
  gender: Gender;
  position: Position;
  stack: Stack[];
  birthdate: string;
  dateOfEmployment: string;
}

enum Gender {
  MALE = 'Мужчина',
  FEMALE = 'Женщина',
}

enum Position {
  FRONTEND = 'Frontend-разработчик',
  BACKEND = 'Backend-разработчик',
  ANALYST = 'Аналитик',
  MANAGER = 'Менеджер',
  DESIGNER = 'Дизайнер',
}

enum Stack {
  CSHARP = 'C#',
  REACT = 'React',
  JAVA = 'Java',
  PHP = 'PHP',
  FIGMA = 'Figma',
  WORD = 'Word',
}

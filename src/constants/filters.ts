export const FILTER_NAMES = ['position', 'gender', 'stack'];

export const FILTER_OPTION_NAMES: Record<string, Record<string, string>> = {
  position: {
    Frontend: 'Frontend-разработчик',
    Backend: 'Backend-разработчик',
    Analyst: 'Аналитик',
    Manager: 'Менеджер',
    Designer: 'Дизайнер',
  },
  gender: {
    Male: 'Мужчина',
    Female: 'Женщина',
  },
  stack: {
    CSharp: 'C#',
    React: 'React',
    Java: 'Java',
    PHP: 'PHP',
    Figma: 'Figma',
    Word: 'Word',
  },
};

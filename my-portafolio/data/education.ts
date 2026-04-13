export interface Education {
  periodKey: string;
  titleKey: string;
  institutionKey: string;
  descKey: string;
}

export const educationList: Education[] = [
  {
    periodKey: "edu.1.period",
    titleKey: "edu.1.title",
    institutionKey: "edu.1.institution",
    descKey: "edu.1.desc",
  },
  {
    periodKey: "",
    titleKey: "edu.2.title",
    institutionKey: "",
    descKey: "edu.2.desc",
  },
  {
    periodKey: "",
    titleKey: "edu.3.title",
    institutionKey: "",
    descKey: "edu.3.desc",
  },
];
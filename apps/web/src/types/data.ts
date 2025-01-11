export type Industry = {
  id: number;
  name: string;
  label: string;
};

export type Classification = {
  id: number;
  title: string;
};

export type SubClassification = {
  id: number;
  title: string;
  classificationId: number;
};

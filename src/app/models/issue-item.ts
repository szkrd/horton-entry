interface IssueLabel {
  name: string;
  color: string;
}

export interface IssueItem {
  id: number;
  title: string;
  createdAt: Date;
  userName: string; // user.login
  labels: IssueLabel[];
  body: string; // gh flavoured markdown
}
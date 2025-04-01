export type TodoType = {
  _id: string; // ObjectId를 문자열로 변환
  userId: string;
  content: string;
  isDone: boolean;
  createdAt: string;
};

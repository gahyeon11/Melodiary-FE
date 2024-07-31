export interface INotification {
    id: number;
    content: string;
    diaryId?: number;
    category: string;
    date: string;
}
export interface ArtObject {
    id: number;
    title: string;
    artist: string;
    image?: string | undefined;
    date: number;
    api: string;
}
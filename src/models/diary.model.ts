interface IMusic {
  music_url: string;
  title: string;
  artist: string;
}

interface IWeather {
  location: string;
  icon: string;
  avg_temperature: number;
}

export interface IMates {
  background_color: string;
  content: string;
  created_at: string;
  emoji: string;
  id: number;
  like_count: number;
  mood: string;
  privacy: string;
  title: string;
  user_id: number;
  img_urls: string[] | null;
}

export interface IExplore {
  background_color: string;
  content: string;
  created_at: string;
  emoji: string;
  id: number;
  like_count: number;
  mood: string;
  privacy: string;
  title: string;
  user_id: number;
  img_urls: string[] | null;
}

export interface IDiary {
  id: number;
  user_id: number;
  like_count: number | null;
  created_at: string | null;
  body: {
    title: string;
    content: string;
    img_urls: string[] | null;
    mood: string | null;
    emoji: string | null;
    privacy: "public" | "mate" | "private";
    music: IMusic | null;
    weather: IWeather | null;
    background_color: string | null;
  };
  liked: boolean;
}
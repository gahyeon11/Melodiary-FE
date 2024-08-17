export interface IMusic {
  title: string;
  artist: string;
  music_url: string;
}

export interface IWeather {
  icon: string;
  location: string;
  avg_temperature: number;
}

export interface IDiary {
  id: number;
  user_profile: {
    user_id: number;
    profile_img_url: string;
    nickname: string;
  };
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

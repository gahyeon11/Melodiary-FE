export interface IMusic {
  title: string;
  artist: string;
  url: string;
}

export interface IWeather {
  icon: string;
  location: string;
  avg_temperature: number;
}

export interface IDiaryBody {
  title: string;
  content: string;
  img_urls: string[];
  mood: string;
  emoji: string;
  privacy: string;
  music: IMusic;
  weather: IWeather;
  background_color: string;
}

export interface IDiary {
  id: number;
  user_id: string;
  like_count: number;
  created_at: string;
  body: IDiaryBody;
}

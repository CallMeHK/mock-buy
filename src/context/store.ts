export interface IStore {
    count: number;
    word: string;
    thing: Reddit;
  }
  
  export interface Reddit {
    good: boolean;
    subreddits: string[];
  }
  
  let store: IStore = {
    count: 1,
    word: "yeet",
    thing: { good: false, subreddits: ["nba", "funny", "dankmemes"] }
  };
  
  export default store;
export interface ProfileChanged {
  profile: Profile;
}

export interface Profile {
  username: string;
  avatar: string;
  repos: number;
  stars: number;
  followers: number;
  orgs: number;
  website: string;
}

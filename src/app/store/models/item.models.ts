export interface Item {
  id: number | string;
  deleted?: boolean;
  by: string;
  time: number;
  dead?: boolean;
}

export interface Job extends Item {
  type: 'job';
  title: string;
}

export interface Story extends Item {
  type: 'story';
  text: string;
  url: string;
  score: number;
  title: string;
  descendants: number;
}

export interface Comment extends Item {
  type: 'comment';
  text: string;
  parent: number;
  kids: Array<number>;
}

export interface Poll extends Item {
  type: 'poll';
  text: string;
  title: string;
  descendants: number;
  parts: Array<number>;
}

export interface Pollopt extends Item {
  type: 'pollopt';
  poll: number;
  score: number;
}

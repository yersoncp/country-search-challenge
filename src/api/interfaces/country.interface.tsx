export interface CountryItem {
  name: string;
  capital: string;
  code: string;
  currency: string;
  emoji: string;
  continent: {
    code: string;
    name: string;
  }
  languages: {
    code: string;
    name: string;
    native: string;
    rtl: boolean;
  }[]
}

export interface CountryFilterInput {
  code?: {
    eq: string;
  }
  continent?: {
    in: string[];
  }
  currency?: {
    in: string[];
  }
  name?: {
    regex: string;
  }
}
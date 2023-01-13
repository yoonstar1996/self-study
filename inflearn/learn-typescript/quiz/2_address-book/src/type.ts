interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

enum PhoneType {
  Home = "home",
  office = "office",
  studio = "studio",
}

export { PhoneNumberDictionary, Contact, PhoneType };

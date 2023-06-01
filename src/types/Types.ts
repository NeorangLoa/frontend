export interface EquipmentData {
  Type:    string;
  Name:    string;
  Icon:    string;
  Grade:   string;
  Tooltip: string;
}


export interface CardData {
  Cards:   Card[];
  Effects: CardEffect[];
}

export interface Card {
  Slot:       number;
  Name:       string;
  Icon:       string;
  AwakeCount: number;
  AwakeTotal: number;
  Grade:      string;
  Tooltip:    string;
}

export interface CardEffect {
  Index:     number;
  CardSlots: number[];
  Items:     CardItem[];
}

export interface CardItem {
  Name:        string;
  Description: string;
}



export interface GemData {
  Gems:    Gem[];
  Effects: GemEffect[];
}

export interface GemEffect {
  GemSlot:     number;
  Name:        string;
  Description: string;
  Icon:        string;
  Tooltip:     string;
}

export interface Gem {
  Slot:    number;
  Name:    string;
  Icon:    string;
  Level:   number;
  Grade:   string;
  Tooltip: string;
}


export interface Userinfo {
  CharacterImage:     string;
  ExpeditionLevel:    number;
  PvpGradeName:       string;
  TownLevel:          number;
  TownName:           string;
  Title:              string;
  GuildMemberGrade:   string;
  GuildName:          string;
  UsingSkillPoint:    number;
  TotalSkillPoint:    number;
  Stats:              Stat[];
  Tendencies:         Tendency[];
  ServerName:         string;
  CharacterName:      string;
  CharacterLevel:     number;
  CharacterClassName: string;
  ItemAvgLevel:       string;
  ItemMaxLevel:       string;
}

export interface Stat {
  Type:    string;
  Value:   string;
  Tooltip: string[];
}

export interface Tendency {
  Type:     string;
  Point:    number;
  MaxPoint: number;
}
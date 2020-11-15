export interface AssetItem {
        id: string;
        rank: string;
        symbol: string;
        name: string;
        supply: string;
        maxSupply: string;
        marketCapUsd: string;
        volumeUsd24Hr: string;
        priceUsd: string;
        changePercent24Hr: string;
        vwap24Hr: string;
}

export interface Assets {
    data: AssetItem[];
}

export interface History{
    data: HistoryItem[];
}

export interface HistoryItem{
    priceUsd: number;
    time: number;
    circulatingSupply: number;
    date: Date;
}

export enum Interval {
    m1,
    m5,
    m15,
    m30,
    h1,
    h2,
    h6,
    h12,
    d1
}

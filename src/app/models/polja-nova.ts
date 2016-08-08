export class Polja {
    sifPoljaId: number;
    nazivPolja: string;
    ekranskiNazivPolja: string;
    validacija: {
        obavezno: boolean;
        tipPolja: string,
        min: number,
        max: number,
        format: string
    }[];
    rb: number;
    tipKontrole: string; // input, select
    refTabelaCc: string;
    definicijaOrigPolja: string;
    veznoPolje: string;
}
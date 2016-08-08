export class Polja<T> {
    vrednost: T;
    sifPoljaId: number;
    nazivPolja: string;
    ekranskiNazivPolja: string;
    validacija: {
        obavezno: boolean;
        tipPolja: string,
        min: number,
        max: number,
        format: string
    };
    rb: number;
    tipKontrole: string; // input, select
    refTabelaCc: string;
    definicijaOrigPolja: string;
    veznoPolje: string;

    constructor(options: {
        vrednost?: T,
        sifPoljaId?: number,
        nazivPolja?: string,
        ekranskiNazivPolja?: string,
        validacija?: {
            obavezno?: string,
            tipPolja?: string,
            min?: number,
            max?: number,
            format?: string
        },
        rb?: number,
        refTabelaCc?: string,
        definicijaOrigPolja?: string,
        veznoPolje?: string,
        tipKontrole?: string
    } = {}){
        this.vrednost = options.vrednost;
        this.sifPoljaId = options.sifPoljaId || 0;
        this.nazivPolja = options.nazivPolja || '';
        this.ekranskiNazivPolja = options.ekranskiNazivPolja === '' ? options.nazivPolja : options.ekranskiNazivPolja;
        this.validacija.obavezno = !!options.validacija.obavezno;
        this.validacija.max = options.validacija.max || null;
        this.validacija.min = options.validacija.min || null;
        this.validacija.format = options.validacija.format || null;
        this.rb = options.rb === undefined ? 1 : options.rb;
        this.definicijaOrigPolja = options.definicijaOrigPolja || '';
        this.refTabelaCc = options.refTabelaCc || '';
        this.veznoPolje = options.veznoPolje || '';
        this.tipKontrole = options.tipKontrole || '';

    }
}
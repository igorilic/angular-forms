import { Polja } from './polja';

export class PoljaInput extends Polja<string> {
    tipKontrole = 'input';
    tip: string; // text, email, url, itd

    constructor(options: {} = {}) {
        super(options);
        this.tip = options['tip'] || ''
    }
}
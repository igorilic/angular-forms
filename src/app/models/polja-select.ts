import { Polja } from './polja';

export class PoljaSelect extends Polja<string> {
    tipKontrole = 'select';
    options: { key: string, value: string}[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}
import { NgModule } from '@angular/core';
import { Ng2Fone } from './ng2-fone';
export function Ng2FoneFactory() {
    return new Ng2Fone();
};
@NgModule({
    providers: [
        {
            provide: Ng2Fone,
            useFactory: Ng2FoneFactory
        }
    ]
})
export class Ng2FoneModule { }
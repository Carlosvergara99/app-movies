import { NgModule } from '@angular/core';

import { CardModule } from 'primeng/card';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MessagesModule } from 'primeng/messages';
import { KnobModule } from 'primeng/knob';

import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  exports: [
    CardModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    MenubarModule,
    MessagesModule,
    KnobModule,
    ButtonModule
  ]
})
export class PrimeNgModule { }

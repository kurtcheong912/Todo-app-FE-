import { NgModule } from "@angular/core";
// Angular meterial imports
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { PopUpComponent } from './pop-up/pop-up.component';
import { MatIconModule } from '@angular/material/icon';

/////
@NgModule({

    imports: [
        MatGridListModule,
        MatListModule,
        MatDialogModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatToolbarModule,
        MatIconModule
    ],
    exports: [
        MatFormFieldModule,
        MatGridListModule,
        MatListModule,
        MatDialogModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatToolbarModule,
        MatDatepickerModule,
        MatIconModule
      ],
    declarations: [
      PopUpComponent
    ]

})
export class MaterialModule { }
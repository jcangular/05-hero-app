import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Hero } from '../../interfaces/heros.interfaces';

@Component({
    selector: 'app-confirm',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

    constructor(
        private dialogRef: MatDialogRef<ConfirmComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Hero
    ) { }

    ngOnInit(): void {
    }

    public accept(): void {
        this.dialogRef.close(true);
    }

}

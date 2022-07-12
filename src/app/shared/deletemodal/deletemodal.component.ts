import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-deletemodal',
  templateUrl: './deletemodal.component.html',
  styleUrls: ['./deletemodal.component.css']
})
export class DeletemodalComponent {

	constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
		public dialogRef: MatDialogRef<DeletemodalComponent>,
		) {}


	no(): void {
		this.dialogRef.close();
	}

	yes() {
		this.dialogRef.close(this.data);
	}

}

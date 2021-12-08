import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {GistsApiService} from "../service/gists-api.service";

@Component({
  selector: 'app-file-content-dialog',
  templateUrl: './file-content-dialog.component.html',
  styleUrls: ['./file-content-dialog.component.scss']
})
export class FileContentDialogComponent implements OnInit {

  public textData: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private gistService: GistsApiService) { }

  ngOnInit(): void {
    this.gistService.getGistContent(this.data.fileUrl)
    .subscribe( result => this.textData = result);
  }

}

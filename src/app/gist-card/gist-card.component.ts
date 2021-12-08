import {Component, Input, OnInit} from '@angular/core';
import {Gist} from "../model/Gist";
import {GistFile} from "../model/GistFile";
import {FileTypeService} from "../service/file-type.service";
import {GistsApiService} from "../service/gists-api.service";
import {MatDialog} from "@angular/material/dialog";
import {FileContentDialogComponent} from "../file-content-dialog/file-content-dialog.component";

@Component({
  selector: 'app-gist-card',
  templateUrl: './gist-card.component.html',
  styleUrls: ['./gist-card.component.scss']
})
export class GistCardComponent implements OnInit {


  @Input() public gist?: Gist;

  public gistFiles: GistFile[] = [];

  public filesInfo: { url: any, extension: any, type: string }[] = [];

  public avatarInfoForks: { url: any, username: any }[] = [];

  constructor(public fileTypeService: FileTypeService, private gistsApiService: GistsApiService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.initFiles(this.gist);
    this.initGistForks();
  }

  private initFiles(gist?: Gist): void {
    for (let file in this.gist?.files) {
      let fileInfo = this.gist?.files[file];
      this.filesInfo.push({
        extension: fileInfo.filename.split('.').pop(),
        type: fileInfo.type,
        url: fileInfo.raw_url
      });
    }
  }

  public initGistForks(): void {
    this.gistsApiService.getGistForks(this.gist?.forks_url || '')
    .subscribe( rez =>
    {
      let index = 0;
      for (const fork of rez) {
        index++;
        this.avatarInfoForks.push({
          url: fork.owner.avatar_url,
          username: fork.owner.login
        });
        if(index > 2) {
          break;
        }
      }
    });
  }

  public openDialogWithFileContent(fileInfo: any): void {
    this.dialog.open(FileContentDialogComponent, {
      data: {fileUrl: fileInfo.url}
      });
  }

}

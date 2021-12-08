import {Component, Input, OnInit} from '@angular/core';
import {Gist} from "../model/Gist";
import {GistFile} from "../model/GistFile";
import {FileTypeService} from "../service/file-type.service";

@Component({
  selector: 'app-gist-card',
  templateUrl: './gist-card.component.html',
  styleUrls: ['./gist-card.component.scss']
})
export class GistCardComponent implements OnInit {


  @Input() public gist?: Gist;

  public gistFiles: GistFile[] = [];

  public extensions: string[] = [];



  constructor(public fileTypeService: FileTypeService) { }

  ngOnInit(): void {
    this.initFiles(this.gist);
  }

  private initFiles(gist?: Gist): void {
    for (let file in this.gist?.files) {
      let fileInfo = this.gist?.files[file];
      this.extensions.push(fileInfo.filename.split('.').pop());
    }
  }

}

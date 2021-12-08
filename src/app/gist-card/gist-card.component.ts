import {Component, Input, OnInit} from '@angular/core';
import {Gist} from "../model/Gist";
import {GistFile} from "../model/GistFile";

@Component({
  selector: 'app-gist-card',
  templateUrl: './gist-card.component.html',
  styleUrls: ['./gist-card.component.scss']
})
export class GistCardComponent implements OnInit {

  @Input() public gist?: Gist;

  public gistFiles: GistFile[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let file in this.gist?.files) {
      this.gistFiles.push(this.gist?.files[file]);
    }
  }

}

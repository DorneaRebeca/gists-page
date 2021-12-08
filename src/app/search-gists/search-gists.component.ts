import { Component, OnInit } from '@angular/core';
import {GistsApiService} from "../service/gists-api.service";
import {Gist} from "../model/Gist";

@Component({
  selector: 'app-search-gists',
  templateUrl: './search-gists.component.html',
  styleUrls: ['./search-gists.component.scss']
})
export class SearchGistsComponent {

  public searchUsername?: string;

  public gists: Gist[] = [];

  constructor(private gistsApiService: GistsApiService) { }

  public searchGists(): void {
      this.gistsApiService.getPublicGistsForUsername(this.searchUsername? this.searchUsername : '').subscribe(
        data => {
          this.gists = data;
        }
      );
  }

}

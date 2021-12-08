import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileTypeService {
  private DEFAULT_IMG: string = 'https://icon-library.com/images/empty-icon/empty-icon-25.jpg';

  public fileExtensionDictionary: { [key: string]: string } = {
    txt : "https://key0.cc/images/preview/2090813_6820f31c52ca6fb427deb69a6c56b6c2.png",
    js: 'https://www.clipartmax.com/png/full/470-4707396_javascript-icon-html-css-js-icons.png',
    css: 'https://cdn.iconscout.com/icon/free/png-512/css-131-722685.png',
    java: 'https://image.flaticon.com/icons/png/512/226/226777.png'
  };

  constructor() { }


  public getIconLinkForExtension(extension: string): any {
   let icon = this.fileExtensionDictionary[extension];
   if(icon) {
     return icon;
   }
   return this.DEFAULT_IMG
  }
}

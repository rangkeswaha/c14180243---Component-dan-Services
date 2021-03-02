import { Injectable } from '@angular/core';

@Injectable()
export class GlobalvarService {

  constructor() { }

 private Data = [{
    judul : 'Pecinta anjing dan kucing',
    isi : 'kasi makan jam 10 pagi',
    tanggal : '14 Maret 2021',
    favorite : "yes"
  }];

  public getData(){
    return this.Data;
  }

  public setData(databaru){
    this.Data = databaru;
  }

}
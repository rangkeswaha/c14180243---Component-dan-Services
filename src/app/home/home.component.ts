import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute,
  public globalvar: GlobalvarService) {
    this.datadariglob = this.globalvar.getData();
    this.datatemp = this.datadariglob;
   }

  cek = false;

  datadariglob : any;
  judul = "";
  isi = "";
  mergetgl = "";
  datatambah : any;
  datatemp : any;

  tambahnote(){
    this.datatambah = {
      judul : this.judul,
      isi : this.isi,
      tanggal : this.mergetgl,
      favorite : "no"
    }
    this.datatemp.push(this.datatambah);
    this.globalvar.setData(this.datatemp);
    this.datadariglob = this.globalvar.getData();
    // this.globalvar.setnote(this.judul, this.isi, this.mergetgl);

    this.cek = true;
  }

  ngOnInit() {
    this.cek = false;
  }

}
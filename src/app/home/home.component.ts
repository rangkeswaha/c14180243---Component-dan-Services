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

   }

  cek = false;

  judul = "";
  isi = "";
  tanggal = "";
  bulan = "";
  tahun = "";
  mergetgl = "";

  tambahnote(){
    this.mergetgl = this.tanggal + " " + this.bulan + " " + this.tahun;
    this.globalvar.setnote(this.judul, this.bulan, this.mergetgl);

    this.cek = true;
  }

  ngOnInit() {
    this.cek = false;
  }

}
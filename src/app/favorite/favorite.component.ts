import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GlobalvarService } from "../globalvar.service";

@Component({
  selector: "app-favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.css"]
})
export class FavoriteComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public globalvar: GlobalvarService
  ) {
    this.datadariglob = this.globalvar.getData();
    this.datatemp = this.datadariglob;
  }

  datadariglob: any;
  judul = "";
  isi = "";
  tanggal = "";
  datatambah: any;
  datatemp: any;

  ngOnInit() {}
}

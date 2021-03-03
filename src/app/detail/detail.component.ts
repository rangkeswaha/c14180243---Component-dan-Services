import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GlobalvarService } from "../globalvar.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
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

  btnfav() {}

  ngOnInit() {
    let judul = this.route.snapshot.paramMap.get("nama");
  }
}

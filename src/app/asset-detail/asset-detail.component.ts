import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.scss']
})
export class AssetDetailComponent implements OnInit {

  private id: string;

  constructor(private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.paramMap.get('id');
  }

}

import { Component, Input, OnInit } from '@angular/core';
import Track from '../../interfaces/Track';

@Component({
  selector: 'app-meta',
  templateUrl: './meta.component.html',
  styleUrls: ['./meta.component.scss']
})
export class MetaComponent implements OnInit {
  @Input('track') track: Track;

  constructor() {
  }

  ngOnInit() {
  }
}

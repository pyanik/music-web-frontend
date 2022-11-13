import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Page } from 'src/app/shared/model/page';
import { Album } from '../album/model/album';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  page!: Page<Album>;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getHomePageData();
  }

  getHomePageData() {
    this.getHomePage(0, 5);
  }

  onPageEvent(event: PageEvent) {
    this.getHomePage(event.pageIndex, event.pageSize);
  }

  private getHomePage(page: number, size: number) {
    this.homeService.getHomePageData(page, size)
    .subscribe(page => this.page = page);
  }
}
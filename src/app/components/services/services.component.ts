import { Component, OnInit } from '@angular/core';
import { Service } from '../../models/service.model';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  imports: [CommonModule]
})
export class ServicesComponent implements OnInit {
  services: Service[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.services = this.dataService.getServices();
  }

  scrollToContact() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
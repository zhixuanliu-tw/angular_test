import { Component, OnInit } from '@angular/core';
import { StaffMember } from '../../models/staff.model';
import { StaffDataService } from '../../services/staff-data.service';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {
  staff: StaffMember[] = [];
  isLoading: boolean = true;

  constructor(private staffDataService: StaffDataService) { }

  ngOnInit(): void {
    this.loadStaff();
  }

  loadStaff(): void {
    this.isLoading = true;
    this.staffDataService.getStaff(15).subscribe({
      next: (data) => {
        this.staff = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching staff data', err);
        this.isLoading = false;
      }
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactInfo } from '../../models/service.model';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports :[ReactiveFormsModule, CommonModule]
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  contactInfo: ContactInfo;
  isSubmitting = false;
  submitMessage = '';

  constructor(
    private fb: FormBuilder,
    private dataService: DataService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      service: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
    
    this.contactInfo = this.dataService.getContactInfo();
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitMessage = '';
      
      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false;
        this.submitMessage = 'Asante! Ujumbe wako umetumwa. Tutakupigia simu hivi karibuni.';
        this.contactForm.reset();
      }, 2000);
    } else {
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched(): void {
    Object.values(this.contactForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  openWhatsApp(): void {
    const phone = this.contactInfo.whatsapp.replace(/\s/g, '');
    const message = encodeURIComponent('Hujambo, nataka maelezo zaidi kuhusu mafunzo ya Tanzanite Skills Academy.');
    window.open(`https://wa.me/255${phone.substring(1)}?text=${message}`, '_blank');
  }

  sendEmail(): void {
    const subject = encodeURIComponent('Maelezo ya Mafunzo - Tanzanite Skills Academy');
    const body = encodeURIComponent('Hujambo,\n\nNataka maelezo zaidi kuhusu mafunzo yenu.\n\nAsante.');
    window.open(`mailto:${this.contactInfo.email}?subject=${subject}&body=${body}`, '_blank');
  }
}

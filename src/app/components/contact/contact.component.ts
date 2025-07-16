import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactInfo } from '../../models/service.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
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

  ngOnInit(): void {
  }

  onSubmit() {
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

  markFormGroupTouched() {
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      if (control) {
        control.markAsTouched();
      }
    });
  }

  openWhatsApp() {
    const phone = this.contactInfo.whatsapp.replace(/\s/g, '');
    const message = encodeURIComponent('Hujambo, nataka maelezo zaidi kuhusu mafunzo ya Tanzanite Skills Academy.');
    window.open(`https://wa.me/255${phone.substring(1)}?text=${message}`, '_blank');
  }

  sendEmail() {
    const subject = encodeURIComponent('Maelezo ya Mafunzo - Tanzanite Skills Academy');
    const body = encodeURIComponent('Hujambo,\n\nNataka maelezo zaidi kuhusu mafunzo yenu.\n\nAsante.');
    window.open(`mailto:${this.contactInfo.email}?subject=${subject}&body=${body}`, '_blank');
  }
}
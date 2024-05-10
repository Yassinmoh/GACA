import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { IntroComponent } from '../../components/intro/intro.component';
import { AccordionModule } from 'primeng/accordion';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import intlTelInput  from 'intl-tel-input';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AccordionModule,IntroComponent,CommonModule,ReactiveFormsModule,DropdownModule,NgxIntlTelInputModule,CalendarModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  // encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit ,AfterViewInit {

  constructor(private fb: FormBuilder){}

  // **** static data for dropdown ****
  clients: any[] = [
    { label: 'مصر', value: 1 },
    { label: 'الكويت', value: 2 },
    { label: 'قطر', value: 3 },
    { label: 'كندا', value: 4 },
  ];

  countries: any[] = [
    { name: 'مصر', code: '+20' },
    { name: 'الكويت', code: '+18' },
    { name: 'قطر', code: '+14' },
  ];

  nationalities: any[] = [
    { label: 'مصري', value: 1 },
    { label: 'كويتي', value: 2 },
    { label: 'قطري', value: 3 },
    { label: 'كندي', value: 4 },
  ];

  formData!: FormData;
  section1Form!: FormGroup;

  ngOnInit() {
    this.section1Form = this.fb.group({
      client: ['', Validators.required],
      clientName: ['', Validators.required],
      phone: ['', Validators.required],
      mail: ['', Validators.required],
      nationality: ['', Validators.required],
      ref: ['', Validators.required],
      dateOfBirth: ['', Validators.required]
    });


  }

   // **** Handle Phone Num With Country Code  ****

  ngAfterViewInit(): void {
    const phoneElementRef1 = document.getElementById('phone')
    const phoneElementRef2 = document.getElementById('phone2')
    if(phoneElementRef1){
      intlTelInput(phoneElementRef1 as HTMLInputElement,{
        initialCountry:'SA',
        separateDialCode:true,
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@22.0.2/build/js/utils.js",
      })
    }
    if(phoneElementRef2){
      intlTelInput(phoneElementRef2 as HTMLInputElement,{
        initialCountry:'SA',
        separateDialCode:true,
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@22.0.2/build/js/utils.js",
      })
    }
  }

  // submitSection1() {
  //   if (this.section1Form.valid) {
  //     this.formData = this.section1Form.value;

  //     console.log('Form data:', this.formData);
  //     this.section1Form.reset();
  //   } else {
  //     console.error('Form is invalid');
  //   }
  // }
}

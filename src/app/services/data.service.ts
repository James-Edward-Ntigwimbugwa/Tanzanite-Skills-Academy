import { Injectable } from '@angular/core';
import { Service, ContactInfo } from '../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getServices(): Service[] {
    return [
      {
        id: 1,
        title: 'Maendeleo Binfasi',
        description: 'Kukuza uongozi, ujasiri, na ujuzi wa kibinafsi kwa maisha bora.',
        icon: 'fas fa-user-graduate',
        color: '#4CAF50'
      },
      {
        id: 2,
        title: 'Usimamizi wa Fedha Binafsi',
        description: 'Jifunze jinsi ya kusimamia fedha zako, kuwekeza, na kujenga utajiri.',
        icon: 'fas fa-coins',
        color: '#FF9800'
      },
      {
        id: 3,
        title: 'Maendeleo ya Kitaaluma',
        description: 'Ongoza kiwango cha juu katika kazi yako na uimarishe ujuzi wako.',
        icon: 'fas fa-briefcase',
        color: '#2196F3'
      },
      {
        id: 4,
        title: 'Maendeleo ya Biashara',
        description: 'Anzisha na ukuze biashara yako kwa ujuzi wa kisasa wa kibiashara.',
        icon: 'fas fa-chart-line',
        color: '#9C27B0'
      },
      {
        id: 5,
        title: 'Maendeleo ya Teknolojia',
        description: 'Jifunze teknolojia za kisasa na ujuzi wa kidijitali wa wakati huu.',
        icon: 'fas fa-laptop-code',
        color: '#FF5722'
      }
    ];
  }

  getContactInfo(): ContactInfo {
    return {
      whatsapp: '0749 722 722',
      email: 'info@tanzaniteskills.ac.tz'
    };
  }
}
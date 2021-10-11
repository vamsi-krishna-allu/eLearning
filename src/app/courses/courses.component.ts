import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { LocalstorageService } from '../localstorage.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  //@Input() selectedCourse : string = '';
  content: any;
  panelOpenState = false;
  realestateCourses = REALESTATE_COURSES;
  mortgageCourses = MORTGAGE_COURSES;
  pdfDocumentSrc: any;
  page: number = 1;
  totalPages: number = 0;
  isLoaded: boolean = false;
  doesFileExist: boolean = false;
  constructor(private connectionService: ConnectionService, private route: Router,private localStorageService: LocalstorageService) { }

  ngOnInit(): void {
    if(this.localStorageService.get('TOKEN')) {
      this.connectionService.getAvailableCourses().subscribe((response: any) => {
        let availableCourses = response.availableCourses;
        for(let realestateCourse of this.realestateCourses) {
          let courseIndex = availableCourses.indexOf(realestateCourse.courseId);
          if( courseIndex !== -1) {
            realestateCourse.isCourseAllowed = true;
          }
        }
      });
    }
  }
  subscribeNow(course: any) {
    this.route.navigateByUrl('/subscribe');
  }

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }

  viewFile(course: string) {
    this.pdfDocumentSrc = "http://localhost:8080/getPdfFile";
    this.doesFileExist = true;
  }

}
export interface Courses {
  courseId: string;
  courseName: string;
  courseDesc: string;
  isCourseAllowed: boolean;
}

const REALESTATE_COURSES: Courses[] = [
  {
    courseId: 'real-estate-essentials',
    courseName: 'REAL ESTATE ESSENTIALS',
    courseDesc: 'Real estate is a complex industry, often mired by low standards and greed. Many agents are poorly trained and lack an in-depth understanding of the intricacies of sales, business, and negotiation. Much of the established realty thinking and the accepted strategies are outdated, deceptive, or just plain ineffective.' +
      '' + 'This isn’t the opinion of a buyer or seller—it’s the considered conclusion award-winning realtor P. Johan Sekovski has come to after years in the industry. In Real Estate Essentials, Sekovski aims his biting wit at the inadequacies of the industry while offering buyers, sellers, realtors, and brokers a road map to navigate real estate’s perilous waters and come out on top.' +
      '' + 'Sekovski artfully skewers and deconstructs the problems within the industry with an honest guide through the real estate quagmire—including realty techniques already proven to work well. He explains how to figure out who benefits from what and how to use such knowledge to your advantage. He covers everything from buying and selling to running a brokerage (and whether you should), managing rental properties, and flipping homes for profit.' +
      '' + 'Discover the advice you need to thrive in real estate, whether you’re buying, selling, or working within the exciting, often tumultuous industry.',
    isCourseAllowed: true
  },
  {
    courseId: 'residential-real-estate-transactions',
    courseName: 'RESIDENTIAL REAL ESTATE TRANSACTIONS',
    courseDesc: 'A real estate transaction is the process whereby rights in a unit of property (or designated real estate) is transferred between two or more parties, e.g. in case of conveyance one party being the seller(s) and the other being the buyer(s). It can often be quite complicated due to the complexity of the property rights being transferred, the amount of money being exchanged, and government regulations. Conventions and requirements also vary considerably among different countries of the world and among smaller legal entities (jurisdictions).',
    isCourseAllowed: false
  },
  {
    courseId: 'additional-residential-real-estate-transactions',
    courseName: 'ADDITIONAL RESIDENTIAL REAL ESTATE TRANSACTIONS',
    courseDesc: 'This course expands on the content presented in the Residential Real Estate Transaction course, exploring how key concepts are applied in other types of residential transactions, including: condominiums; new construction; rural properties; residential multi-family dwellings; and residential leasing.',
    isCourseAllowed: false
  },
  {
    courseId: 'simulation-residential-real-estate-transactions',
    courseName: 'SIMULATION FOR RESIDENTIAL REAL ESTAE TRANSACTION',
    courseDesc: ' In this simulation session, learners will spend 5 days practicing core activities and tasks related to residential real estate transactions with an experienced real estate professional acting as a coach. The simulation and related assessments will work through all stages of a typical transaction and will cover various property types (for example, single-family homes and condominiums). The experience will let learners apply knowledge and skills gained from the eLearning portion of the program in realistic simulated interactions.',
    isCourseAllowed: false
  },
  {
    courseId: 'commercial-real-estate-transactions',
    courseName: 'COMMERCIAL REAL ESTATE TRANSACTIONS',
    courseDesc: 'A commercial real estate transaction is a complex, multi-step process that can comprise months in totality. The benefits to investors of understanding the commercial real estate transaction process are primarily three-fold: 1) understanding the level of uncertainty at each phase of the transaction process and how execution risk diminishes over time 2) learning to better discern sponsors’ expertise and 3) gaining an appreciation for the amount of work involved for sponsors to bring deals to investors.',
    isCourseAllowed: false
  },
  {
    courseId: 'simulation-commercial-real-estate-transactions',
    courseName: 'SIMULATION FOR COMMERCIAL REAL ESTATE TRANSACTIONS',
    courseDesc: 'The prices of real-estate market influence the welfare of citizens and the business of real-estate investors. A well-known open challenge is to understand the repercussions of different combinations of individual buying/selling strategies on this market. The current approach is aimed at simulating these repercussions. For this purpose, a novel agent-based simulation tool includes common known strategies. This tool simulates the real-estate transactions from these strategies, showing the evolution of average prices and the results of each strategy (i.e. their success ratio, average price of their transactions and average waiting time). The underlying framework is extensible so that users can easily define and simulate new strategies. The experimentation of this work includes micro-validation of each kind of strategy',
    isCourseAllowed: false
  },
  {
    courseId: 'broker-qualifying-exam',
    courseName: 'BROKER QUALIFYING EXAM',
    courseDesc: 'The Real Estate Broker Exam is for active real estate salespersons who are currently registered with the Real Estate Council of Ontario (RECO) and aspire to continue their education to become a registered real estate broker. Register for the Broker Qualifying Exam to start the process.',
    isCourseAllowed: false
  },
  {
    courseId: 'broker-exam',
    courseName: 'BROKER EXAM',
    courseDesc: 'After closely studying the needs of candidates appearing for the Realestate Broker’s Exam our research team has prepared this excellent set of guide materials' +
      '' + 'This book covers around 1000 objective type questions and answers as per current syllabus. Besides the objective questions in each chapter we have given chapterwise Important Points to Remember to help the candidates to recall the answers to questions.' +
      '' + 'Our pass percentage in previous examinations has been 100% with candidates scoring average 75% marks.' +
      '' + 'This Insurance Broker’s Exam guide will be extremely helpful for the professionals who need a crash course for passing and do not have time to study. You need not attend any coaching after going through this study material.',
    isCourseAllowed: false
  },
];
const MORTGAGE_COURSES: Courses[] = [
  {
    courseId: 'mortage-exam',
    courseName: 'MORTGAGE EXAM',
    courseDesc: 'The Mortgage Licensing Act requires all licensed Mortgage Originators to pass a written test developed by NMLS. Each Mortgage Originator must take the National test component and a specific test component in order to satisfy the test requirements in Canada.' +
      '' + 'Once a Mortgage Originator has registered and paid for a test enrollment through NMLS, an appointment can be scheduled for the corresponding test. With testing deadlines already past, Mortgage Originators are encouraged to schedule a test appointment soon after obtaining an enrollment. Appointments are scheduled on a first come, first serve basis. The sooner an appointment is scheduled, the greater the likelihood of finding a preferred testing date, location, and time.',
    isCourseAllowed: false
  },
];


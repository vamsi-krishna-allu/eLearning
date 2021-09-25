import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/connection.service';
import { LocalstorageService } from 'src/app/localstorage.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {

  panelOpenState = false;

  mockTests = [
    {
      testId: 'test1',
      testName: 'MOCK TEST 1',
     testDesc: 'Real estate is a complex industry, often mired by low standards and greed. Many agents are poorly trained and lack an in-depth understanding of the intricacies of sales, business, and negotiation. Much of the established realty thinking and the accepted strategies are outdated, deceptive, or just plain ineffective.'+
    ''+'This isn’t the opinion of a buyer or seller—it’s the considered conclusion award-winning realtor P. Johan Sekovski has come to after years in the industry. In Real Estate Essentials, Sekovski aims his biting wit at the inadequacies of the industry while offering buyers, sellers, realtors, and brokers a road map to navigate real estate’s perilous waters and come out on top.'+
    ''+'Sekovski artfully skewers and deconstructs the problems within the industry with an honest guide through the real estate quagmire—including realty techniques already proven to work well. He explains how to figure out who benefits from what and how to use such knowledge to your advantage. He covers everything from buying and selling to running a brokerage (and whether you should), managing rental properties, and flipping homes for profit.'+
    ''+'Discover the advice you need to thrive in real estate, whether you’re buying, selling, or working within the exciting, often tumultuous industry.',
    isTestAllowed: false},
    {
      testId: 'test2',
      testName: 'MOCK TEST 2',
     testDesc: 'A real estate transaction is the process whereby rights in a unit of property (or designated real estate) is transferred between two or more parties, e.g. in case of conveyance one party being the seller(s) and the other being the buyer(s). It can often be quite complicated due to the complexity of the property rights being transferred, the amount of money being exchanged, and government regulations. Conventions and requirements also vary considerably among different countries of the world and among smaller legal entities (jurisdictions).',
     isTestAllowed: false},
    {
      testId: 'test3',
      testName: 'MOCK TEST 3',
     testDesc: 'This course expands on the content presented in the Residential Real Estate Transaction course, exploring how key concepts are applied in other types of residential transactions, including: condominiums; new construction; rural properties; residential multi-family dwellings; and residential leasing.',
     isTestAllowed: false},
    {
      testId: 'test4',
      testName: 'MOCK TEST 4',
     testDesc: ' In this simulation session, learners will spend 5 days practicing core activities and tasks related to residential real estate transactions with an experienced real estate professional acting as a coach. The simulation and related assessments will work through all stages of a typical transaction and will cover various property types (for example, single-family homes and condominiums). The experience will let learners apply knowledge and skills gained from the eLearning portion of the program in realistic simulated interactions.',
     isTestAllowed: false},
  ];

  constructor(private localStorageService: LocalstorageService, private connectionService: ConnectionService) { }
  
  ngOnInit(): void {
    if(this.localStorageService.get('TOKEN')) {
      this.connectionService.getAvailableMockTests().subscribe((response: any) => {
        let availablemockTests = response.availableMockTests;
        for(let mockTest of this.mockTests) {
          let testIndex = availablemockTests.indexOf(mockTest.testId);
          if( testIndex !== -1) {
            mockTest.isTestAllowed = true;
          }
        }
      });
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IProductClass, Product } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-pompe',
  templateUrl: './pompe.component.html',
  styleUrls: ['./pompe.component.css'],
})
export class PompeComponent implements OnInit {
  products: IProductClass[] = [
    {
      id: 1,
      name: 'DR 24',
      details: {
        max_shipment: '2.4ℓ/min',
        max_pressure: '180 bar',
        noise: '75db',
        dimension: 'RIDICAT:W60 X L39 X H128 REDUS:W60 X L39 X H88',
        weight: '55 kg',
        viscosity: '500,000 CPS',
        canistra: '20ℓ',
        aplicare:
          'Silicon, etanșant, adeziv, acoperire, sol P.V.C, epoxidic, unsoare etc.',
      },
      imgFileName: 'product1.jpg',
    },
    {
      id: 2,
      name: 'DR48',
      details: {
        max_shipment: '2.8ℓ/min',
        max_pressure: '280 bar',
        noise: '75~80db',
        dimension: 'RIDICAT:W60 X L39 X H135 REDUS:W60 X L39 X H95',
        weight: '59 kg',
        viscosity: '800,000 CPS',
        canistra: '20ℓ',
        aplicare:
          'Silicon, sigilant, adeziv, acoperire, sol P.V.C, epoxidic, vaselină etc.',
      },
      imgFileName: 'DR48.jpg',
    },
    {
      id: 3,
      name: 'DR55',
      details: {
        max_shipment: '10ℓ/min',
        max_pressure: '350 bar',
        noise: '75~80db',
        dimension: 'RIDICAT:W103 X L64 X H253 REDUS:W103 X L64 X H157',
        weight: '266 kg',
        viscosity: '1,000,000 CPS',
        canistra: '200ℓ',
        aplicare:
          'Silicon, sigilant, adeziv, acoperire, sol P.V.C, epoxidic, vaselină etc.',
      },
      imgFileName: 'DR-55.jpg',
    },
    {
      id: 4,
      name: 'DR55S',
      details: {
        max_shipment: '10ℓ/min',
        max_pressure: '350 bar',
        noise: '75~80db',
        dimension: 'RIDICAT:W64 X L48 X H172 REDUS:W64 X L48 X H126',
        weight: '132 kg',
        viscosity: '1,000,000 CPS',
        canistra: '200ℓ',
        aplicare:
          'Silicon, etanșant, adeziv, acoperire, sol P.V.C, epoxidic, unsoare etc.',
      },
      imgFileName: '50.jpg',
    },
  ];

  pompe_bi: Product[] = [
    {
      id: 5,
      name: 'HD50-2K',
      details: {
        raport_amestec: '1:1',
        max_shipment: '22ℓ/min',
        max_pressure: '250 bar',
        air: '1.1㎥',
        dimension: '70×76×120',
        weight: '132 kg',
        aplicare:
          'Acest echipament este utilizat pentru raportul Fix mix. Și acest echipament este folosit pentru pulverizare sau injectarea a 2 componente Vopsea cu Uretan epoxidic. Incluse 2 unități de furtun de aspirație',
      },
      imgFileName: '8.jpg',
    },
    {
      id: 6,
      name: 'HD73-2K',
      details: {
        raport_amestec: '1:1~4:1',
        max_shipment: '22ℓ/min',
        max_pressure: '250 bar',
        air: '1.1㎥',
        dimension: '84×77×150',
        weight: '216 kg',
        aplicare:
          'Acest echipament este utilizat pentru raportul de amestec variabil. Spray-ul raportului mixt sau injecția a 2 componente Epoxy, Paint Urethane. Incluse 2 unități de furtun de aspirație.',
      },
      imgFileName: '60.jpg',
    },
    {
      id: 7,
      name: 'DR55-2K',
      details: {
        raport_amestec: '7:1~18:1',
        max_shipment: '10ℓ/min',
        max_pressure: '380 bar',
        air: '1.3㎥',
        dimension: '110×150×210',
        weight: '520 kg',
        aplicare:
          'Acest echipament este utilizat pentru 2 componente Thiokol sau silicon, Uretan din sticlă dublă cu tambur 200L și cutie de 20L.',
      },
      imgFileName: '40.jpg',
    },
  ];
  pompe_airless: Product[] = [
    {
      id: 8,
      name: 'K45',
      details: {
        max_shipment: '12.6ℓ/min',
        max_pressure: '350 bar',
        noise: '75~85db',
        dimension: 'RIDICAT:W64 X L48 X H172 REDUS:W64 X L48 X H126',
        weight: '132 kg',
        viscosity: '1,000,000 CPS',
        canistra: '20ℓ',
        aplicare:
          'Silicon, etanșant, adeziv, acoperire, sol P.V.C, epoxidic, unsoare etc.',
      },
      imgFileName: '110.jpg',
    },
    {
      id: 9,
      name: 'K56',
      details: {
        max_shipment: '13ℓ/min',
        max_pressure: '380 bar',
        noise: '95~105db',
        dimension: '68×72×125',
        weight: '112 kg',

        necesar_aer: '2 ~ 7 bar',
        aplicare: 'Primer epoxid cu tar de zinc - Material cu vâscozitate mare',
      },
      imgFileName: '12.jpg',
    },
    {
      id: 10,
      name: 'K63',
      details: {
        max_shipment: '11ℓ/min',
        max_pressure: '400 bar',
        noise: '95~105db',
        dimension: '68×72×120',
        weight: '108 kg',

        necesar_aer: '2 ~ 7 bar',
        aplicare: 'Primer epoxid cu vâscozitate mare pe bază de latex',
      },
      imgFileName: '130.jpg',
    },
    {
      id: 11,
      name: 'K68',
      details: {
        max_shipment: '11ℓ/min',
        max_pressure: '450 bar',
        noise: '95~105db',
        dimension: '68×72×125',
        weight: '108 kg',

        aplicare: 'Primer epoxid cu tar de zinc - Material cu vâscozitate mare',
      },
      imgFileName: '14.jpg',
    },
    {
      id: 12,
      name: 'XT56',
      details: {
        max_shipment: '11ℓ/min',
        max_pressure: '380 bar',
        noise: '75~85db',
        dimension: '68×72×125',
        weight: '116 kg',
        necesar_aer: '2 ~ 7 bar',
        aplicare: 'Primer epoxid cu tar de zinc - Material cu vâscozitate mare',
      },
      imgFileName: '18.jpg',
    },
    {
      id: 13,
      name: 'XT73',
      details: {
        max_shipment: '11ℓ/min',
        max_pressure: '500 bar',
        noise: '75~85db',
        dimension: '68×72×120',
        weight: '116 kg',
        necesar_aer: '2 ~ 7 bar',
        aplicare: 'Primer epoxid cu tar de zinc - Material cu vâscozitate mare',
      },
      imgFileName: '19.jpg',
    },
    {
      id: 14,
      name: 'P30',
      details: {
        max_shipment: '4ℓ/min',
        max_pressure: '210 bar',
        noise: '75~80db',
        dimension: '40×45×90',
        weight: '30 kg',
        necesar_aer: '2 ~ 7 bar',
        aplicare: 'Lac de email pentru pete',
      },
      imgFileName: '16.jpg',
    },

    {
      id: 15,
      name: 'M23',
      details: {
        max_shipment: '2ℓ/min',
        max_pressure: '150 bar',
        noise: '65~70db',
        dimension: '40×45×85',
        weight: '25 kg',
        necesar_aer: '3 ~ 7 bar',
        aplicare: 'Lac de email pentru pete',
      },
      imgFileName: '150.jpg',
    },
  ];

  mixer: Product[] = [
    {
      id: 16,
      name: 'Mixer de vopsea',
      details: {
        mixare: 'Bidon de 200 litri',
      },
      imgFileName: 's7_3b.jpg',
    },
  ];

  masini: Product[] = [
    {
      id: 17,
      name: 'HL701',
      details: {
        max_shipment: '10ℓ/min',
        max_pressure: '250 bar',
        motor: 'Honda 5.5 CP',
        dimension: '130X85X120',
        weight: '120 kg',

        aplicare: 'MARCARE DE LINII',
      },
      imgFileName: '9.jpg',
    },
    {
      id: 18,
      name: 'HLE707',
      details: {
        max_shipment: '10ℓ/min',
        max_pressure: '-',
        motor: 'Honda 9 HP',
        dimension: '45X93X115',
        weight: '125 kg',
        latime_lucru: '250 mm',
        aplicare: '	ȘTERGEREA LINIEI',
        capacity: '150 ㎡/hr',
      },
      imgFileName: '10.jpg',
    },
  ];

  selectedProduct!: Product;

  constructor(private router: Router, private productServ: ProductService) {}

  ngOnInit() {
    console.log('The products are', this.products);
  }

  selectProduct(product: Product) {
    console.log('Product is', product);
    this.selectedProduct = product;
    console.log('Selected product is', this.selectedProduct);
    this.productServ.setSelectedProduct(this.selectedProduct);
    // Navigate to the 'pompe/:id' route with the selectedProduct object as a query parameter
    this.router.navigate(['pompe', this.selectedProduct.id]);
  }

  navigateToChildRoute(id: string) {}
}

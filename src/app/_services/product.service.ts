import {Injectable} from '@angular/core';
import {Product} from '../_models/product';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cartElements: Product[] = [];
  cartSubject: Subject<Product[]> = new Subject<Product[]>();
  products: Product[] = [
    new Product(1,
      'CALVIER GAMING MÉCANIQUE RÉTROÉCLAIRÉ RAZER BLACKWIDOW TOURNAMENT EDITION CHROMA V2',
      // tslint:disable-next-line:max-line-length
      'Switch Razer Jaune - Rétroéclairage RGB personnalisable - Capacité anti-ghosting de 10 touches simultanées - Touches entièrement programmables avec enregistrement de macros à la volée - Fonction Ultrapolling 1000 Hz - Compatible avec Razer Synapse 2.0 - Touches Multimédia - Dimensions 365 x 165 x 30 mm - Garantie 1 an',
      'assets/img/products/6.jpg',
      10,
      449),
    new Product(2,
      'PC PORTABLE LENOVO IDEAPAD L340-15IRH GAMING / I5 9É GÉN / 16 GO',
      // tslint:disable-next-line:max-line-length
      'Écran 15.6" Full HD IPS - Processeur Intel Core i5-9300H, up to 4.1 Ghz, 8 Mo de cache - Mémoire 16 Go - Disque 2 To - Carte graphique Nvidia GeForce GTX 1650, 4 Go de mémoire GDDR5 dédiée - Wifi - Bluetooth - USB 3.1 Type C - HDMI - RJ45 - Lecteur de cartes - Clavier rétroéclairé - Garantie 1 an + SIM Orange Offerte 30 Go',
      'assets/img/products/1.jpg',
      139,
      2599),
    new Product(3,
      'TÉLÉVISEUR SAMSUNG 49" FULL HD SÉRIE 5 + SIM ORANGE OFFERTE (60 GO)',
      // tslint:disable-next-line:max-line-length
      'Téléviseur Samsung 49" Full HD Série 5 - Résolution 1920 x 1080p - 1x USB - 2x HDMI - Haut Parleur 20W (L:10W, R:10W) - Audio Dolby Digital Plus - Tuner analogique - DVB-T2 - 1x entrée AV, 1x entrée composante (Y / Pb / Pr), 1x Sortie Audio - ConnectShare (USB 2.0) - Dimensions avec support: 1112.8 x 673.6 x 187.5 mm - Garantie 2 ans',
      'assets/img/products/2.jpg',
      10,
      1699),
    new Product(4,
      'TÉLÉPHONE PORTABLE SAMSUNG GALAXY NOTE 10+ / NOIR + SIM ORANGE 60 GO',
      // tslint:disable-next-line:max-line-length
      'Ecran Infinity 6.8" Dynamic AMOLED - Quad HD+ 1440 x 3040 - Processeur Exynos 9825 Octo-Core 2.7GHz - Android 9.0 Pie - RAM 12 Go - Mémoire 256 Go - APN: Quadruple capteur 12MP Dual Pixel + Ultra Grand Angle 16MP + Téléobjectif 12MP ToF, HDR10+, caméra frontale 10MP Dual Pixel - WiFi - Bluetooth - NFC - Capteur d"empreintes - S Pen - Garantie 1 an + SIM Orange 60Go',
      'assets/img/products/3.jpg',
      68,
      4199),
    new Product(5,
      'PC DE BUREAU ASUS ROG G21CN-FR001D / I7 8È GÉN / 16 GO',
      // tslint:disable-next-line:max-line-length
      'Processeur Intel Core i7-8700, up to 4.6 Ghz, 12 Mo de mémoire cache - Mémoire 16 Go - Disque 2 To + 256 Go SSD - Carte graphique Nvidia GeForce GTX 1080, 8 Go de mémoire dédiée - Graveur DVD - 1x USB 3.1 Type C - 8x USB 3.1 - RJ45 - Couleur Noir - Garantie 1 an',
      'assets/img/products/5.jpg',
      10,
      6749),
    new Product(6,
      'PC PORTABLE MSI GL75-9SGK / I7 9È GEN / 16 GO / RTX 2080 8G',
      // tslint:disable-next-line:max-line-length
      'Écran 17.3" Full HD - Processeur Intel Core i7-9750H, up to 4.5 Ghz, 12 Mo de cache - Mémoire 16 Go  - Disque 1 To + 256 Go SSD - Carte graphique Nvidia GeForce RTX 2080, 8 Go de mémoire dédiée - Wifi - Bluetooth - USB 3.1 Type C - HDMI - RJ45 - Lecteur de cartes - Clavier rétroéclairé - Garantie 1 an + SIM Orange Offerte 30 Go',
      'assets/img/products/4.jpg',
      10,
      8319),   
    new Product(7,
      'TÉLÉVISEUR SAMSUNG 75" UHD 4K / SMART TV / WIFI SÉRIE 7',
      // tslint:disable-next-line:max-line-length
      'Souris Gamer REDRAGON COBRA  - Rétro-éclairé RGB - Technologie de connexion: Filaire - Type de souris: Optique - Résolution Optique: 10000 dpi - Interface avec l\'ordinateur: USB - Boutons programmables: 7 - Compatible: Système Windows 2000 / ME / XP / 03 / VISTA / 7/8/10  - Longeur de Câble: 1.8 mètres - Couleur: Noir - Garantie: 1an ',
      'assets/img/products/7.jpg',
      7,
      9999),   
    new Product(8,
      'Pack Gamer REDRAGON Clavier K551 MITRA + Souris COBRA M711',
      // tslint:disable-next-line:max-line-length
      'Téléviseur Samsung 75" Série 7 - Smart Tv - Wifi - Résolution 4k (3840 x 2160p) - Processeur Quad Core - 2x USB - 3x HDMI - 1x RJ45 - Haut Parleur 20W (2x 10W) - Tuner analogique - Audio Dolby - 1x entrée AV, 1x entrée composante (Y / Pb / Pr), 1x Sortie Audio - ConnectShare (USB 2.0) - Slim Design - Garantie 2 ans',
      'assets/img/products/79640-large_default.jpg',
      87,
      160)  

  ];

  constructor() {
    this.cartSubject.next([]);

  }

  getProducts() {
    return this.products;
  }

  addToCart(product: Product) {
    this.cartElements.push(product);
    this.cartSubject.next(this.cartElements);
    if (product.quantity > 0) {
      product.quantity--;
    } else {
      this.products.splice(this.products.indexOf(product), 1);
    }
  }

  getCartItems() {
    return this.cartSubject.asObservable();
  }

  confirmPayment() {
    this.cartElements = [];
    this.cartSubject.next([]);
  }


}

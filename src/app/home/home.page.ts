// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
// })
// export class HomePage {

//   cep = '02650030';

//   uf = 'sp';
//   cidade = 'sao paulo';
//   rua = 'rua';

//   endereco: any = null;

//   constructor(private http: HttpClient) { }

//   buscarCep() {
//     this.http.get(`https://viacep.com.br/ws/${this.cep}/json/`)
//       .subscribe(data => {
//         if (data) {
//           this.endereco = data;
//           const listaEndereco = document.querySelector('.listaEndereco');
//           if (listaEndereco) {
//             listaEndereco.innerHTML = '';

//             const card = document.createElement('ion-col');
//             card.setAttribute('size-lg', '4');
//             card.setAttribute('size', '12');
//             card.setAttribute('size-md', '6');
//             card.innerHTML = `
//             <ion-card>
//               <ion-card-header>
//                 <ion-card-title>CEP: ${this.endereco.cep}</ion-card-title>
//               </ion-card-header>
//               <ion-card-content>
//                 <p>Logradouro: ${this.endereco.logradouro || 'Endereço não encontrado'}</p>
//                 <p>Complemento: ${this.endereco.complemento || 'Não possui complemento'}</p>
//                 <p>Bairro: ${this.endereco.bairro}</p>
//                 <p>Localidade: ${this.endereco.localidade}</p>
//                 <p>UF: ${this.endereco.uf}</p>
//               </ion-card-content>
//             </ion-card>
//               `;
//             listaEndereco.appendChild(card);
//           }
//         }
//       });
//   }

//   buscarCepPorRua() {
//     this.http.get<any[]>(`https://viacep.com.br/ws/${this.uf}/${this.cidade}/${this.rua}/json/`)
//       .subscribe((data) => {
//         if (data.length > 0) {
//           const listaEndereco = document.querySelector('.listaEndereco');
//           if (listaEndereco) {
//             listaEndereco.innerHTML = '';

//             data.forEach(endereco => {
//               const card = document.createElement('ion-col');
//               card.setAttribute('size-lg', '4');
//               card.setAttribute('size-sm', '12');
//               card.setAttribute('size-md', '6');
//               card.innerHTML = `
//                 <ion-card>
//                   <ion-card-header>
//                     <ion-card-title>CEP: ${endereco.cep}</ion-card-title>
//                   </ion-card-header>
//                   <ion-card-content>
//                     <p>Logradouro: ${endereco.logradouro || 'Endereço não encontrado'}</p>
//                     <p>Complemento: ${endereco.complemento || 'Não possui complemento'}</p>
//                     <p>Bairro: ${endereco.bairro}</p>
//                     <p>Localidade: ${endereco.localidade}</p>
//                     <p>UF: ${endereco.uf}</p>
//                   </ion-card-content>
//                 </ion-card>
//               `;
//               listaEndereco.appendChild(card);
//             });
//           }
//         }
//       });
//   }
// }


















import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cep = '02650030';

  uf = 'sp';
  cidade = 'sao paulo';
  rua = 'rua';

  endereco: any = null;

  constructor(
    private http: HttpClient,
    private toastController: ToastController
  ) { }

  async buscarCep() {
    try {
      const data: any = await this.http.get(`https://viacep.com.br/ws/${this.cep}/json/`).toPromise();
      if (data) {
        this.endereco = data;
        const listaEndereco = document.querySelector('.listaEndereco');
        if (listaEndereco) {
          listaEndereco.innerHTML = '';

          const card = document.createElement('ion-col');
          card.setAttribute('size-lg', '4');
          card.setAttribute('size', '12');
          card.setAttribute('size-md', '6');
          card.innerHTML = `
            <ion-card>
              <ion-card-header>
                <ion-card-title>CEP: ${this.endereco.cep}</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <p>Logradouro: ${this.endereco.logradouro || 'Endereço não encontrado'}</p>
                <p>Complemento: ${this.endereco.complemento || 'Não possui complemento'}</p>
                <p>Bairro: ${this.endereco.bairro}</p>
                <p>Localidade: ${this.endereco.localidade}</p>
                <p>UF: ${this.endereco.uf}</p>
              </ion-card-content>
            </ion-card>
          `;
          listaEndereco.appendChild(card);
        }
      }
    } catch (error) {
      this.presentToast('O seguinte endereço não foi encontrado, tente novamente mais tarde');
    }
  }

  async buscarCepPorRua() {
    try {
      const data: any = await this.http.get<any[]>(`https://viacep.com.br/ws/${this.uf}/${this.cidade}/${this.rua}/json/`).toPromise();
      if (data.length > 0) {
        const listaEndereco = document.querySelector('.listaEndereco');
        if (listaEndereco) {
          listaEndereco.innerHTML = '';

          // data.forEach(endereco => {
          data.forEach((endereco: { cep: any; logradouro: any; complemento: any; bairro: any; localidade: any; uf: any; }) => {
            const card = document.createElement('ion-col');
            card.setAttribute('size-lg', '4');
            card.setAttribute('size-sm', '12');
            card.setAttribute('size-md', '6');
            card.innerHTML = `
              <ion-card class="card">
                <ion-card-header>
                  <ion-card-title>CEP: ${endereco.cep}</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <p>Logradouro: ${endereco.logradouro || 'Endereço não encontrado'}</p>
                  <p>Complemento: ${endereco.complemento || 'Não possui complemento'}</p>
                  <p>Bairro: ${endereco.bairro}</p>
                  <p>Localidade: ${endereco.localidade}</p>
                  <p>UF: ${endereco.uf}</p>
                </ion-card-content>
              </ion-card>
            `;
            listaEndereco.appendChild(card);
          });
        }
      }
    } catch (error) {
      this.presentToast('O seguinte endereço não foi encontrado, tente novamente mais tarde');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
}

import './style.css';

import { of, map, Observable, Subscriber } from 'rxjs';

const emre = new Observable<string>((Subscriber) => {
  console.log('merhaba');
  Subscriber.next('Emre');
  Subscriber.next('Mısırlıoglu');
  setTimeout(() => {
    Subscriber.error(new Error('hata Aldık'));
  }, 2000);
  setTimeout(() => {
    Subscriber.next('Hülya');
    Subscriber.complete();
  }, 4000);

  return () => {
    console.log('Teardown');
  };
});

console.log('Observable olmadan once');
emre.subscribe({
  next: (value) => console.log(value),
  error: (err) => console.log(err.message),
  complete: () => console.log('Complated'),
});
console.log('Observable olduktan sonra');

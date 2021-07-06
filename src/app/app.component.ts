import { Component, OnInit, VERSION } from '@angular/core';
import { of, from } from 'rxjs';
import { map, tap, take, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    of([2, 4, 6, 8])
      .pipe(
        map(numbers => from(numbers)),
          mergeMap(number => of(number))
      )
      .subscribe(console.log);

    //[2, 3, 4].forEach(i => console.log(i));

    /* from([20, 15, 10, 5])
      .pipe(
        tap(item => console.log('emited item .... ' + item)),
        map(item => item * 2),
        map(item => item - 10),
        map(item => {
          if (item === 0) {
            throw new Error('zero detected');
          }

          return item;
        }),
        take(3)
      )
      .subscribe(
        item => console.log('result item: ' + item),
        err => console.error('error ocurred jojo:' + err),
        () => console.log('complete')
      );

    of('Apple1', 'Apple2', 'Apple3').subscribe(
      apple => console.log('Apple was emitted: ' + apple),
      err => console.log('Error ocurred my friend: ' + err),
      () => console.log('No more apples, go Home')
    );*/
  }
}

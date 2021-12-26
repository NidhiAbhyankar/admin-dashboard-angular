import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor() {}

  bigChart() {
    return [
      {
        name: 'Asia',
        data: [503, 456, 432, 126, 765],
      },
      {
        name: 'Africa',
        data: [324, 122, 675, 556, 987],
      },
    ];
  }
}

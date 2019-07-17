import { TestBed } from '@angular/core/testing';

import { CartPlayerService } from './cart-player.service';

describe('CartPlayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartPlayerService = TestBed.get(CartPlayerService);
    expect(service).toBeTruthy();
  });
});

import { Contact } from './contact';

describe('Contact', () => {
  it('should create an instance', () => {
    expect(new Contact('Alex', 'Otten', 'Freelance', 'arswaw@gmail.com','+1 (906) 585-2525', '853 Decatur Street, Waumandee, Nevada, 7107')).toBeTruthy();
  });
});

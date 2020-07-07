import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { APIService } from './api.service';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';

describe('AppComponent', () => {
  var httpClient: HttpClient;
  var httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DynamicTableComponent
      ],
      imports: [ HttpClientTestingModule ],
      providers: [APIService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'QLTest'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('QLTest');
  });

  it('should render nav-title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.nav-title').textContent).toContain('QLTest');
  });
});

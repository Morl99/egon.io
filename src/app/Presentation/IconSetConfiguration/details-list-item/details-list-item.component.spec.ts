import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsListItemComponent } from './details-list-item.component';
import { IconListItem } from '../../../Domain/Icon-Set-Configuration/iconListItem';
import { ElementTypes } from '../../../Domain/Common/elementTypes';
import { MaterialModule } from '../../../material.module';
import { MockModule } from 'ng-mocks';

const icon: IconListItem = {
  svg: '',
  isWorkObject: false,
  isActor: false,
  name: ElementTypes.ACTOR + 'testName',
};

describe('DetailsListItemComponent', () => {
  let component: DetailsListItemComponent;
  let fixture: ComponentFixture<DetailsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsListItemComponent],
      imports: [MockModule(MaterialModule)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsListItemComponent);
    component = fixture.componentInstance;
    component.icon = icon;
    fixture.detectChanges();

    spyOn(document, 'getElementById').and.returnValue({
      src: '',
    } as unknown as HTMLElement);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
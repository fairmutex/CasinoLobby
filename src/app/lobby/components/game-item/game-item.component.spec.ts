import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameItemComponent } from './game-item.component';
import * as DATA from '../../../../assets/data.json';
import { By } from '@angular/platform-browser';
describe('GameItemComponent', () => {
  let component: GameItemComponent;
  let fixture: ComponentFixture<GameItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameItemComponent);
    fixture.componentInstance.game = DATA['default'][0];
    fixture.componentInstance.game.key = fixture.componentInstance.game.name.trim().replace('_', '-');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit playClicked', function () {
    spyOn(fixture.componentInstance.playClicked, 'emit');
    // Act
    fixture.nativeElement.querySelector('.btn-play').dispatchEvent(new Event('click'));
    fixture.detectChanges();
    // Assert
    expect(fixture.componentInstance.playClicked.emit).toHaveBeenCalledWith(fixture.componentInstance.game.id);
  });

  it('should emit playClicked', function () {
    spyOn(fixture.componentInstance.practiceClicked, 'emit');
    // Act
    fixture.nativeElement.querySelector('.btn-practice').dispatchEvent(new Event('click'));
    fixture.detectChanges();
    // Assert
    expect(fixture.componentInstance.practiceClicked.emit).toHaveBeenCalledWith(fixture.componentInstance.game.id);
  });

  it('should emit gameItemClicked', function () {
    spyOn(fixture.componentInstance.gameItemClicked, 'emit');
    // Act
    fixture.nativeElement.querySelector('.game-box-container').dispatchEvent(new Event('click'));
    fixture.detectChanges();
    // Assert
    expect(fixture.componentInstance.gameItemClicked.emit).toHaveBeenCalledWith(fixture.componentInstance.game.id);
  });



});

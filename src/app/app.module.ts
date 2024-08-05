import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  MAT_CHECKBOX_DEFAULT_OPTIONS,
  MatCheckboxDefaultOptions,
} from '@angular/material/checkbox';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from 'src/app/tools/header/presentation/header/header.component';
import { SettingsComponent } from 'src/app/workbench/presentation/settings/settings.component';
import { AppComponent } from 'src/app/app.component';
import { ExportService } from 'src/app/tools/export/services/export.service';
import { ImportDomainStoryService } from 'src/app/tools/import/services/import-domain-story.service';
import { ImportRepairService } from 'src/app/tools/import/services/import-repair.service';
import { ModelerService } from 'src/app/tools/modeler/services/modeler.service';
import { TitleService } from 'src/app/tools/header/services/title.service';
import { LabelDictionaryService } from 'src/app/tools/label-dictionary/services/label-dictionary.service';
import { ReplayService } from 'src/app/tools/replay/services/replay.service';
import { ElementRegistryService } from 'src/app/domain/services/element-registry.service';
import { IconSetConfigurationService } from 'src/app/tools/icon-set-config/services/icon-set-configuration.service';
import { MassNamingService } from 'src/app/tools/label-dictionary/services/mass-naming.service';
import { InfoDialogComponent } from 'src/app/tools/import/presentation/info-dialog/info-dialog.component';
import { ExportDialogComponent } from 'src/app/tools/export/presentation/export-dialog/export-dialog.component';
import { ActivityDialogComponent } from 'src/app/tools/modeler/presentation/activity-dialog/activity-dialog.component';
import { UntypedFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HeaderDialogComponent } from 'src/app/tools/header/presentation/dialog/header-dialog/header-dialog.component';
import { IconDictionaryService } from 'src/app/tools/icon-set-config/services/icon-dictionary.service';
import { ModelerComponent } from 'src/app/tools/modeler/presentation/modeler/modeler.component';
import { SettingsModule } from 'src/app/workbench/presentation/settings/settings.module';
import { AutosaveService } from './tools/autosave/services/autosave.service';
import { DomainStoryModelerModuleModule } from './workbench/presentation/header/domain-story-modeler-module.module';
import { LabelDictionaryDialogComponent } from './tools/label-dictionary/presentation/label-dictionary-dialog/label-dictionary-dialog.component';
import { MaterialModule } from './material.module';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [
    HeaderComponent,
    SettingsComponent,
    AppComponent,
    InfoDialogComponent,
    ExportDialogComponent,
    ActivityDialogComponent,
    HeaderDialogComponent,
    ModelerComponent,
    LabelDictionaryDialogComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    SettingsModule,
    DomainStoryModelerModuleModule,
    MaterialModule,
    ColorPickerModule,
  ],
  providers: [
    AutosaveService,
    ExportService,
    ImportDomainStoryService,
    ImportRepairService,
    IconDictionaryService,
    TitleService,
    LabelDictionaryService,
    ReplayService,
    ElementRegistryService,
    IconSetConfigurationService,
    ModelerService,
    MassNamingService,
    UntypedFormBuilder,
    {
      provide: MAT_CHECKBOX_DEFAULT_OPTIONS,
      useValue: { clickAction: 'noop' } as MatCheckboxDefaultOptions,
    },
  ],
})
export class AppModule implements DoBootstrap {
  constructor(private autosaveService: AutosaveService) {
    // autosaveService wird so automatisch initialisiert, auf keinen Fall entfernen!
  }

  ngDoBootstrap(app: ApplicationRef): void {
    const componentElement = document.createElement('app-root');
    document.body.append(componentElement);
    app.bootstrap(AppComponent);
  }
}
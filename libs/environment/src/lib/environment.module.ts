import { NgModule, ModuleWithProviders } from '@angular/core';
import { VIDEOGAME_ENVIRONMENT } from './videogames.token';
import { VideogameEnvironment } from './videogames.model';

@NgModule({})
export class EnvironmentModule {
  static withEnvironment(
    environment: VideogameEnvironment
  ): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: VIDEOGAME_ENVIRONMENT,
          useValue: environment,
        },
      ],
    };
  }
}

import BaseApplicationGenerator from 'generator-jhipster/generators/base-application';
import { cleanupEntitiesFiles, writeEntitiesFiles } from './entity-files-angular.mjs';

export default class extends BaseApplicationGenerator {
  get writingEntities() {
    return this.asWritingEntitiesTaskGroup({
      cleanupEntitiesFiles,
      writeEntitiesFiles,
    });
  }
  get [BaseApplicationGenerator.WRITING_ENTITIES]() {
    return this.delegateTasksToBlueprint(() => this.writingEntities);
  }
}

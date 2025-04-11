import {markRaw} from "vue";

export class ProjectKeypointInfo {
  constructor(keypointName, keypointDescriptionComponent, keypointTags, keypointContentSrc, contentType) {
    this.keypointName = keypointName
    this.keypointDescriptionComponent = markRaw(keypointDescriptionComponent);
    this.keypointTags = keypointTags;
    this.keypointContentType = contentType;
    this.keypointContentSrc =keypointContentSrc;


  }
}

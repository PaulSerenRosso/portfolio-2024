import {markRaw} from "vue";

export class ProjectInfo {
  constructor(
    projectName,
    oneLineText,
    tagsText,
    overviewPictureSrc,
    timelineText,
    staffText,
    roleText,
    pitchComponent,
    trailerSrc,
    keypoints,
    firstGradientColor,
    secondGradientColor,
    link,

  ) {
    this.projectName = projectName
    this.oneLineText = oneLineText
    this.tagsText = tagsText
    this.overviewPictureSrc = overviewPictureSrc
    this.timelineText = timelineText
    this.staffText = staffText
    this.pitchComponent =  markRaw(pitchComponent);
    this.trailerSrc = trailerSrc
    this.keypoints = keypoints
    this.firstGradientColor = firstGradientColor
    this.secondGradientColor = secondGradientColor
    this.link = link;
    this.roleText= roleText;
  }
}

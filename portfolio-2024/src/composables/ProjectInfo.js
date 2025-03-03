export class ProjectInfo {
  constructor(
    projectName,
    oneLineText,
    tagsText,
    overviewPictureSrc,
    timelineText,
    staffText,
    roleText,
    pitchText,
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
    this.pitchText = pitchText
    this.trailerSrc = trailerSrc
    this.keypoints = keypoints
    this.firstGradientColor = firstGradientColor
    this.secondGradientColor = secondGradientColor
    this.link = link;
    this.roleText= roleText;
  }
}

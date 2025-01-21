import { defineStore } from 'pinia'
import { ProjectInfo } from '@/composables/ProjectInfo.js'
import { ProjectKeypointInfo } from '@/composables/ProjectKeypointInfo.js'
import {allTags} from "@/composables/Enums.js";



export const useProjectInfoStore = defineStore('projectsInfoStore', {
  state: () => ({


  allProjectsInfo:{
    dofusBetaProject: new ProjectInfo(
      "Dofus Unity Beta",
      '20-year-old fantasy MMORPG with turn-based combat',
      [allTags.internship, allTags.unity, allTags.cSharp, allTags.patchs ],
      'test.png',
      'November 2022 to January 2023 (2 months)',
      '10 Game Programmers / 4 Game Designers, 2 Game Programmers, 4 Game Artists',
      'Gameplay Programmer','Esquirel is a 2v2 MOBA. The players play squirrels and fight for collecting nuts around control points. The importance of the vision is the key of the victory. The fog of war, the bushes, wards or even the Squirels’ abilities push the players to ambush and be careful regarding their enemies’ positions. The universe in hand paint was inspired by Robin hood.',
      'ProjectsOverview.mp4',
      [new ProjectKeypointInfo('Test', 'blblblblbllb', 'ProjectsOverview.mp4',true),
        new ProjectKeypointInfo('Test', 'blblblblbllb', 'rocket.png',false),
        new ProjectKeypointInfo('Test', 'blblblblbllb', 'test.png',false),
        new ProjectKeypointInfo('Test', 'blblblblbllb', 'ProjectsOverview.mp4',true)],
      'green',
      'yellow','/esquirel'
    ),
    rsmProject: new ProjectInfo(
      "RSM",
      'Semi-cooperative social horror game at 4 players',
      [allTags.studentProject, allTags.unreal, allTags.cPlusPlus],
      'test.png',
      'November 2022 to January 2023 (2 months)',
      '10 Game Programmers / 4 Game Designers, 2 Game Programmers, 4 Game Artists',
      'Gameplay Programmer','Esquirel is a 2v2 MOBA. The players play squirrels and fight for collecting nuts around control points. The importance of the vision is the key of the victory. The fog of war, the bushes, wards or even the Squirels’ abilities push the players to ambush and be careful regarding their enemies’ positions. The universe in hand paint was inspired by Robin hood.',
      'ProjectsOverview.mp4',
      [new ProjectKeypointInfo('Test', 'blblblblbllb', 'ProjectsOverview.mp4',true),
        new ProjectKeypointInfo('Test', 'blblblblbllb', 'rocket.png',false),
        new ProjectKeypointInfo('Test', 'blblblblbllb', 'test.png',false),
        new ProjectKeypointInfo('Test', 'blblblblbllb', 'ProjectsOverview.mp4',true)],
      'blue',
      'yellow','/esquirel'
    ), inrsProject: new ProjectInfo(
      "It's not rocket science!",
      'Physic-based 2v2 party game with collaboration and sabotage',
      [allTags.studentProject, allTags.unreal, allTags.blueprints, allTags.steam],
      'test.png',
      'November 2022 to January 2023 (2 months)',
      '10 Game Programmers / 4 Game Designers, 2 Game Programmers, 4 Game Artists',
      'Gameplay Programmer','Esquirel is a 2v2 MOBA. The players play squirrels and fight for collecting nuts around control points. The importance of the vision is the key of the victory. The fog of war, the bushes, wards or even the Squirels’ abilities push the players to ambush and be careful regarding their enemies’ positions. The universe in hand paint was inspired by Robin hood.',
      'ProjectsOverview.mp4',
      [new ProjectKeypointInfo('Test', 'Esquirel is a 2v2 MOBA. The players play squirrels and fight for collecting nuts around control points. The importance of the vision is the key of the victory. The fog of war, the bushes, wards or even the Squirels’ abilities push the players to ambush and be careful regarding their enemies’ positions. The universe in hand paint was inspired by Robin hood.', 'ProjectsOverview.mp4',true),
        new ProjectKeypointInfo('Test', 'Esquirel is a 2v2 MOBA. The players play squirrels and fight for collecting nuts around control points. The importance of the vision is the key of the victory. The fog of war, the bushes, wards or even the Squirels’ abilities push the players to ambush and be careful regarding their enemies’ positions. The universe in hand paint was inspired by Robin hood.', 'rocket.png',false),
        new ProjectKeypointInfo('Test', 'Esquirel is a 2v2 MOBA. The players play squirrels and fight for collecting nuts around control points. The importance of the vision is the key of the victory. The fog of war, the bushes, wards or even the Squirels’ abilities push the players to ambush and be careful regarding their enemies’ positions. The universe in hand paint was inspired by Robin hood.', 'test.png',false),
        new ProjectKeypointInfo('Test', 'Esquirel is a 2v2 MOBA. The players play squirrels and fight for collecting nuts around control points. The importance of the vision is the key of the victory. The fog of war, the bushes, wards or even the Squirels’ abilities push the players to ambush and be careful regarding their enemies’ positions. The universe in hand paint was inspired by Robin hood.', 'ProjectsOverview.mp4',true)],
      'violet',
      'green', '/esquirel'
    ),

    bobyProject: new ProjectInfo(
      "Boby",
      'Casual arcade game to web application for gamification',
      [allTags.internship, allTags.web, allTags.js, allTags.multiplateform],
      'test.png',
      'November 2022 to January 2023 (2 months)',
      '10 Game Programmers / 4 Game Designers, 2 Game Programmers, 4 Game Artists',
      'Gameplay Programmer','Esquirel is a 2v2 MOBA. The players play squirrels and fight for collecting nuts around control points. The importance of the vision is the key of the victory. The fog of war, the bushes, wards or even the Squirels’ abilities push the players to ambush and be careful regarding their enemies’ positions. The universe in hand paint was inspired by Robin hood.',
      'ProjectsOverview.mp4',
      [new ProjectKeypointInfo('Test', 'blblblblbllb', 'ProjectsOverview.mp4',true),
        new ProjectKeypointInfo('Test', 'blblblblbllb', 'rocket.png',false),
        new ProjectKeypointInfo('Test', 'blblblblbllb', 'test.png',false),
        new ProjectKeypointInfo('Test', 'blblblblbllb', 'ProjectsOverview.mp4',true)],
      'yellow',
      'blue','/esquirel'
    ),
    esquirelProject: new ProjectInfo(
      'Esquirel',
      'Capture the point MOBA with ambushes and squirrels',
      [allTags.studentProject, allTags.unity, allTags.cSharp],
      'test.png',
      'November 2022 to January 2023 (2 months)',
      '10 Game Programmers / 4 Game Designers, 2 Game Programmers, 4 Game Artists',
      'Gameplay Programmer','Esquirel is a 2v2 MOBA. The players play squirrels and fight for collecting nuts around control points. The importance of the vision is the key of the victory. The fog of war, the bushes, wards or even the Squirels’ abilities push the players to ambush and be careful regarding their enemies’ positions. The universe in hand paint was inspired by Robin hood.',
      'ProjectsOverview.mp4',
      [new ProjectKeypointInfo('Test', 'Esquirel is a 2v2 MOBA. The players play squirrels and fight for collecting nuts around control points. The importance of the vision is the key of the victory. The fog of war, the bushes, wards or even the Squirels’ abilities push the players to ambush and be careful regarding their enemies’ positions. The universe in hand paint was inspired by Robin hood.', 'ProjectsOverview.mp4',true),
        new ProjectKeypointInfo('Test', 'Esquirel is a 2v2 MOBA. The players play squirrels and fight for collecting nuts around control points. The importance of the vision is the key of the victory. The fog of war, the bushes, wards or even the Squirels’ abilities push the players to ambush and be careful regarding their enemies’ positions. The universe in hand paint was inspired by Robin hood.', 'rocket.png',false),
        new ProjectKeypointInfo('Test', 'Esquirel is a 2v2 MOBA. The players play squirrels and fight for collecting nuts around control points. The importance of the vision is the key of the victory. The fog of war, the bushes, wards or even the Squirels’ abilities push the players to ambush and be careful regarding their enemies’ positions. The universe in hand paint was inspired by Robin hood.', 'test.png',false),
        new ProjectKeypointInfo('Test', 'Esquirel is a 2v2 MOBA. The players play squirrels and fight for collecting nuts around control points. The importance of the vision is the key of the victory. The fog of war, the bushes, wards or even the Squirels’ abilities push the players to ambush and be careful regarding their enemies’ positions. The universe in hand paint was inspired by Robin hood.', 'ProjectsOverview.mp4',true)],
      'orange',
      'green', '/esquirel'
    ),

  }




    }),

})
